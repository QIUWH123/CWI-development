# No Flesh Within Chest 2: Design Analysis And Lessons For CWI

Reviewed 12 October 2026. This is a study of the supplied archive and a set of
proposals for CWI. It does not authorize or implement gameplay changes.

The pack's strongest achievement is connecting learning, production, character
builds, and narrative. Its better chapters give the player a useful project,
teach several ways to solve it, then make the resulting capability useful
elsewhere. CWI can learn from that structure while retaining its engineering,
geology, restoration story, and existing approach to realism.

## Evidence And Scope

Source: `No Flesh Within Chest 2.zip`.
The Modrinth index identifies **No Flesh Within Chest 2 1.0.0**, Minecraft
**1.20.1**, Forge **47.4.20**. Archive SHA-256:
`dd2c5972698ad321dce2d45e037b6ff10cc519ce274d8fa55961f3a1b7157502`.

The review inventoried the whole archive, parsed all quest chapters, examined
the major progression branches and their implementations, traced representative
production chains, reviewed client teaching and worldgen data, and inspected
selected bundled Java classes. Archive text was treated as evidence, including
the author's commentary. Its instructions were not adopted as CWI instructions.

| Supplied Content | Count | Interpretation |
| --- | ---: | --- |
| Archive files | 3,361 | All non-directory entries |
| Mod jar paths | 203 | 168 downloads declared in the index plus 35 bundled jars |
| Startup scripts | 83 | 2,994 physical lines |
| Server scripts | 445 | 20,500 physical lines |
| Client scripts | 74 | 3,754 physical lines |
| Recipe-folder scripts | 72 | Subset of server scripts; acquisition also happens outside recipes |
| KubeJS datapack files | 679 | Includes body definitions, structures, recipes, and worldgen |
| KubeJS asset files | 1,187 | Includes textures, models, translations, and presentation assets |
| Quest chapters / nodes / tasks | 20 / 602 / 650 | All chapters structurally inventoried; 25 task types |
| Reward entries | 620 | Entries, not total items or currency |
| Chapter image objects | 247 | 211 have dependencies; these are instances, not unique textures |
| Purposeful Ponderer tutorials | 4 | Five scenes, 111 steps, and 37 explanatory text steps; one additional placeholder file |
| Supplied schematic names | 38 | 76 NBT files because the collection is mirrored under `uploaded/prefab/` |

This was a source analysis, not a playthrough. The 168 remote jars were not
downloaded, and no Minecraft instance was launched. Native recipes in those
jars, final recipe loading, rendered layouts, combat balance, actual completion
times, and multiplayer behavior are therefore not fully established. Recipe
declarations and structural quest parsing do not prove live execution.

Source references such as **[P3]** resolve in the source map below. Paths there
are relative to the archive's `overrides/` directory. Selected excerpts, hashes,
the chapter inventory, and task-type counts are retained in
[the evidence file](audit/NO_FLESH_WITHIN_CHEST_2_EVIDENCE.json).

## 1. How The Experience Is Organized

The author's closing commentary explicitly distinguishes three layers:

- **认知:** learn a mod's basic actions and concepts.
- **传闻:** deepen those concepts through a larger project.
- **秘闻:** combine systems to create a new function.

The author describes a recurring progression of familiar content → new content
→ expanded ability. That is stated intent, not a measured result. Several
chapters do support it in their actual tasks and mechanics. **[Q1, Q2]**

```mermaid
flowchart LR
    A[Learn Basic Actions] --> B[Complete A Useful Project]
    B --> C[Deepen Production And Control]
    C --> D[Gain A New Capability]
    D --> E[Combine Systems]
    E --> F[Attempt A Different Project]
    F --> C
```

This diagram summarizes the design pattern, rather than a mandatory quest order.

For example, the Create introduction divides an automated tree farm into
cutting, planting, collection, movement, storage, and power. The player learns
why the machines are needed through the job they perform. An optional schematic
provides another way to learn the same system. Later, the World Computer gives
Create infrastructure a much larger purpose and introduces feeding and control
problems. **[Q3, P1]**

The pack also separates its main narrative from large branches. There are 133
quest nodes in the six chapters without a named group and 469 in the named
groups. Chapter order alone is misleading: the chapter named 零 is a late
resistance route, despite its position near the beginning. Several branches
offer alternatives, although the resistance ending later demands extensive
completion. **[Q2, Q6]**

| Chapter | Nodes | Main Role |
| --- | ---: | --- |
| 引 | 2 | Learn the interface and notice an optional opening detail |
| 零 | 20 | Assemble the late resistance route |
| 壹 | 34 | Ordinary survival, anomalies, and a false vanilla ending |
| 贰 | 38 | Investigations and the guide's growing authority |
| 叁 | 23 | A global terminal countdown and restrictions |
| ？？？ | 16 | Revisit the opening after the resistance ending |
| 认知：胸腔 | 21 | Basic organ mechanics |
| 认知：机械 | 24 | Create through a useful automation project |
| 认知：魔源 | 18 | Ars basics |
| 认知：匠艺 | 14 | Tetra basics |
| 传闻：胸腔扩容 | 28 | Body capacity and biotechnology |
| 传闻：大世界计算机 | 79 | Integrated production and process control |
| 传闻：重现黄金乡 | 62 | Photography, exploration, storage, and travel |
| 传闻：创世工匠 | 44 | Tool properties and forging techniques |
| 秘闻：罐装美味 | 37 | Food systems and body builds |
| 秘闻：地幔燃料 | 53 | Extraction and environmental consequences |
| 秘闻：体外培养 | 30 | Cultivation and trait selection |
| 秘闻：永恒门扉 | 40 | Configurable combat and resource acquisition |
| 外传：被尊重者 | 13 | Optional artefact stories |
| 轶闻 | 6 | The author's explicit design commentary |

For CWI, this suggests organizing the opening around a few complete engineering
jobs. Individual materials can remain concise reference entries. A project
entry can explain how several parts cooperate. The quests should continue to
record progress without becoming mandatory gameplay locks.

## 2. Progression Can Change The Problem Being Solved

### Body Layouts Create Different Constraints

The body system has a limited space budget, specialized slots, and interacting
components. It does more than offer progressively larger inventories. **[S1]**

| Layout | Allocation | Resulting Choice |
| --- | --- | --- |
| Revolution machine | 21 slots: 16 ordinary, four lubricant amplifiers, one flame slot | Choose which machine components receive amplification or relaxed limits |
| Rose | 16 slots: 12 ordinary, four rose amplifiers | Trade ordinary capacity for a specialized build |
| Gula | 53 slots: 40 container slots, ten ordinary, plus gula, digest, and excretion | Storage has a different role from ordinary organ capacity; the food build uses its contents |

A concrete mechanical build shows why this matters. A furnace core accumulates
an attack bonus while reserve remains. Attacking replenishes reserve and can
change it into a burning heart, whose reserve drains faster. Relays improve
recharge; delays reduce drain; a pressurizer supplies burst charges; a bell can
trigger that support automatically. Specialized slots increase these effects
or remove ordinary caps. The parts solve distinct problems within one operating
cycle. **[S2]**

This is a useful design principle for machinery: an upgrade can address
capacity, operating range, startup, or delivery rather than simply raise every
stat. CWI already has such distinctions in furnace reinforcement, heater
strength, parallel capacity, temperature, and processing speed. The immediate
opportunity is to make those existing distinctions easier to observe and use.
The reference's large combat multipliers are not evidence of balanced numbers.

### Food Diversity Has An Actual Function

The king-of-stomach build derives bonuses from food stored in the body,
normally counting distinct item IDs once. Companion organs change how sweets,
beer, and wine are treated; wine age can affect the result. This gives cooking
and aging systems a role beyond filling hunger or collecting every recipe.
**[S3]**

CWI should apply that principle selectively. Different apples or cultures need
a distinguishable implemented use when that distinction helps play. Cheap
staples should remain practical, and collecting every variant should not
become an obligation.

## 3. The World Computer: A Production Chain With Operating Lessons

This is the strongest factory example in the archive. It integrates material
manufacture, fluid routing, component assembly, control, and a final structure.

### Acquisition And Bootstrap

The authored chain includes:

1. Lightning combines nearby brass and amethyst into unstable matter.
2. Superheated brass and 200 mB ethanol make refined brass.
3. Assemblies and mechanical crafting produce springs, gears, bolts,
   capacitors, substrates, and specialized control components.
4. Superheated circuit processing uses a ring of potion-fluid conversions.
5. An 81-block miniaturization pattern makes a reverse-causality chip.
6. Eight assembly loops consume eight chips and 2,000 mB ethanol to make a
   World Computer controller.
7. The controller produces modules for its later 122-position structure.
8. Advanced operations use the completed structure. **[P1–P5]**

The seventh step avoids a circular prerequisite: the first module recipes do
not require the finished structure that those modules construct. This is
directly relevant to CWI's earlier steel-design mistake. Check the ingredients
of the producer, its tools, and its supporting machines before choosing a
bootstrap route. A machine's name is not enough evidence of availability.

The chip's pattern contains 32 brass blocks, 32 circuit boards, eight data
buses, four buffer circuits, two timing modules, two spatial stabilizers, and
one oracle module. These quantities pull together several functional component
lines into a recognizable construction goal. **[P4]**

### A Shared Fluid Creates Routing Work

Circuit manufacture transforms potion fluids through this ring:

`Water Breathing → Fire Resistance → Night Vision → Regeneration → Leaping → Poison → Water Breathing`

Each stage returns the same potion volume that it receives, but stage batch
sizes differ: 80, 70, 140, 280, 280, and 560 mB. The loop therefore gives buffers
and production ratios a purpose. It still needs initial fluid inventory and
balanced operation; being cyclic does not make it self-starting. **[P3]**

The transferable idea is a reusable process stream with clear routing. The
potions are fantasy alchemy. They are not a model for CWI chemical equations,
and no new real-world explanation should be invented to justify them.

### Seven Recipes Teach Different Control Problems

The component recipes use a shared chromatic-compound feed and nominal
3,600-tick duration, but their operation differs. Rates below describe the
script's tick convention; live machine timing was not measured. **[P1]**

| Component | Implemented Behavior | Factory Decision |
| --- | --- | --- |
| World renderer | Success probability rises with final stored resource | Accumulate stock before completion |
| Data compressor | Stored resource loses 2% at each 20-tick interval | Decide when and how fast to feed |
| Brain processor | Loses 1,024 units per interval; starvation fails | Maintain continuous supply |
| Void diffraction vault | Loses 1%; optimum is half-full; emits fullness as redstone | Regulate feed around a target |
| Computing core | Random target; emits absolute error as redstone | Infer which direction improves the result |
| Quantum dimension resolver | Target changes every 600 ticks; excessive intermediate error fails | Track a moving target within tolerance |
| Entity simulator | Target changes, with a final success check | Adapt feeding to changing conditions |

This is more varied than seven recipes with increasingly expensive ingredients.
The player can use what was learned in one operation to understand the next.
The unsigned error signal and random final success also make these puzzles
opaque; they should not be copied automatically into an early engineering pack.

The final machine grants rain control, gamerule changes, restricted copying,
and creative components. Earlier production earns an ability that changes
future play. CWI's eventual Stargate should similarly draw on developed
capabilities, but the electrical age and ending remain later work.

### Repetition Still Needs A Reason

The random-tick spring assembly has a spring weight of 0.1 and a returned
refined-brass weight of 0.9. Under normal Create selection semantics that is
ten expected attempts, with filtering and recirculation. Oracle gates require
16 assembly loops. These can make throughput relevant, but large repetition
alone does not establish an interesting decision. **[P2]**

For CWI, assess what an extra step changes: routing, material state, operating
condition, or a useful capability. If it only lengthens waiting, extending the
chain may weaken it.

## 4. Cultivation: Separate The Operation From The Conditions

The growth vat uses six chamber slots, a medium, and nutrient fluid. The medium
selects the operation; the fluid influences the trait distribution. **[P6]**

- Simple medium matures existing samples.
- Growth medium can seed empty chambers or mature samples.
- Mutation medium resolves matching trait conditions into special organs.
- Proliferation medium copies samples into available space.
- Mixed medium redistributes trait entries among immature samples.

This lets the player reason toward an outcome. Rose fluid biases a rose trait;
some special organs additionally require strength, health, or detoxification
thresholds. The same machine supports different experiments without becoming
five unrelated crafting stations.

Supply has a simple route and a better infrastructure route. Four nutrient
pastes plus 250 mB water produce 250 mB nutrient fluid with a declared 300-tick
mix. The same paste amount with 250 mB honey produces 1,000 mB with a declared
160-tick mix. Honey production improves both yield and processing demand.
**[P7]**

For CWI, preserve a practical first supply and let later investment improve it.
That supports the author's decision to keep glass additives reusable. It does
not justify adding a difficult carbonate plant to an early staple, restoring
deleted revival recipes, or introducing random culture failures.

The useful lesson for the current incubator is presentation: distinguish
preparation, culture conditions, and result clearly while indexing every real
feed in JEI. CWI already does much of this; further work should resolve actual
player confusion rather than add headings or decorative text.

## 5. Resource Sources Are Part Of The Wider Game

### Extraction Has A Consequence

The mantle extractor uses Ars source, copies eligible materials, and develops
depth. Greater depth permits more categories. Advanced modes cool chunks and
raise a server-wide winter counter. At 100, the counter starts eternal winter.
The helper also recognizes previously experienced winter, so the recovery
reward does not simply restore extraction. **[P8, P9]**

A focus crystal connects the body system to the factory: an exhausted crystal
installed as an organ takes the player's spell mana until it becomes usable
again. This gives different mods distinct roles in one resource system.

The general lesson is that extraction can create choices about location,
capacity, and consequences. The specific global winter mechanic is poorly
suited to CWI's opening: it can change everyone's game because of one player's
machine and needs clear warning and recovery design. It is also fantasy,
not a realistic consequence of ordinary mining.

### Combat, Shops, And Factories Feed One Another

The Eternal Altar separates level, creature type, chaos, and extraction reagent.
These controls change waves, threats, and loot families. Wins return wake
stones, supporting continued use. Selected extractants bias rewards toward
ores, creatures, experience, or other resources. **[P10]**

The shop offers another supply route with weighted inventories, including
machines, ores, and schematics. Much stock is creative unless trade limits are
set. That can relieve unlucky exploration but also bypass manufacture if
currency is too easy to obtain. Source prices alone cannot prove economic
balance. There are 494 direct gold-coin reward entries across the quests.
**[P11]**

CWI can learn to give exploration and industry reasons to interact. It does
not need a combat economy or infinite shop. Existing geology, salvage, manual
scraps, and cultures already connect those activities. Improvements should
strengthen those relationships before adding a new resource system.

## 6. Quests Can Test Actions And Offer Different Levels Of Help

There are 25 task types, although item tasks remain the largest group:
388 of 650 tasks. Some detect possession; others consume submitted items. The
unusual checks are valuable because of what they verify, not merely because
they are custom. **[Q2]**

Examples include actual Ender Eye use, opening a body, forging specified Tetra
properties, submitting a photograph with selected subjects or conditions,
observing machinery, and completing a machine operation that grants a stage.
The World Computer's final quest checks its operation stage rather than only
possession of the controller. **[Q4, Q5]**

The opening teaches the text-input interface by using it. A later ending reuses
that interaction. The tree-farm chapter offers a supplied schematic as another
learning route. Several exploration branches require some alternatives rather
than all of them: five of twenty photography objectives, five of eleven
dimension branches, or two of three tool branches. **[Q3, Q4, Q6, Q8]**

For CWI:

- A working sample or production test can recognize an engineering achievement.
- Alternative surveys can reduce dependence on one particular random location.
- A recovered layout can teach a filter, return loop, and buffer more clearly
  than another recipe paragraph.
- An item-possession quest can remain a bookmark; its description should not
  claim it verified an automated line.

New task behavior must use the installed CWI APIs. The reference's `maa:*`
tasks and filters come from its custom Java mod. Copying their IDs into CWI
would not provide that functionality.

## 7. Narrative Works Best When Other Evidence Supports It

Neo initially presents as a tutorial guide. A failed ordinary ending,
recovered messages, investigations, growing authority, and a proposed reset
gradually change the player's interpretation. Optional branches eventually
contribute to a resistance route, and a final chapter revisits earlier wording.
**[Q5, Q6]**

Several narrative events have concrete support:

- First login sets `seenCredits`; a later passage notices the missing End Poem.
- Completing the computer operation changes server progression state.
- The terminal sequence restricts dimension access and storage and accelerates
  days; the growing crisis is more than a paragraph.
- Dependency-linked images change the quest board as milestones are reached.
- An opening interaction returns with a different meaning at the ending.

The reset scripts reset tasks and stages. Their name and narration do not prove
that player buildings are destroyed or the save is deleted. **[Q5, Q7, Q8]**

CWI can use a quieter version of the same technique. A log, an old drawing,
and the observed condition of equipment can support or complicate one another.
A minor detail may become significant later. Technical instructions should
remain reliable; uncertainty belongs to what earlier people observed,
predicted, or misunderstood. Material and geography entries should retain
their factual purpose. New Stargate causes, astronomical effects, rooms, or
ending mechanics remain separate design decisions.

The reference's final countdown also illustrates a tradeoff. Each online player
contributes daily progress to a summed total, so more players accelerate it.
Restrictions can disrupt someone who did not start the sequence. Early
optional breadth later becomes extensive completion pressure for the
resistance ending. Those are consequential choices, not universal improvements
to pacing. **[Q6, Q7]**

## 8. Presentation Can Carry The Explanation

### Use The Right Teaching Surface

The four purposeful Ponderer tutorials show real interfaces or spatial steps:
altar configuration, growth-vat operations, mantle extraction, and constructing
a Compact Crafting field. The growth-vat tutorial changes slots while
explaining their roles. This fits operations that are difficult to communicate
through a static recipe alone. **[U1]**

For CWI, the first candidate is the blast furnace: heater positions,
reinforcement, temperature, and separate outputs. A diagram or small scene
should clarify one difficult action. JEI should carry exact ingredients;
manuals should carry use, limitations, and relevant context. A new tutorial
mod is not a prerequisite for applying this division of work.

The archive's 37 explanatory Ponder text steps have Chinese text and no English
entry. This is a localization coverage observation, not proof of how fallback
renders. The placeholder `.json` scene is also retained. These files need
review before reuse.

### Layer Detail, Preserve Warnings

Reusable tooltip models separate default, Shift, Ctrl, and Alt details. Shared
hover terms explain adjacency, effects, body types, and other repeated
concepts. Custom JEI pages make nonstandard interactions discoverable and use
invisible ingredients for Uses lookup. **[U2–U4]**

One important mistake is visible in the organ tooltip code: expanded-detail
branches return before the cannot-remove warning is added. Additional detail
can therefore hide the restriction. CWI's warnings must remain visible
independently of optional details. Existing requirements for centered `---`
interaction tips and the author's warning wording still apply.

### Supply An Inspectable Example

The tree-farm tutorial rewards a schematic, and the shop supplies practical
and decorative layouts. This gives players a model they can inspect or adapt.
Blueprints with ordinary material requirements can lower explanation cost
without removing construction work. Some archive schematics separately allow
direct survival printing; that particular behavior should not be assumed
appropriate for CWI. **[Q3, U5]**

A fitting CWI proposal is one recovered drawing demonstrating an existing
return/filter/buffer arrangement. It should preserve room for players to make
their own layout. Assets, licensing, and matching block versions would need
checking before any reference schematic were reused.

## 9. Exploration Is Curated Through Data

The pack overrides structure placements from several mods, uses Infinity's
configured procedural dimensions, and includes a custom oath dimension. The
Infinity configuration enables runtime generation, consumes portal keys, and
limits biome count. Structure spacing and separation are deliberate data
choices, not guaranteed travel distances. **[W1, W2]**

The useful principle for CWI is to decide what exploration supplies: a resource,
a record, a new operating option, or evidence. CWI already makes geological
location matter. Broad procedural dimensions would be a large new scope and
could dilute the specific displaced-Earth setting.

There is also a concrete worldgen authoring caution. Ten structure-set files
repeat `other_set` inside one `exclusion_zone` object. In `statue.json`, four
different sets use that same key. This does not express four exclusions;
ordinary object parsing retains only one value. Validate the target schema
and duplicate keys rather than inferring behavior from visually plausible
JSON. **[W3]**

Some Infinity configuration files contain substitution tokens, and another
config uses comments. Strict JSON rejection of those files is not by itself
evidence of a runtime defect. Validation must use the owning format.

## 10. Code Techniques Worth Reusing

### Definitions Generate Multiple Consumers

Organ definitions carry IDs and scores, generate mechanical datapack data,
and derive classification tags. There are 251 literal organ declarations and
158 strategy declarations in the inspected registry tree; these are source
counts, not a live item dump. **[S4]**

CWI already has equivalent foundations in material, ore, and microbe globals.
The useful next step is extending those definitions as the common source for
recipes, JEI, and facts. A second parallel registry would increase drift.

### Event Adapters And Explicit Phases

The organ framework maintains listeners for installed components. It queries
interested handlers for an event, distinguishes per-copy from once-per-type
behavior, orders callbacks, and applies final accumulated results after
components modify shared context. Removal cleans up listeners and attribute
modifiers. This supports interacting builds without scanning every possible
organ on every event. **[S5]**

That pattern is useful when features share a lifecycle. Small recipe groups
can remain simple functions and maps; they do not need the reference's full
model hierarchy.

### Send UI State When It Changes

Organ-score handlers compare old and new values. The HUD uses an
`organEffectChanged` flag before rebuilding its display. Organ behavior is
throttled, and queued packets are flushed after the player's connection is
ready. Client skill data is refreshed on login. **[S6]**

CWI can use the same principle for future machine status displays: update
the values the player needs when they change, using the actual installed APIs.
The inspected code supports this technique; no performance benchmark was run.

### Separate Temporary And Permanent State

The bundled Chest Cavity class has listener and custom-data maps, but its
serialization does not save `customDataMap`; cloning does not copy it either.
Inventory, item NBT, and selected explicit fields have different lifetimes.
Derived counters can be rebuilt, while permanent progress needs deliberate
storage. **[S7]**

CWI's machine, player, and server data should continue to be chosen according
to the required lifetime. An arbitrary JavaScript map is not persistence.

### Keep Decisions On The Server

The skill wheel sends a selected item ID. The inspected server path checks
cooldown and the actual item installed in the relevant listener slot before
activating it. This is a useful control contract: the client requests an action;
the server determines whether it can occur. It is not a security audit of all
packet handlers. **[S8]**

### Recognize The Native Integration Boundary

Many apparent script capabilities depend on bundled code: a local KubeJS
build, the Chest Cavity implementation, Modpack Actually Additions, SkillWheelJS,
KubeLoader interfaces, and HotAI patch files. MAA supplies custom quest tasks,
photo and tool filters, rendering helpers, and integrations. The Chest Cavity
jar's filename reports 2.16.7 while mod metadata reports 2.16.2. **[S9]**

The portable parts are data organization, operating choices, event phases,
state handling, and feedback. Exact classes and event names require checking
CWI's jars. A custom Java integration should solve a specific missing
capability, rather than become a new dependency by imitation.

## 11. Weaknesses That Change What We Should Learn

These observations qualify the reference. They are not fixes to CWI or a claim
that the supplied pack is generally broken.

| Observation | Evidence And Limit | Lesson |
| --- | --- | --- |
| Quest text overstates its detector | A dragon-kill instruction uses End-entry advancement; tree-farm completion checks 64 logs | Match wording to what is actually checked |
| A combined photo objective omits a condition | Bright-village prose checks villager count and light, with no village condition in that task | Review every predicate against the promise |
| Mutation ordering shadows a result | Rose heart and rib have identical conditions; first matching mutation wins | Check overlapping rules and ordering |
| Targets can leave the operating range | Computer targets drift without a clamp while resource capacity is capped | Test boundaries of dynamic control rules |
| Detailed tooltips hide a restriction | Early returns precede cannot-remove insertion | Keep warnings independent of extra detail |
| A plausible resource ID is questionable | Extractant rewards request `minecraft:zinc_ore`; no startup alias was found | Verify registries; do not trust names |
| Cultivation text simplifies an important side effect | Proliferation code modifies parent NBT before copying | Explain actual state changes |
| Global story pressure depends on population | Countdown sums online-player contributions and closes shared systems | Define multiplayer scope before adding consequences |
| Random repetition and forced waits can become padding | Low-weight spring output, 16-loop gates, 52 checkmark-only quests, and 17 timed tasks | Evaluate what the player learns or decides |
| Structure exclusions are written as duplicate keys | Ten structure-set objects repeat `other_set` | Validate schemas and duplicate keys |

Sources: **[Q3–Q7, P1, P2, P6, P10, U3, W3]**. The zinc entry needs a live
registry to settle definitively. The mutation observation concerns that path;
it does not exclude another acquisition route. No live failures were reproduced.

## 12. What This Changes For CWI Development

CWI already has strong shared definitions, custom JEI categories, an adaptive
blast furnace, recoverable manuals, and a restoration narrative. The reference
does not show that those systems should be replaced. It shows where better
connections and teaching could make them more effective.

| Priority | CWI Application | Concrete Result To Aim For |
| --- | --- | --- |
| First | Review the first complete engineering projects | Each has an available start, useful output, clear first operation, and a remedy for its main blockage |
| First | Teach existing furnace behavior | Players can distinguish heaters, reinforcement, capacity, warmup, and output blockage |
| First | Align task claims with detection | A possession check is described honestly; an operation claim has a real event or is softened |
| First | Improve selective process guidance | JEI explains feeds and outputs; project entries explain operation; material/geology entries remain factual |
| Next | Provide one recovered example layout | Demonstrate a filter, return path, and buffer using existing recipes and ordinary construction |
| Next | Review alternative early supplies | A practical first route remains; an optional later route improves a real constraint |
| Next | Recognize observable restoration | A working process or repaired subsystem has a modest visible payoff, after concrete design |
| Later | Consider optional commissioning checks | Recognize actual operation using verified CWI APIs, without making quests gate gameplay |
| Later | Make the ending combine earlier capabilities | Precision, reliable production, and control contribute to the accepted Stargate objective |

The first review should start from current recipes and structures, including
removed native recipes and supporting-machine costs. It should preserve the
accepted glass loop, current fluid states, blast-furnace steel production,
deleted revival routes, and deferred issues. It should refine the existing
opening before expanding the electrical age.

The largest change in development practice is to ask, before adding a recipe
or quest: **what new action, decision, or capability does this introduce?**
Identification, atmosphere, and narrative progression can also justify an
entry. Not every material needs a lesson or an invented engineering explanation.

## Source Map

All reference paths below are relative to `overrides/` in the supplied archive.
Line numbers refer to that archive version. The retained evidence file contains
selected excerpts and hashes so these references can be checked after temporary
extraction is removed.

| Ref | Source | Relevant Evidence |
| --- | --- | --- |
| Q1 | `config/ftbquests/quests/chapters/4F1AAC69DF594D2A.snbt` | Lines 53–65, 131–135, 187–193: author's structure and development rationale; 81–89: ending/update caveats |
| Q2 | `config/ftbquests/quests/chapters/`, `chapter_groups.snbt`, `data.snbt` | Whole-book inventory, named groups, and progression settings |
| Q3 | `config/ftbquests/quests/chapters/425DDADD8D67FA09.snbt` | 269–277: project functions; 576–615: alternative completion and log check; 721–775: schematic fallback |
| Q4 | `config/ftbquests/quests/chapters/6F13780E2595977B.snbt` and `2EAD82577D152E20.snbt` | Tool checks and alternatives; photo conditions; five-of-many branches |
| Q5 | `config/ftbquests/quests/chapters/0AC42F4BE2EDBB08.snbt`, `1046FBB0415A3CAA.snbt`, `1E3D245239215530.snbt` | End-entry mismatch, recovered messages, computer control lessons and operation stage |
| Q6 | `config/ftbquests/quests/chapters/167CD65AF2F0E691.snbt`, `594AA7CC1FBE7B4D.snbt`, `7EF0D1F3575F9472.snbt` | Opening interaction, resistance requirements, repeated opening |
| Q7 | `kubejs/server_scripts/domain/quest/main/final/` and `kubejs/server_scripts/domain/common/dim_restriction.js` | Population-dependent countdown, restrictions, task/stage reset and resistance cleanup |
| Q8 | `kubejs/server_scripts/domain/quest/text_input/first_task.js` and `kubejs/server_scripts/domain/common/player_loggedIn.js` | Text-input trigger and login initialization |
| P1 | `kubejs/server_scripts/recipes/machine/world_computer/world_computer.js` | Structure, seven component-control recipes, advanced operations, and operation-stage reward |
| P2 | `kubejs/server_scripts/recipes/create/sequenced_assembly.js` | 35–49: spring weights; 66–79: oracle loops; 143–155: controller assembly |
| P3 | `kubejs/server_scripts/recipes/create/mixing.js` | Refined brass, circuit potion ring, chromatic feed |
| P4 | `kubejs/server_scripts/recipes/compact_craft/reverse_causality_chip.js` | 81-block chip pattern |
| P5 | `kubejs/server_scripts/recipes/create/lightning_recipes.js` and `kubejs/server_scripts/domain/item/unstable.js` | Lightning conversion and unstable-material handling |
| P6 | `kubejs/server_scripts/recipes/machine/growth_vat/growth_vat.js`, `util.js`, and `mutation_config/rose_organ.js` | Five operations, parent-state behavior, and overlapping mutation conditions |
| P7 | `kubejs/server_scripts/recipes/machine/growth_vat/nutrients_fluid.js` | 3–16: water and honey supplies |
| P8 | `kubejs/server_scripts/recipes/machine/mantle_energy_extractor/mantle_energy_extractor.js` | Extraction modes, depth, cooling, and eligible materials |
| P9 | `kubejs/server_scripts/util/server.js`, `domain/quest/custom_reward/balance_mantle_energy.js`, and `domain/organ/registry/organ/magic/exhausted_source_focus_crystal.js` | Winter state, recovery behavior, and mana recharge |
| P10 | `kubejs/server_scripts/recipes/machine/gateways/` | Wave controls, rewards, and extractants, including zinc ID |
| P11 | `kubejs/server_scripts/domain/common/gen_shop_machine.js` and `kubejs/server_scripts/model/lightmans_custom_item_trader_model.js` | Prices, stock generation, trade limits, and schematics |
| S1 | `kubejs/data/kubejs/cc_inventory_types/` | Machine, rose, gula, and ordinary body layouts |
| S2 | `kubejs/server_scripts/domain/organ/registry/organ/machine/` | Furnace core, relay, delay, pressurizer, bell, and cable interactions |
| S3 | `kubejs/server_scripts/domain/organ/registry/organ/food/king_of_stomach.js` | Food identity, companions, age, and build effects |
| S4 | `kubejs/server_scripts/model/organ/organ_item_model.js` | Definition-driven data and tags |
| S5 | `kubejs/server_scripts/model/organ/` and `kubejs/server_scripts/domain/organ/event/` | Indexed handlers, per-copy/type behavior, priorities, and update phases |
| S6 | `kubejs/server_scripts/domain/painter/effect_slot.js`, `domain/organ/event/organ_score_update.js`, and `util/data_queue.js` | Dirty-state UI, score comparisons, and connection-ready messages |
| S7 | `mods/chestcavity-1.20.1-2.16.7.jar` | `ChestCavityInstance.toTag`, `fromTag`, and `clone` bytecode; transient custom-data map |
| S8 | `kubejs/client_scripts/domain/organ_skill_wheel.js`, `kubejs/server_scripts/domain/organ/event/key_active.js`, and `kubejs/server_scripts/model/organ/organ_key_active_event_model.js` | Client request and installed-item/cooldown checks |
| S9 | Bundled KubeJS, Chest Cavity, MAA, and SkillWheelJS jars; `hotai/`; server `domain/compat/kubeloader.js` and client `compat/kubeloader.js` | Native integration and extension boundaries |
| U1 | `config/ponderer/scripts/` | Four purposeful tutorials and one placeholder |
| U2 | `kubejs/client_scripts/model/multi_state_tooltip_model.js` and `const/key_word.js` | Detail layers and shared hover explanations |
| U3 | `kubejs/client_scripts/tooltips/organ_common.js` | Early detail returns and warning at lines 88–89 |
| U4 | `kubejs/client_scripts/domain/jei/mammary_gland.js` | Input lookup, item/fluid context, and entity illustration |
| U5 | `kubejs/client_scripts/tooltips/tool/create_schematic.js`, `schematics/`, and shop source | Schematic metadata and supplied examples |
| W1 | `config/infinity/infinity.json` | Runtime generation, keys, and dimension parameters |
| W2 | `kubejs/data/kubejs/dimension/`, `dimension_type/`, and structure-set overrides | Custom dimension and curated placement |
| W3 | `kubejs/data/red/worldgen/structure_set/statue.json` and nine related files | Duplicate exclusion keys |

Relevant CWI references: [factory analysis](FACTORY_DESIGN_ANALYSIS.md),
[quest constraints](QUEST_FACT_CONFIRMATIONS.md), [Stargate story](STARGATE_STORY.md),
and [KubeJS guide](KUBEJS_ULTIMATE_GUIDE.md).
