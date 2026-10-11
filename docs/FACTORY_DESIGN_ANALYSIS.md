# CWI Factory Design Analysis

Date: 2026-10-11

This report describes the current KubeJS, datapack, quest, and machine design
in CWI. It separates source-confirmed behavior from design risks and from
questions that require a live Forge test. It does not treat every simplified
recipe as a defect. The pack deliberately uses abstractions when they make an
early factory practical.

Development priority confirmed by the author: Electrical Age has only just
started and is unfinished. Refine the first few chapters before expanding later
content. Evaluate the existing opening for clarity, progression, production
dependencies, and automation rather than treating unfinished later content as
a design flaw.

## Evidence And Limits

The analysis covered the active files under `kubejs/`, the CWI datapack under
`kubejs/data/`, the FTB Quests chapters under `config/ftbquests/quests/`, the
installed KubeJS-related jars, and the current recipe-removal lists. Existing
worldgen JSON describes generation rules, not guaranteed deposits in an existing
world. A source recipe proves intended registration, not successful serializer
deserialization or live machine operation.

The earlier silicon change was checked with a Node VM harness that
compared all 943 pre-existing generated metallurgy records and confirmed that
the only new records are silicon casting, melting, bulk melting, and milling.
`node --check` passed for both changed scripts and `git diff --check` passed.
The harness is a structural check; an in-game reload is still the final proof.

## Implemented Opening Improvements

The author authorized improvements based on this report. This batch addresses
supply gaps, recoverable waste, and planning information in the existing
opening and industrial progression.

| Change | Result And Reason |
| --- | --- |
| Precipitant supply | One soda powder makes four reagent doses. The consumed precipitation reagent now has a simple automated source; these are smaller doses, not four full soda portions. |
| Flotation reagent supply | Unheated Create mixing combines clay, plant oil, and bioethanol into four doses. Existing pressing and fermentation supplies support the line; the generic collector/frother blend is a gameplay abstraction. |
| Lubricating oil supply | Wax oil can be distilled into lubricant and four existing petroleum cuts instead of being cracked. The five liquid outputs total the 1,000 mB input. Existing plant-oil assembly still supplies the first heavy machinery. |
| Native intake compatibility | Steel refining and air liquefaction consume an air tag containing both native TFMG air and KubeJS air. The intake hardcodes its native fluid, so replacing recipe IDs alone had disconnected its output. Tag inputs avoid an extra conversion machine. |
| Glass reject recovery | Heated compacting reclaims one sintered blank from four glass powders. Rejects can return through pressing and quenching; four powders match the maximum milling yield of one glass block, preventing resource gain. |
| Ore planning in JEI | Shared separation values supply both recipes and localized information. Fifteen ore entries show expected powder/concentrate yield, tailings routes, applicable acid recovery, and buffer advice. |
| Compound mineral overview in JEI | Eighteen entries show a shadowed mineral block, its deposit, processing forms, physical/acid products, and available furnace products. Tooltips distinguish producing routes, probabilities, and intermediate forms. Halite and lignite use their own supply routes; the sulfur block explicitly has no current processing recipe. |
| Incubator planning in JEI | An enlarged, unframed microbe icon shows culture yield as `xN`. Feed slots are shifted right; step numbers, `xN`, and `64 RPM` use gold text. Duration and actual plate input/output remain visible. Headings, inoculation/uncapping prose, and the bottom-right culture/dish recovery slots have been removed at the author's request. |
| Early quest teaching | The mechanical introduction explains speed versus stress capacity and overload remedies. The deployer entry explains how the same unfinished workpiece retains assembly progress. |

Structural validation preserves all 203 ore registrations and all 18 existing
glass registrations. The three supply recipes and the glass recovery recipe
have four unique explicit IDs; distillation output volume is conserved.
The planning script registers 49 information groups. EN/ZH keys and substitution
counts match, and every pre-existing translation value is preserved. Comparisons
of 10 furnace and 85 chemistry registrations confirm that only their two air
inputs change, from an exact fluid to the shared tag; quantities, outputs,
heat, and duration stay the same.

All changed JavaScript files compile with the installed Rhino jar. The installed
FTB Library SNBT parser accepts the two edited quest chapters. Installed JEI,
TFMG, and MBD2 signatures/bytecode were checked for the new API calls, output
limits, native air source, and typed fluid-tag input. `git diff --check` passes.
Minecraft recipe reloads, machine operation, and live JEI rendering remain
untested. Restart before checking the shared startup data and client displays.

### Corrections After The First Game Reload

The first reload reported two Rhino execution errors: a block-scoped `const`
was redeclared across furnace fluid entries and across incubator filling steps.
Both branches now pass their values directly without those local declarations.
The supplied client log also showed an ambiguous `Text.join` overload; ore
byproduct names now use component appends and retain translated names/separators.

The original furnace error was reproduced by executing the full recipe callback
with the installed Rhino jar and mocked game APIs. The repaired callback runs
twice and registers all 10 recipes on each invocation, including the typed air
tag. The ore information callback likewise executes twice with 49 groups per
invocation. The original incubator error was also reproduced; repaired layout
and draw handlers run twice across all 31 variants and 124 feed entries, with
deferred tooltip indices, tools, repeats, and displayed amounts checked.
These execution checks cover callback scoping; mocked APIs do not
prove live serialization or rendering. Compile-only validation had missed the
reported execution errors.

### Mineral Overview And Incubator Presentation

The mineral category is an overview rather than an executable combined recipe.
It indexes ore blocks, deposits, and processing forms for ingredient lookup.
Deposit tooltips explain that mining supplies the ore block. A mineral with no
implemented acid route does not display its unused registered leach forms;
the status describes pack processing, not chemical impossibility in reality.

Physical-product tooltips separate crushing/milling, vibration, centrifugation,
and flotation probabilities. Acid products identify fan processing, leach
residue washing, purification, and precipitation. Enabled concentrate/crystal
furnace conversions produce a separate ingot row; disabled conversions receive
a tooltip rather than an invented route. Chances above one in host-rock
centrifugation display as guaranteed output, without changing the recipe value.

Halite shows brine, salt, evaporation residue, and returned water. Lignite shows
its lump fuel use and microbial coal conversion; its powder has no current
onward use. Returned microbes are display-only entries. Sulfur's related forms
and separate ore sources are distinguished from the unprocessed sulfur block.

The revised incubator handlers execute twice for all 31 variants and 124 feed
entries with the installed Rhino build. The checks include deferred feed
tooltips, the shifted coordinates, microbe yield overlay, and retained time/RPM.
This verifies callback execution and display data; live rendering remains a
Minecraft check.

The later presentation adjustment removes the bottom-right recovery slots and
colors the step numbers, yield multiplier, and RPM gold. The yield remains on
the enlarged microbe icon. Rhino compilation, Node syntax, and diff checks pass
for this adjustment. Repeated Rhino execution also verifies ingredient lookup
for all 124 preparation feeds across the 31 variants, including exact item
counts and repeated fluid amounts; its final appearance still requires a live
check.

The mineral handlers execute across three full passes for all 18 entries.
The validation checks active forms, product IDs and route probabilities,
furnace flags, sulfur isolation, returned-culture roles, 795 bounded and
nonoverlapping slots, and 795 deferred tooltip callbacks. All 48 added EN/ZH
category keys resolve and their substitution counts match. These are source
and mock-runtime checks, not live registry or visual verification.

## Architecture

CWI has six cooperating layers:

1. **Shared data.** `startup_scripts/Preload/Global.js` defines stones, compound
   ores, production maps, material forms, apples, and variants. Generators read
   these maps, so one entry can create registrations, tags, recipes, and quest
   targets.
2. **Startup registries.** Startup scripts register items, blocks, fluids,
   tools, effects, catalysts, and custom recipe interactions. Registry changes
   normally require a restart.
3. **Server recipes and behavior.** Server scripts add Create, TFMG, CWI
   Multiblocked, chemistry, biology, metallurgy, tags, loot, progression, and
   player interactions. `RecipeDelete.js` is part of the progression design: it
   removes native routes before replacements are added.
4. **Client discovery.** JEI categories, hides, tooltips, and custom displays
   expose only selected parts of the server graph. A JEI display is not proof
   that the server recipe is valid.
5. **Datapack worldgen.** Custom biomes, multi-noise selection, configured and
   placed features, structures, loot tables, and dimension settings make
   geography a production input.
6. **Quests and manuals.** FTB Quests supplies the teaching sequence and story
   context that the globally registered recipes do not enforce themselves.

The script count and generated content are intentionally large: a data-driven
material matrix keeps additions consistent, but it also multiplies the number
of recipes a player can see. The most important maintenance rule is to inspect
the shared generator before editing an individual output.

## The Player's Production Loop

The intended loop is coherent and cumulative:

1. **Awakening and salvage.** The starter script places the bunker, relocates
   the player, and uses short effects and audiovisual cues to establish the
   ruined setting.
2. **Recovery.** Scrap, ash logs, rusted iron, damaged equipment, manual scraps,
   toolboxes, lockboxes, and staff logs provide the first material and narrative
   clues. The player restores capability before building a normal factory.
3. **Mechanical infrastructure.** Andesite compound and alloy unlock Create
   kinetics, pumps, belts, depots, tanks, pressing, milling, and package
   transport. This teaches movement before heavy chemistry.
4. **Industrial metallurgy.** Industrial iron, coke, fireclay, limestone, and
   reinforcement lead to the custom blast furnace. Coke now feeds every pig-iron
   route. The air route is the bootstrap steel route; oxygen is the faster later
   route.
5. **Chemical and petroleum expansion.** Vats, distillation, coking,
   fractionation, cracking, reforming, acids, catalysts, polymers, nylon, PET,
   and epoxy turn a mechanical factory into an interconnected process plant.
6. **Biological recovery.** Reusable cultures and microbes turn soil, stone,
   biomass, brine, and mineral powders into renewable feeds and reserve material.
7. **Precision and storage.** Electron tubes, control chips, precision
   mechanisms, integrated tubes, heavy machinery, and nested Create assemblies
   support storage automation and construction tools.
8. **Electrical work begins.** `ElectricAge.js` currently starts the electrical
   chapter with its first connector route. It is an early foundation, not a
   completed power age. The first few chapters should be refined for clarity
   and pacing before development moves on to later content.
9. **Stargate objective.** Manuals and staff logs frame the factory as an
   attempt to restore a damaged civilization and control the Stargate. Logs can
   foreshadow the incident through ordinary work details without explaining it
   directly.

Age chapters organize this experience, but most recipes are globally registered.
Ingredient dependencies, machine structures, heat, and removed native recipes
are the real gates. A recipe path ending in `_manual_only` is ignored by Create
automation in the installed version; it is not a general quest-stage lock.

## Production Systems

### Geology And Ore Processing

Compound ores map an ore identity to a main product, sulfur behavior,
leachability, host-rock weights, and byproducts. The processing line generally
moves through crushing or milling, vibration or flotation, leaching, washing,
purification, and crystallization. A raw ore can produce an extra crushed item;
separation then uses chances for the main material, byproducts, tailings, and
host rock. Centrifugation raises the main probability and changes byproduct
chances. Shared values now drive both recipe generation and JEI averages:
2.75 powders per raw block, approximately 0.88 main concentrates with vibration
or 1.16 with centrifugation before tailings recovery. These are long-run means,
not guaranteed batch counts.

This is a strong connection between exploration and factory layout. The player
chooses between a simpler probabilistic separation and a reagent-heavy recovery
line. The cost is planning difficulty: a short run does not guarantee a metal
count, and tailings, stubborn tailings, acid, flotation reagent, and precipitant
must have visible storage and supply paths. Consumed flotation reagent now has
an unheated clay/oil/alcohol mixing route, and soda supplies precipitant doses.
The reagent recipes and ore-specific recovery notes make these dependencies
discoverable without changing separation chances.

### Generic Material Grammar

Material data stores formula, melting point, stiffness, item forms, and a fluid.
Generated recipes use a shared quantity grammar: 90 mB for an ingot or sheet,
45 mB for a rod, wire, or spring, 10 mB for a nugget, and 810 mB for a block.
Melting time scales from melting point, and terracotta molds are withheld above
the configured temperature threshold.

This makes a new material cheap to add and lets players predict its forms. It
also means polymers and metals inherit a common shape economy even when their
physical behavior differs. That is an accepted gameplay abstraction unless a
specific material needs a special route.

**Liquid silicon integration.** Silicon is deliberately a `metalloid`, uses the
special `kubejs:liquid_silicon` registration with TFMG textures and a fireproof
bucket, and already belongs to `cwi:moltens`, `kubejs:molten_hot`, and the hot
item handling. Native TFMG silicon casting is removed. The metallurgy generator
previously filtered out metalloids, so silicon had no generated way back from
liquid to `tfmg:silicon_ingot`. The filter now includes `metalloid` for both
casting/melting and pressing/milling generation. This adds the ordinary 90 mB
superheated casting and remelting routes without duplicating the special fluid.

### Glass

The glass batch keeps soda and limestone as simple early inputs and returns them
as outputs. This is intentionally a reusable gameplay loop so glass remains
automatable before the player has a complex carbonate plant. Sintering, pressing,
quench assembly, and nitrate ion exchange provide later quality routes. Chance
outputs communicate process loss without making the line unusable. Treat the
returned soda and limestone as a deliberate reusable feed in documentation;
do not describe them as a strict mass-balance simulation. Cracked and devitrified
glass can now be milled and reclaimed as blanks. Milling averages three powders
and yields at most four; reclaiming requires four, so recovery is lossy on
average and cannot multiply glass.

### Paper And Renewable Biomass

Pulp fermentation accepts wood chips or the broad `create:pulpifiable` tag. A
forming fabric is filled, pressed, and smoked, then returned for reuse. The
capital-tool pattern is good factory design: only pulp needs continuous
transport. The two early fermentation recipes mainly differ in scale, so they
are throughput options rather than separate strategic branches.

### Chemistry And Petroleum

`Chemistry.js` uses explicit fluid state, mole-unit, mixture, and balancing rules.
Registered gases use a different mB-per-mole convention from liquids, so a phase
change can increase measured fluid volume without multiplying modeled material.
The comments correctly mark undefined mixtures and gameplay quantities.

The useful network is crude fractionation -> FCC or visbreaking -> naphtha
cracking -> gas and aromatic separation -> reforming, solvents, polymers, nylon,
PET, and epoxy. Wax oil now has a lubricant-stock branch alongside cracking,
giving the migrated lubricating oil a current source. Catalysts are returned
in several major reactions, making them capital infrastructure. The main design
cost is that many reactions share the same vat and differ mostly by fluids,
heat, and time. Several petroleum cuts
such as dry gas, cracked gas, raffinates, dewaxed oil, coke oil, and
cyclohexanone need a current consumer or sink check before any recipe is called
broken; source references alone do not establish a full production dead end.

### Biology

Microbe recipes have basin and bulk variants, retain the culture item, and bridge
renewable biomass to fuel, gas, soil products, catalysts, and mineral powders.
Crystallum coccus turns powder plus water into crystals while returning itself.
This creates an accessible reserve route and rewards building a culture line.

The risk is timing: if high-yield cultures become available before targeted
mining has mattered, geography loses strategic value. Gate advanced strains by
their culture discoveries rather than removing the renewable system. The
incubator JEI display now shows ordered preparation feeds, repeated feed amounts,
incubation, and the resulting culture yield. Detailed recovery slots were removed
to keep the display compact. Each preparation item and fluid is indexed as a
JEI input, so its Uses lookup also finds the relevant culture pages.

### Blast Furnace And Steel

The custom blast furnace derives parallel capacity from fireproof-brick groups,
counts reinforcement, samples up to five heater positions, approaches a capped
temperature, and scales processing time and parallel operation. This makes the
structure itself part of factory optimization.

Current steel routes are clear:

| Route | Inputs | Outputs | Role |
| --- | --- | --- | --- |
| Air | 900 mB molten pig iron, limestone, 1,500 mB air, 5 mB liquid silicon | 810 mB molten steel, 180 mB molten slag | First steel route |
| Oxygen | 1,800 mB molten pig iron, limestone, 600 mB oxygen, 10 mB liquid silicon | 1,710 mB molten steel, 180 mB molten slag | Faster later route |

All pig-iron feeds now include coke. Liquid silicon is a valid molten/hot
process fluid and can be supplied through the same tagged fluid logistics, while
its special registration preserves TFMG's intended appearance. Quests should
present the air route first and the oxygen route as a scale upgrade. Both steel
refining and air liquefaction accept native intake air through the shared air
tag. JEI explains warmup, the different roles of heaters and reinforcement, and
separate steel/slag outputs. Slag already has a casting-block route followed by
native crushing into solid slag for construction mixtures.

### Precision, Storage, And Logistics

Nested sequenced assemblies make precision mechanisms, tracks, sturdy sheets,
control chips, electron tubes, and heavy machinery feel like sustained factory
projects. Returned tools and NBT-preserving upgrade recipes reward a stable line.
The same components feed backpacks, storage controllers, drawers, construction
wand tiers, and large logistics networks, giving precision a real purpose.

The price is repeated operations and a deep dependency graph. Explain retained
tools, fluid inputs, and the capability unlocked by a tier; do not repeat every
recipe ingredient in quest prose when JEI already shows it.

## Player Experience: Strengths

- Material states are visible: powders, solutions, crystals, molten fluids, and
  shaped parts tell the player where an item sits in the process.
- Basin and bulk variants let a manual prototype become an automated line.
- Catalysts and microbes return, so infrastructure matters more than repeated
  grinding.
- Geography, host rock, byproducts, and processing method are linked.
- The blast furnace's structure and heat make scale a spatial decision.
- Staff logs can carry small clues and uncertainty without replacing the clear
  practical objective.
- The pack's deliberate simplified loops, including glass soda/limestone, keep
  early automation achievable.

## Player Experience: Risks And Testable Questions

These are design risks, not automatic fixes.

1. **Cognitive load.** Many forms and generated recipes require constant JEI
   searching. A compact material source/consumer/renewability summary would
   help more than longer item descriptions.
2. **Hidden hazards.** Falling electronics, hot inventory items, acids,
   neurotoxin accumulation, lockpicking durability, and pipe toggling can feel
   arbitrary if the first lesson is a costly failure. Playtest discovery cost.
3. **Expected-yield opacity.** Ore and biological chances are understandable in
   source but not always as a per-hour factory expectation. Show an average and
   a variance note where it changes layout decisions.
4. **Byproduct pressure.** Tailings, residues, cracked gases, steam, slag, and
   carrier liquids can stop a correct factory when tanks fill. Each major line
   needs a recovery, storage, or documented disposal route.
5. **Duplicate sources of truth.** Chemistry and the mixing-vessel registrations
   duplicate preparations. A canonical data table could generate both without
   changing the player-facing routes.
6. **Biology and geography timing.** Renewable microbes should arrive late enough
   that exploration still matters, while remaining a reliable reserve afterward.
7. **Potential duplicate registration.** `Mods/Create.js` appears to register a
   smart fluid interface twice. Confirm recipe IDs and serializer behavior in a
   live reload before changing it.

## Lessons From Other Factory Games

| Game | Observed design lesson | Application to CWI |
| --- | --- | --- |
| [Factorio](https://factorio.com/blog/post/fff-266) | Remove mechanics that add explanation cost without a meaningful factory choice; expose rates and throughput. | Keep CWI's hazards when they create planning decisions, but document them before failure. Add reference batch/rate summaries for ore, steel, and chemistry. |
| [Satisfactory](https://www.satisfactorygame.com/) | Spatial construction, distinct logistics roles, and exploration feeding expansion make layout visible. | The blast furnace structure, biome deposits, tanks, belts, pipes, and storage already support this. Improve source and byproduct signposting. |
| [Dyson Sphere Program](https://store.steampowered.com/app/1366540/Dyson_Sphere_Program/) | Geographic specialization and scalable logistics turn expansion into a production decision. | Let biome-specific ores and biological reserves complement each other, and show when a new region solves a factory bottleneck. |
| [Shapez 2](https://store.steampowered.com/app/2162800/shapez_2__Factory/) | A small production vocabulary, visible multi-layer layouts, blueprints, and easy rebuilding keep complexity focused on flow. | CWI cannot remove its survival and chemistry identity, but can group generated recipes and provide line cards so complexity stays in factory design. |
| [Mindustry](https://mindustrygame.github.io/wiki/) | Production chains and resource roles are readable, while the source and mod surface remain inspectable. | Keep the data-driven globals and custom JEI categories; add a concise source/consumer view for bottleneck materials. |
| [Captain of Industry](https://www.captain-of-industry.com/) | Terrain, population needs, pollution, waste, and specialized logistics make secondary streams strategic. | Treat slag, tailings, residues, and water as deliberate logistics streams with optional recovery sinks instead of accidental blockers. |

These comparisons are design references, not instructions to copy another
game's mechanics. CWI's strongest identity is the combination of recovery story,
geology, chemistry, and custom machinery.

## Remaining Improvements

These are proposals for later batches. The implemented changes above do not
complete every item in the original design review.

### High impact, low behavior risk

1. Extend the new planning notes to petroleum and polymer lines where batch
   size, heat, duration, or competing outputs affect layout decisions.
2. Extend source and consumer guidance for bottleneck feeds such as coke,
   silicon, oxygen, and acids. Avoid repeating recipe lists already in JEI.
3. Check remaining residue, gas, and carrier-water streams for usable sinks
   before adding recovery recipes. Slag and glass rejects already have routes.

### Medium impact, moderate maintenance work

4. Define canonical line data and generate the Create and MBD preparation routes
   from it. Preserve existing IDs and quantities while removing source drift.
5. Group generated metallurgy and upgrade JEI entries by material and operation.
6. Review advanced mineral-microbe milestones while retaining their
   renewable reserve role.
7. Make the first air-steel route and later oxygen route explicit in the quest
   dependency and manual wording.

### Later review

8. Confirm the duplicate smart-fluid-interface registration and resolve only if a
   live serializer test shows replacement or conflict.
9. Expand the electrical age after the first few chapters have been refined.
    Its current small scope reflects ongoing development and should not be
    evaluated as a finished system.
10. Consider optional catalyst maintenance only if perfect catalyst return
    removes a meaningful planning choice. Reusable catalysts are currently a
    strong accessibility feature.

## What Should Remain Unchanged

- Hammer behavior, loot rolls, lava-extractor edge cases, and intentional crafting
  overflow remain deferred or accepted as requested.
- The soda/limestone glass loop remains a gameplay simplification.
- The blast furnace remains the steel producer; the air route remains the
  bootstrap and oxygen remains the upgrade.
- Liquid silicon remains a special KubeJS fluid with TFMG textures and a
  fireproof bucket. It carries molten tags without being added to the generic
  molten-metal registry.
- Existing narrative uncertainty, staff-log foreshadowing, and practical quest
  teaching remain distinct from item warnings and recipe prose.
- Ordinary KubeJS IDs may use generated English names; explicit language entries
  are reserved for special display names.

## Runtime Validation Plan

Before calling a design issue a bug, test the smallest relevant case:

1. Restart after startup registry edits; `/reload` is insufficient for reliable
   new registry validation.
2. Confirm liquid silicon appears in molten fluid filters, hot-container
   warnings, contact damage, and casting/melting JEI entries.
3. Form a blast furnace with the intended reinforcement and heater layout; test
   native intake air feeding the first steel recipe, oxygen steel, coke inputs,
   heat state, parallel count, and slag output. Test the same native air in
   liquefaction; confirm its output stays KubeJS condensed air.
4. Run one ore line from raw block through tailings and precipitation, recording
   average output over multiple batches rather than one lucky run.
5. Verify every major petroleum byproduct in JEI and a machine inventory before
   adding a sink.
6. Test the duplicate smart-fluid-interface recipes by ID and serializer result.
7. Generate a fresh world or new chunks for worldgen edits; existing chunks do
   not retroactively regenerate.
8. Produce both reagents and lubricating oil, then consume them in their
   existing ore/assembly routes. Check upstream supply and output-tank handling.
9. Mill glass rejects, compact four powders with heat, and return the blank to
   pressing/quenching. Check that the reusable carbonate feed stays separated.
10. Inspect incubator variants with the longest feed sequence and repeated
    feeds in both languages; check slot placement, gold step/yield/RPM labels,
    duration, and the displayed culture yield against actual operation.

## Source Map

- Shared definitions: `kubejs/startup_scripts/Preload/Global.js`
- Fluid registry: `kubejs/startup_scripts/fluids/fluid.js`
- Generated metallurgy: `kubejs/server_scripts/Recipes/Metallurgy.js`
- Blast furnace: `kubejs/server_scripts/Multiblocked2/BlastFurnace.js`
- Chemistry: `kubejs/server_scripts/Recipes/Chemistry.js`
- Reagent and lubricant supplies: `kubejs/server_scripts/Recipes/IndustrialSupplies.js`
- Ore line: `kubejs/server_scripts/Recipes/ProcessingLine.js/Ore.js`
- Glass and paper: `kubejs/server_scripts/Recipes/ProcessingLine.js/Glass.js`,
  `Paper.js`
- Biology: `kubejs/server_scripts/Recipes/MicrobesRecipe.js`
- Progression: `kubejs/server_scripts/Progression/`
- Recipe removals: `kubejs/server_scripts/Recipes/RecipeDelete.js`
- Tags and hazards: `kubejs/server_scripts/tags/tags.js`,
  `kubejs/server_scripts/Interactions/PlayerEvents.js`
- Worldgen: `kubejs/data/cwi/worldgen/`,
  `kubejs/data/minecraft/dimension/overworld.json`
- Quests: `config/ftbquests/quests/chapters/`
- JEI planning: `kubejs/client_scripts/JEI/ProductionPlanning.js`, `CompoundMinerals.js`, `Incubator.js`
- KubeJS API reference: `docs/KUBEJS_ULTIMATE_GUIDE.md`
