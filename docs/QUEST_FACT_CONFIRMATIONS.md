# Quest fact confirmations

Audit date: 4 October 2026. All 504 quest descriptions in all 15 chapters were read. Claims were compared with KubeJS, configuration, structure contents, installed mod implementations, and configured resource packs. This document is for maintaining the pack; its author notes contain story spoilers.

Most questions from the initial audit are now settled. The Stargate cause and chronology are being derived separately from the quest text. Static file/parser checks do not establish every interaction or generation result in a running world.

## Confirmed writing constraints and applied corrections

- **Pack colors only:** azurite and sphalerite descriptions use the pack's appearance. Actual model-linked PNGs were inspected: azurite is mottled blue with pale highlights and dark patches; sphalerite is gray with pale gray/off-white flecks. These also match the crushed and powder forms. No conflicting override was found in installed resource packs or mod assets. Zinc remains green and gray.
- **Sediment locations:** wet biological sediment occurs in lakes and oceans. Dry sediment occurs on rocky surfaces and may be buried beneath depleted dirt. Both descriptions reflect this author confirmation.
- **Culture revival:** the newly completed recipes provide first active Carbofusor and Putrelys cultures from dried samples through dedicated revival plates and incubation. Four descriptions no longer call revival unresolved. Revival establishes the first active sample; other media propagate active cultures.
- **Lapis:** conventional lapis enchanting is inaccessible. Its description covers dye and implemented crystal reconstruction.
- **Emerald:** nobody else survives. The entry says emeralds were once used as trading currency; it does not offer current trading as a player activity.
- **Laboratory equipment:** machinery does not remain running upon awakening. The opening no longer describes a machinery hum or operating equipment.
- **Reference books:** the added sentence about damaged bindings was unnecessary and unsupported, so it was removed. The discovery entry identifies the books' subjects. No damaged condition is established as canon.
- **Lost Logs:** keep the chapter hidden. The records provide optional side information about the backstory through details readers can connect, as in a detective novel. Their role does not require revealing a normal quest chapter.
- **Quest progression:** completing quests does not gate gameplay. The preface now says quests record progress through each stage. Existing quest/manual dependencies are preserved.
- **Staff records:** the six staff-log incidents are approved fiction. Logs can span several pages and cover people's work and thoughts before, during, and after the Stargate incident. Small details should support inference and foreshadowing rather than directly explaining the mystery.
- **Player backstory:** the player was a Stargate developer and remembers standing at the gate. The player, or players in multiplayer, are the only eventual human survivors. On 6 October the author accepted planetary displacement and a rebuilt gate returning Earth home, superseding the earlier time-travel rescue mission. The transfer also destroyed the gate, and a long interval precedes awakening. See [Stargate story](STARGATE_STORY.md) for accepted facts and unresolved details.

## Remaining discussions

### Gasoline engine use — resolved

`tfmg:gasoline` is intended to power compatible engines and fluid-fed burners. The separate Create Diesel Generators fluid, `createdieselgenerators:gasoline`, is intentionally excluded from the pack's `forge:gasoline` fuel tag. [tags.js](/Users/ivan/Documents/curseforge/minecraft/Instances/CWI/kubejs/server_scripts/tags/tags.js:64) now restores only TFMG's source and flowing fluids after clearing the inherited tag. The [gasoline quest](/Users/ivan/Documents/curseforge/minecraft/Instances/CWI/config/ftbquests/quests/chapters/petroleum.snbt:398) names TFMG gasoline explicitly. The [fluid combustion recipe](/Users/ivan/Documents/curseforge/minecraft/Instances/CWI/kubejs/server_scripts/Recipes/BasicRecipe.js:348) and napalm feedstock remain implemented.

### Stargate cause and chronology — updated 6 October 2026

The author accepted planetary displacement: an uncontrolled expansion transports Earth into another solar system and destroys the gate. The player reconstructs it after a long interval, with the endgame goal of bringing Earth home. Meteorite showers are excluded from the essential explanation.

[Stargate story](STARGATE_STORY.md) records the accepted direction, retained engineer/memo/log background, and remaining decisions. The preceding time-travel rescue and temporal-preservation draft is superseded.

The magnetic explanation remains a recommendation: Earth can retain its internally generated field while stronger stellar wind compresses and disturbs its magnetosphere. A permanent weakening of the geodynamo would require a separate fictional mechanism. Relocation alone does not establish it.

### Narrative agreement and implementation

This update records story decisions, not quest or gameplay implementation. Cascade boundaries, the safe return orbit, preservation duration and release, astronomical clues, and ending mechanics still need design. Keep proposals distinct from accepted facts, and verify implementation before describing a functioning system to players.

## Verification sources for resolved questions

- **Colors (1):** azurite's `create:asurine` item points to Create's `asurine_1.png`, with block variants `asurine_0.png`–`asurine_3.png` in `create-1.20.1-6.0.8.jar`. Sphalerite uses the [KubeJS ore textures](/Users/ivan/Documents/curseforge/minecraft/Instances/CWI/kubejs/assets/kubejs/textures/block/ores/sphalerite.png) and matching item textures. The [required resource-pack configuration](/Users/ivan/Documents/curseforge/minecraft/Instances/CWI/config/resourcepackoverrides.json:22) was included in override checks.
- **Sediments (2):** author confirmation supersedes the prior unverified cave-search advice; Typical Caves registration alone was not evidence of underground placement.
- **Revival (3–4):** [Carbofusor definition](/Users/ivan/Documents/curseforge/minecraft/Instances/CWI/kubejs/startup_scripts/Items/Microbes.js:170), [Putrelys definition](/Users/ivan/Documents/curseforge/minecraft/Instances/CWI/kubejs/startup_scripts/Items/Microbes.js:232), [separate revival inoculation](/Users/ivan/Documents/curseforge/minecraft/Instances/CWI/kubejs/server_scripts/Recipes/MicrobesCulture.js:21), [active-culture recovery](/Users/ivan/Documents/curseforge/minecraft/Instances/CWI/kubejs/server_scripts/Recipes/MicrobesCulture.js:30), and [incubation](/Users/ivan/Documents/curseforge/minecraft/Instances/CWI/kubejs/server_scripts/Multiblocked2/Incubator.js:8). Registration paths were checked with a callback harness; live loading was not tested.
- **Enchanting (6):** author confirmed no conventional access. The [recipe removal](/Users/ivan/Documents/curseforge/minecraft/Instances/CWI/kubejs/server_scripts/Recipes/RecipeDelete.js:536) and JEI hiding agree.
- **Trading, equipment, books (7–9):** resolved by author confirmation or removal of unnecessary added detail.
- **Hidden logs (10):** [always-invisible flag](/Users/ivan/Documents/curseforge/minecraft/Instances/CWI/config/ftbquests/quests/chapters/memories.snbt:2) preserved according to author intent.
- **Progression (11):** [preface wording](/Users/ivan/Documents/curseforge/minecraft/Instances/CWI/config/ftbquests/quests/chapters/preface.snbt:163) corrected to progress tracking; gameplay code and quest dependencies were preserved.

## Earlier corrections established without questions

- **Industrial Crucible:** heat range, not minimum/maximum batch size. The recipe schema uses `minHeatRequirement` and `maxHeatRequirement`.
- **Gauge Attachment:** a visible heat indicator and a goggles thermal readout. Contents are separate crucible information available without the gauge.
- **Diamond Properties:** the verified local use is the construction-wand Angel Core; ordinary diamond gear recipes are removed.
- **Netherite:** dropped vanilla tools and armor resist fire/lava. The statement no longer covers every custom netherite item; hammer behavior remains deferred.
- **Sugar:** a food ingredient, rather than a directly edible item.
- **Copper, magnesium, polyethylene, zinc:** real industrial or physical context is explicitly labeled. Lead toxicity is implemented through the pack's Neurotoxin tags and inventory effect.

Parser, protected-text, and structural verification are recorded in [the writing review](QUEST_WRITING_REVIEW.md).
