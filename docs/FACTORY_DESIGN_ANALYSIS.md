# CWI Factory Design Analysis

Date: 2026-10-11

This report describes the current KubeJS, datapack, quest, and machine design
in CWI. It separates source-confirmed behavior from design risks and from
questions that require a live Forge test. It does not treat every simplified
recipe as a defect. The pack deliberately uses abstractions when they make an
early factory practical.

## Evidence And Limits

The analysis covered the active files under `kubejs/`, the CWI datapack under
`kubejs/data/`, the FTB Quests chapters under `config/ftbquests/quests/`, the
installed KubeJS-related jars, and the current recipe-removal lists. Existing
worldgen JSON describes generation rules, not guaranteed deposits in an existing
world. A source recipe proves intended registration, not successful serializer
deserialization or live machine operation.

The current silicon change was checked with a Rhino-style VM harness that
compared all 943 pre-existing generated metallurgy records and confirmed that
the only new records are silicon casting, melting, bulk melting, and milling.
`node --check` passed for both changed scripts and `git diff --check` passed.
The harness is a structural check; an in-game reload is still the final proof.

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
8. **Stargate objective.** Manuals and staff logs frame the factory as an
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
chances.

This is a strong connection between exploration and factory layout. The player
chooses between a simpler probabilistic separation and a reagent-heavy recovery
line. The cost is planning difficulty: a short run does not guarantee a metal
count, and tailings, stubborn tailings, acid, flotation reagent, and precipitant
must have visible storage and supply paths. The source confirms that flotation
reagent and precipitant are consumed, while their complete crafting supply route
is not obvious from the active scripts; verify this in JEI and in a live test
before calling it a dead end.

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
do not describe them as a strict mass-balance simulation.

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
PET, and epoxy. Catalysts are returned in several major reactions, making them
capital infrastructure. The main design cost is that many reactions share the
same vat and differ mostly by fluids, heat, and time. Several petroleum cuts
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
incubator JEI display should expose enough of the feed sequence to make a culture
factory plan possible.

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
present the air route first and the oxygen route as a scale upgrade.

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
7. **Electric chapter scale.** `ElectricAge.js` currently adds one connector
   recipe; it is a small chapter rather than a complete power age. That may be
   intentional, but the quest chapter should set the right expectation.
8. **Potential duplicate registration.** `Mods/Create.js` appears to register a
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

## Ranked Improvements

### High impact, low behavior risk

1. Add compact JEI or quest line cards for steel, ore, glass, petroleum,
   polymer, and biology: machine, batch size, average main output, duration,
   heat, and major byproducts.
2. For each bottleneck fluid or item, show source, renewable status, and its
   first major consumer. Prioritize soda, limestone, coke, silicon, oxygen,
   acids, precipitant, flotation reagent, and tailings.
3. Extend incubator discovery to show the complete feed sequence and the trait
   that changes time or count.
4. Add one documented recovery or storage destination for each major tailings,
   residue, gas, water, and slag stream.

### Medium impact, moderate maintenance work

5. Define canonical line data and generate the Create and MBD preparation routes
   from it. Preserve existing IDs and quantities while removing source drift.
6. Group generated metallurgy and upgrade JEI entries by material and operation.
7. Gate advanced mineral microbes behind culture milestones while retaining their
   renewable reserve role.
8. Make the first air-steel route and later oxygen route explicit in the quest
   dependency and manual wording.

### Later review

9. Confirm the duplicate smart-fluid-interface registration and resolve only if a
   live serializer test shows replacement or conflict.
10. Decide whether the Electric Age should stay a short connector chapter or
    receive a complete power line; do not infer a missing system solely from the
    chapter name.
11. Consider optional catalyst maintenance only if perfect catalyst return
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
   air steel, oxygen steel, coke inputs, heat state, parallel count, and slag
   output.
4. Run one ore line from raw block through tailings and precipitation, recording
   average output over multiple batches rather than one lucky run.
5. Verify every major petroleum byproduct in JEI and a machine inventory before
   adding a sink.
6. Test the duplicate smart-fluid-interface recipes by ID and serializer result.
7. Generate a fresh world or new chunks for worldgen edits; existing chunks do
   not retroactively regenerate.

## Source Map

- Shared definitions: `kubejs/startup_scripts/Preload/Global.js`
- Fluid registry: `kubejs/startup_scripts/fluids/fluid.js`
- Generated metallurgy: `kubejs/server_scripts/Recipes/Metallurgy.js`
- Blast furnace: `kubejs/server_scripts/Multiblocked2/BlastFurnace.js`
- Chemistry: `kubejs/server_scripts/Recipes/Chemistry.js`
- Ore line: `kubejs/server_scripts/Recipes/ProcessingLine.js/Ore.js`
- Glass and paper: `kubejs/server_scripts/Recipes/ProcessingLine.js/Glass.js`,
  `Paper.js`
- Biology: `kubejs/server_scripts/Recipes/MicrobesRecipe.js`
- Progression: `kubejs/server_scripts/Progression/`
- Recipe removals: `kubejs/server_scripts/Recipes/RecipeDelete.js`
- Tags and hazards: `kubejs/server_scripts/Tags/tags.js`,
  `kubejs/server_scripts/Interactions/PlayerEvents.js`
- Worldgen: `kubejs/data/cwi/worldgen/`,
  `kubejs/data/minecraft/dimension/overworld.json`
- Quests: `config/ftbquests/quests/chapters/`
- KubeJS API reference: `docs/KUBEJS_ULTIMATE_GUIDE.md`
