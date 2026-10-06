# KubeJS Ultimate Guide

This is the working reference for KubeJS development in CWI. It combines the
linked Mihono `RecipesSchemaAdded` tutorial, the installed KubeJS-related jars,
ProbeJS output generated for this instance, and the current scripts in
`kubejs/`.

The guide is version-specific. It targets Minecraft 1.20.1 and the jar versions
listed below. A method that exists in another KubeJS or addon version must be
checked again with ProbeJS or the installed jar before it is used here.

Baseline audit: 2026-10-05. Detailed article, helper, native schema, and example
notes are in [KubeJS Recipe Schema Guide](KUBEJS_RECIPE_SCHEMA_GUIDE.md).

## Evidence And Confidence

The following statements are directly verified from this workspace or from the
linked page:

- Installed jar contents and public Java signatures were inspected locally.
- Event and type pages under `local/kubejs/event_groups/` were generated for
  this instance. Use them as a local reference, then check their freshness
  against installed jars or a new dump when the mod list has changed.
- The complete linked page and its linked `prelude.js` were read in the browser.
  The page describes the 1.20.1 `recipeSchemaRegistry` approach and an external
  `Schema` helper layer. The helper's implementation was checked separately.
- Recipe behavior was not inferred from names alone. For third-party recipe
  types, inspect the actual JSON, generated schema, or the mod's serializer.

The guide deliberately labels pack conventions, external tutorial helpers, and
unverified third-party behavior separately. Do not turn a plausible convention
into a claimed API.

Evidence has different scopes. A public Java signature proves a method exists;
bytecode can establish what it does; a successful recipe reload proves the
serializer accepted the data; a machine test proves the intended operation in
that setup. Report the checks actually performed. Existing dumps are snapshots,
so they cannot alone prove that a recipe is active after a newer edit.

## Installed Versions

| Component | Installed file | Version |
| --- | --- | --- |
| KubeJS Forge | `mods/kubejs-forge-2001.6.5-build.26.jar` | 2001.6.5-build.26 |
| Rhino | `mods/rhino-forge-2001.2.3-build.10.jar` | 2001.2.3-build.10 |
| KubeJS Create | `mods/kubejs-create-forge-2001.3.0-build.8.jar` | 2001.3.0-build.8 |
| KubeJS Additions | `mods/kubejsadditions-forge-4.3.4.jar` | 4.3.4 |
| FluidJS | `mods/fluidjs-1.2.0.jar` | 1.3.0 mod metadata; 1.2.0 implementation/filename |
| ProbeJS | `mods/probejs-6.0.1-forge.jar` | 6.0.1 |

The guide describes these files, not a generic latest release.

## Project Rules

Read [Development Standards](DEVELOPMENT_STANDARDS.md) before changing code.
The rules that affect KubeJS most are:

- Use four spaces and no trailing JavaScript semicolons.
- Keep a KubeJS priority comment as the exact first line when a file has one.
- Keep startup, server, and client directory semantics intact.
- Preserve recipe IDs, values, order where it can affect behavior, and helper
  names such as `AddItem`, `AddFluid`, `global.materialTypes`, and
  `global.outPutMaterial`.
- Use `AddItem` and `AddFluid` only where their output has the same shape as the
  original recipe data. They are pack helpers, not native KubeJS APIs.
- Do not simplify `Item.of(...)` when chance, rolls, NBT, tags, or a receiving
  API's coercion could change the result.
- Keep project notes and audits under `docs/` and update `docs/README.md`.

## Script Loading Model

KubeJS uses the directory to decide when a script runs:

| Directory | Typical event | Purpose | Reload behavior |
| --- | --- | --- | --- |
| `kubejs/startup_scripts/` | `StartupEvents.registry`, `StartupEvents.recipeSchemaRegistry` | Registries, custom items/blocks/fluids, schema registration | Startup only; restart is normally required |
| `kubejs/server_scripts/` | `ServerEvents.recipes`, `ServerEvents.tags` | Recipes, tags, loot, server logic | Server resource reload or `/reload`, depending on the event |
| `kubejs/client_scripts/` | `JEIEvents`, `JEIAddedEvents` | JEI displays, client tooltips, client UI | Client reload or restart |
| `kubejs/assets/` | Resource-pack data | Models, textures, language, sounds | Resource reload or restart |
| `kubejs/data/` | Datapack data | Worldgen, dimensions, structures, tags, data-driven content | Data reload or restart |

`startup_scripts` are loaded before server recipe registration. A schema that
must exist while recipes are deserialized belongs in startup code, not in a
server recipe callback.

`kubejs/README.txt` documents `/kubejs reload_startup_scripts`, `/reload`, and
`F3+T`. Startup reload may not rebuild registry objects safely; restart for new
items, blocks, fluids, or a reliable schema test. A worldgen change may require
a restart and newly generated chunks; a reload cannot retroactively regenerate
existing terrain.

## Priorities, Globals, And Imports

The installed `ScriptFile.compareTo` sorts higher numeric script priorities
before lower ones. Priority is loading metadata, not an ordinary prose comment.
File names alone do not establish the dependency order.

| Current file | Priority |
| --- | ---: |
| `startup_scripts/Preload/ImportStartup.js` | 10000 |
| `startup_scripts/Preload/Global.js` | 1000 |
| `server_scripts/Utils/Functions.js` | 1000 |
| `client_scripts/LoadClass.js` | 1000 |
| `startup_scripts/Items/ItemRegistry.js` | 10 |
| `server_scripts/Recipes/RecipeDelete.js` | 10 |
| `server_scripts/Recipes/BasicRecipe.js` | 5 |
| `startup_scripts/Items/ToolsArmors.js` | 2 |
| `startup_scripts/Ores.js` | 1 |
| `startup_scripts/Blocks/BlockRegistry.js` | 1 |
| `startup_scripts/CreativeTab.js` | -1 |
| `startup_scripts/Items/ItemModification.js` | -10 |

These are priorities within their script managers; the table is not one global
startup-to-client execution sequence. Preserve existing priorities and check
event registration/removal behavior separately before relying on their order.

CWI uses `global` for shared data across script types and ordinary declarations
for helpers within their script environment. Search the public name and all
consumers before changing either. Do not redeclare an existing lexical Java
import in another file or assume a server helper exists during startup.

`ImportStartup.js` loads `$RecipeSchema` and other common Java classes.
`client_scripts/LoadClass.js` loads client/JEI classes. Keep class imports on the
correct side; the presence of a class in a client installation does not make it
safe in a common or dedicated-server lifecycle.

## Rhino And Java Interop

Rhino executes KubeJS scripts and bridges Java objects. CWI already uses
`const`, `let`, arrow functions, destructuring, and template literals. Use the
syntax and APIs supported by this installed runtime instead of treating scripts
as Node programs. Node modules and browser globals are not supplied by KubeJS.

- Use `Java.loadClass('fully.qualified.ClassName')` for a verified class.
- Check public signatures with `javap` or current ProbeJS declarations. Check
  bytecode/source when method behavior, overload selection, or defaults matter.
- Quote class names containing `$` in shell commands so the shell preserves
  Java nested-class names.
- Java collections, enums, NBT objects, item stacks, and resource locations are
  typed objects. Preserve working coercions and return types at API boundaries.
- JSON parse/stringify cloning is used for plain JEI display data. It is not a
  general deep-copy operation for Java objects, NBT, callbacks, or recipe objects.
- Use existing game scheduling APIs such as `server.scheduleInTicks` when game
  work must be delayed; preserve the callback's entity-validity checks.
- A Rhino compilation/mock test can check syntax and registration data. It does
  not prove live registries, machine inventories, client rendering, or world
  behavior. Node syntax checking alone proves less.

## Choosing A Recipe API

Use the smallest API that exactly matches the recipe serializer:

1. Use a native KubeJS builder for vanilla recipes.
2. Use the KubeJS Create builders for Create processing and Create's sequenced
   assembly.
3. Use a registered schema when a mod has a simple JSON recipe type that has no
   KubeJS adapter.
4. Use `event.custom({ ... })` when the JSON shape is custom, nested, or not
   represented by an installed schema.
5. Use the pack's `event.recipes.cwi.*` builders for CWI Multiblocked recipes.
6. Use a small helper only when it preserves the exact schema and reduces real
   duplication. Do not hide a recipe's important inputs, outputs, heat, or
   timing behind an opaque helper.

JEI registration is a separate client concern. A recipe being visible in JEI
does not prove that the server recipe exists or that the recipe can run.

## The Mihono Schema Tutorial

The linked page, [`配方概要添加(RecipesSchemaAdded)`](https://docs.mihono.cn/zh/modpack/kubejs/1.20.1/KubeJSCourse/KubeJSAdvanced/RecipesSchemaAdded), explains a 1.20.1 method for
adding KubeJS support to a recipe type that another mod did not adapt. Its
example uses Create Metallurgy casting and starts from the mod's JSON:

```json
{
    "type": "createmetallurgy:casting_in_table",
    "ingredients": [
        { "item": "createmetallurgy:graphite_plate_mold" },
        { "fluid": "createmetallurgy:molten_brass", "amount": 90 }
    ],
    "processingTime": 80,
    "mold_consumed": false,
    "result": { "item": "create:brass_sheet" }
}
```

The page then shows the same recipe expressed through a fluent method supplied
by its external helper layer:

```js
ServerEvents.recipes(event => {
    const { createmetallurgy } = event.recipes

    createmetallurgy.casting_in_table(
        'create:brass_sheet',
        [
            'createmetallurgy:graphite_plate_mold',
            Fluid.of('createmetallurgy:molten_brass', 90)
        ]
    ).processingTime(80).mold_consumed(false)
})
```

The important idea is the mapping between JSON keys and typed recipe
components. The fluent helper is not automatically provided by base KubeJS.
The first example on the page uses `event.recipe` by mistake; the corrected
example above uses the installed `event.recipes` property.

### Schema Construction Concepts

The tutorial's `Schema` helper takes the recipe type and then adds one
`.simpleKey(key, component, optional...)` entry for each top-level JSON key.
The page makes these points explicit:

- The first argument is the exact recipe `type` string from JSON.
- The first `.simpleKey` becomes the first argument of the generated recipe
  method, the second key becomes the second argument, and so on.
- `result` and `results` are different. A singular result is one output; a
  plural results field is an array and may contain multiple outputs.
- The component must match the JSON shape. An item output, item-output array,
  mixed item/fluid input array, and fluid-output array are different types.
- A number component is suitable for fields such as `processingTime`.
- A boolean component is suitable for fields such as `mold_consumed`.
- A non-empty string component is suitable for a field such as
  `heatRequirement`.
- The article presents expressions such as `"superheated" || "heated"` and
  `false || true` as if they expressed alternatives. In JavaScript these are
  ordinary expressions: they evaluate immediately to `"superheated"` and
  `true`. They do not define an enum, a set of accepted values, or Boolean
  choices. Do not copy that pattern into a schema. Verify enum support in the
  installed component API or validate values explicitly.
- A third argument supplies an optional/default value in the tutorial's helper
  layer. Treat the page's defaults as examples only; confirm the serializer's
  actual default before marking a key optional.

The tutorial's complete example declares these Create Metallurgy schemas:

| Recipe type | Important keys and component shapes |
| --- | --- |
| `createmetallurgy:casting_in_basin` | `result` as one output item; `ingredients` as a mixed item/fluid array; `processingTime` as a number; `mold_consumed` as a boolean |
| `createmetallurgy:casting_in_table` | Same key mapping as basin casting |
| `createmetallurgy:grinding` | `results` as an output-item array; `ingredients` as an input-item array; `processingTime` as a number |
| `createmetallurgy:alloying` | `results` as a mixed fluid/item output array; `ingredients` as a mixed fluid/item input array; `heatRequirement` as an allowed string; `processingTime` as a number |
| `createmetallurgy:melting` | `results` as a fluid-output array; `ingredients` as an input-item array; `heatRequirement` as an allowed string; `processingTime` as a number |

### Tutorial Workflow

The page recommends the following workflow:

1. Obtain the external `RecipesSchema.java` component source and the author's
   `prelude.js` helper file.
2. Place the helper in the tutorial's startup recipe folder and create one
   schema script named for the target mod.
3. Read the target recipe's exact JSON keys and `type`.
4. Build a schema with matching component types and matching key order.
5. Run `/probe dump` and restart VS Code so ProbeJS can regenerate completion
   information.
6. Write a recipe with the generated fluent method and verify it in game.

The page contains a path typo, `kubejs/starup_scripts/@recipes`. In this pack,
the directory is `kubejs/startup_scripts/`; never create a misspelled runtime
directory.

### What The Tutorial Does Not Prove

- It does not prove that `Schema` or `prelude.js` exists in this instance.
- It does not prove that a third-party recipe accepts a guessed component just
  because the key name looks familiar.
- It does not replace runtime testing of the serializer and machine behavior.
- It does not make recipe key order irrelevant. In the helper layer, method
  order controls the generated function signature.

## Schema Registration In This Pack

The installed base KubeJS API exposes `StartupEvents.recipeSchemaRegistry`.
ProbeJS documents these methods:

| Method | Purpose |
| --- | --- |
| `event.namespace(name)` | Get or create a namespace of schema types |
| `event.register(resourceLocation, schema)` | Register a schema for a recipe resource location |
| `event.mapRecipe(name, resourceLocation)` | Map a recipe name to a resource location |
| `event.getComponents()` | Inspect available component factories |

The base Java class `dev.latvian.mods.kubejs.recipe.schema.RecipeSchema` supports
typed recipe keys, constructors, unique-ID functions, and deserialization. The
pack's `kubejs/startup_scripts/Preload/ImportStartup.js` loads that class as
`$RecipeSchema`, but this workspace does not contain the external tutorial's
`prelude.js` or an active `new Schema(...)` wrapper. Do not call `new Schema`
unless the helper is deliberately added and verified.

The installed component families include item, fluid, Boolean, number, string,
enum, array, mapping, nested, registry, tag, and time components. The tutorial's
names `outputItem`, `doubleNumber`, `bool`, `nonEmptyString`,
`inputFluidOrItemArray`, `outputItemArray`, `inputItemArray`,
`outputFluidOrItemArray`, and `outputFluidArray` are verified native component
factory names in this jar. Retrieve them from `event.getComponents()`. The
external parts are the `Schema` and `ComplexKey` constructors and their helper
methods, including `simpleKey`; the component factory names themselves are
native KubeJS.

For a new schema, use the installed event documentation and Java class
signatures to construct the registration. Then generate ProbeJS documentation
and test deserialization with the exact JSON that the target mod emits.

## Base KubeJS Recipe API

`ServerEvents.recipes(event => { ... })` receives `RecipesEventJS`. The verified
public operations are:

| API | Use |
| --- | --- |
| `event.remove(filter)` | Remove matching existing recipes |
| `event.replaceInput(filter, match, replacement)` | Replace ingredients in existing recipes |
| `event.replaceOutput(filter, match, replacement)` | Replace outputs in existing recipes |
| `event.findRecipes(filter)` | Return matching recipe objects |
| `event.findRecipeIds(filter)` | Return matching IDs |
| `event.countRecipes(filter)` | Count matches |
| `event.containsRecipe(filter)` | Test whether a match exists |
| `event.forEachRecipe(filter, callback)` | Modify or inspect each match |
| `event.recipeStream(filter)` | Stream matching recipes |
| `event.custom(json)` | Add a recipe from exact JSON |
| `event.getRecipeFunction(type)` | Resolve a recipe builder by type |
| `event.printTypes()` / `printAllTypes()` | Print recipe type information |
| `event.printExamples(type)` | Print a recipe type's examples |
| `event.setItemErrors(boolean)` | Change item-error handling |
| `event.stage(filter, stage)` | Apply a recipe stage |

`RecipeJS` supports `.id(resourceLocation)`, `.group(string)`, `.stage(string)`,
`.remove()`, `.set(key, value)`, `.get(key)`, and `.merge(json)`. It also exposes
ingredient actions such as `.damageIngredient(...)`, `.replaceIngredient(...)`,
`.keepIngredient(...)`, `.consumeIngredient(...)`, and `.modifyResult(...)`.

Use filters by ID, type, mod, input, or output rather than iterating every
recipe manually when a filter expresses the intent clearly. Never use a broad
replacement without checking its count and affected IDs.

## Items, Outputs, And Fluids

### Input Items

`InputItem.of(...)` accepts item IDs, tags, counts, and ingredient-like values.
Its verified methods include `.withCount(count)` and `.unwrap()`. NBT matching
helpers live on the stack/output wrappers, not on a bare `InputItem`:

| Receiver | NBT matching methods | Return type |
| --- | --- | --- |
| `OutputItem` | `ignoreNBT`, `weakNBT`, `strongNBT` | `InputItem` |
| `Item.of(...)` / KubeJS-extended `ItemStack` | `ignoreNBT`, `weakNBT`, `strongNBT` | Minecraft `Ingredient` |

Existing pack calls normally start from `Item.of(...).weakNBT()`. Do not assume
an item stack, an output wrapper, and an input ingredient are interchangeable.

Use the narrowest matching behavior:

- A plain item ID matches the normal item ingredient.
- A `#namespace:tag` value matches a tag.
- Normal plain item ingredients already ignore NBT. Keep explicit `.ignoreNBT()`
  where the existing wrapper/API needs it; do not add it to every plain input.
- `.weakNBT()` and `.strongNBT()` have different matching strictness; preserve
  the existing form unless the receiving recipe deliberately requires a change.

### Output Items

`OutputItem` preserves item count, chance, and rolls. Verified methods include
`.withCount(count)`, `.withChance(chance)`, and `.withRolls(min, max)`.
Keep `Item.of(...)` when chance, rolls, NBT, or another extra method is present.

### Fluid Stacks

`FluidStackJS` supports `Fluid.of(...)`, `.withAmount(amount)`, `.withNBT(...)`,
`.withChance(chance)`, `.copy()`, `.getId()`, `.getAmount()`, and `.hasTag(...)`.
Fluid inputs may be a fluid stack, Forge fluid stack, a Create fluid ingredient,
or JSON containing `fluid` or `fluidTag`, depending on the target schema.

## KubeJS Create Integration

The installed `kubejs-create` jar registers schemas and builders for Create
processing, item application, and sequenced assembly.

### Processing Builders

The verified helper methods are:

```js
event.recipes.create.crushing(outputs, input)
event.recipes.create.milling(outputs, input)
event.recipes.create.cutting(outputs, input)
event.recipes.create.splashing(outputs, input)
event.recipes.create.haunting(outputs, input)
event.recipes.create.compacting(outputs, inputs)
event.recipes.create.mixing(outputs, inputs)
event.recipes.create.pressing(output, input)
event.recipes.create.deploying(output, input)
event.recipes.create.sandpaper_polishing(output, input)
event.recipes.create.item_application(outputs, input)
event.recipes.create.filling(output, input)
event.recipes.create.emptying(outputs, input)
```

Processing JSON uses `results`, `ingredients`, and optional `processingTime`.
The KubeJS Create schema default processing time is 100 ticks.
`PROCESSING_WITH_TIME` uses an optional key with `.alwaysWrite()`, so recipes
such as milling, crushing, and cutting serialize the time even at the default.
That flag does not make the field a required positional argument. The installed
processing schema also supports
`heatRequirement` and, for item application, `keepHeldItem`.

Deploying, item application, and filling take an ingredient array containing
the base item and the applied item or fluid. Filling is not a call with two
separate input arguments. Mixing and compacting use count-unwrapping component
behavior; inspect the serialized inputs before changing a compact count into
repeated objects or doing the reverse.

`.heated()` writes Create's heated heat requirement. `.superheated()` writes
Create's superheated requirement. Heat names are validated case-insensitively
against Create's heat enum; use the exact conventional lowercase values in pack
code.

`.keepHeldItem()` sets `keepHeldItem: true` for deploying or item-application
recipes. Only use it when the held tool or item is deliberately retained by the
serializer.

### Sequenced Assembly

The installed schema fields are:

| Field | Meaning | Default |
| --- | --- | --- |
| `results` | Possible final outputs | Required |
| `ingredient` | Base input | Required |
| `sequence` | Nested Create recipe steps | Required |
| `transitionalItem` | Incomplete item held between steps | Create's incomplete precision mechanism |
| `loops` | Number of complete passes | 4 |

The sequence contains nested recipe objects, not recipe IDs. Verify that each
step accepts the transitional item and that the final output array and chance
values are preserved. Do not replace a sequence with a simpler recipe merely to
make the code shorter; the sequence is often the progression gate.

## Pack Helpers And Current Patterns

### `AddItem`

Defined in `kubejs/server_scripts/Recipes/BasicRecipe.js`, `AddItem(input,
chance)` is a CWI helper:

- A string with one token becomes `{ item: 'namespace:path' }`.
- A string such as `'3 namespace:path'` becomes an item object with `count: 3`.
- A leading `#` becomes an item tag object.
- An optional chance adds `chance` to the object.
- Non-string values are returned unchanged.

It is not part of KubeJS. Its count syntax and tag handling are specific to CWI.
The implementation uses `parseInt`, not strict numeric validation, and only
writes a count when it is greater than one. Zero, negative, and one counts are
omitted. A chance argument is applied only to string inputs; if the input is
already an object, that object passes through and the extra argument is ignored.
Use the existing `'3 namespace:path'` helper convention for clarity; native
KubeJS's `'3x namespace:path'` stack syntax is a separate convention.

### `AddFluid`

`AddFluid(input, chance)` follows the same pack convention:

- `'500 namespace:fluid'` becomes `{ fluid: 'namespace:fluid', amount: 500 }`.
- A leading `#` becomes `{ fluidTag: 'namespace:tag' }`.
- `fluidTag:` and `fluid:` prefixes are stripped into their corresponding keys.
- An optional chance adds `chance` to the object.
- Non-string values are returned unchanged.

Amount is omitted unless a two-token string has a prefix parsed as a number.
This helper also uses `parseInt` and passes non-string inputs through unchanged,
including ignoring a separate chance argument for them. Neither helper
validates that the item/fluid exists or that the receiving schema accepts tags,
counts, amounts, or chance fields.

Use `Fluid.of(...)` when the native builder expects a `FluidStackJS`; use
`AddFluid(...)` when the custom JSON schema expects the helper's object shape.

### Existing CWI Helper Families

`BasicRecipe.js` contains wrappers for custom types including hammering,
centrifuging, polishing, turning, demolding, curving, vibrating, coiling,
liquid burning, charging, item application, sandpaper polishing, threshing,
table casting, basin casting, melting, bulk melting, alloying, and
storage/slab conversions. Read the wrapper before adding another one. A helper
must preserve the exact keys, arrays, chances, and values of the target
serializer.

### Material And Ingredient Helpers

`server_scripts/Utils/Functions.js` supplies:

- `getMaterial(id, type)`: checks a direct field first, then `items[type]`.
  Fluid lookup deliberately checks the direct field only.
- `getStone(id, type)`: checks a direct field, then the stone's `items[type]`.
- Both return null for missing maps, entries, or requested fields. Check the
  generator's behavior on null before introducing a partial material entry.
- `expandCountedIngredients`: expands an object only when `ingredient.count`
  is truthy and `ingredient.chance` is falsy. It makes shallow copies without
  the count key. A zero chance is therefore treated as absent for this check.
  It is not a universal count normalizer for every recipe family.

### Global Data Dependencies

| Global family | Important consumers |
| --- | --- |
| `materialTypes` | Material registration, metallurgy, batch tags, tooltips, `getMaterial` callers |
| `stoneTypes` | Stone registration, stone recipes, tags, hammer recipes, `getStone` callers |
| `compoundOreTypes`, `productionMaps`, `outPutMaterial`, `oreTypes`, `variantSettings` | Ore registration, ore processing, crushing, tags, loot, hammer data |
| `apples` | Startup food registration and generated server food recipes |
| Fluid arrays in `Fluids/Fluid.js` | Fluid registration, bucket/texture/tag setup and downstream consumers |

Adding a material or apple can require ingot, sheet, and fluid mappings as well
as registry entries, recipes, textures, models, and translations. Follow the
actual consumer's expected fields. Keep `ProcessingLine.js/` as the existing
directory name; it is not an incorrectly placed JavaScript file to rename.

### Multiblocked Recipes

The pack defines custom builders for:

- `event.recipes.cwi.blast_furnace_processing()`
- `event.recipes.cwi.mixing_vessel_mixing()`
- `event.recipes.cwi.incubating()`
- `event.recipes.cwi.corroding()`
- `event.recipes.cwi.sterilzing()` (preserve this existing spelling)

These recipes are defined by the CWI machine and MBD2 assets, not by the Create
schema. Their item/fluid slots, machine data, duration, and heat behavior must
be read from the matching `.rt`, `.mb`, or machine script. Do not convert them
to a Create recipe because both systems use words such as `processing` or
`mixing`.

The blast furnace script derives registration from `global.blastFurnaceRecipes`,
registers heat variants according to the configured starting heat, and writes
machine data containing the heat level. Preserve this data when changing a
steel recipe.

MBD2 also exposes typed recipe components for inputs and outputs, item and
fluid arrays, duration, priority, machine level, structure blocks, heat, RPM,
stress, FE, mana, aura, pressure, and per-tick behavior. These are MBD2
integration APIs, not base KubeJS or Create APIs. Use ProbeJS-generated MBD
declarations and the matching machine `.rt` and `.mb` files to confirm the
exact builder and field names before writing one.

### Current File Organization

Important current locations include:

- `kubejs/startup_scripts/Preload/Global.js`: shared material, ore, production,
  apple, and variant data. Changes can affect many generators.
- `kubejs/startup_scripts/Preload/ImportStartup.js`: high-priority Java class
  imports and shared startup setup.
- `kubejs/server_scripts/Recipes/BasicRecipe.js`: CWI recipe helpers and a large
  set of direct registrations.
- `kubejs/server_scripts/Progression/MechanicalAge.js`, `IndustrialAge.js`,
  `PrecisionAge.js`, and `ElectricAge.js`: progression recipe lines.
- `kubejs/server_scripts/Recipes/ProcessingLine.js/`: glass, ore, and paper
  processing lines.
- `kubejs/server_scripts/Multiblocked2/`: CWI machine recipe registrations.
- `kubejs/client_scripts/JEI/`: JEI hiding, custom categories, catalysts, and
  display data.

## FluidJS

The installed FluidJS jar identifies itself as mod version 1.3.0 in
`META-INF/mods.toml`, while its filename and manifest implementation version
are 1.2.0. The APIs below were verified from this exact jar:

- `FluidIngredient.of(...)` for fluid matching.
- `FluidEvents.interact` for fluid interaction rules.
- `FluidEvents.source` for source-fluid behavior.
- Source event operations include `event.create(fluid)`, `event.remove(fluid)`,
  and `event.getRule(fluidId)`, with access to the level, position, block, and
  fluid state.
- Interaction builders include `createForItem`, `createForBlock`,
  `createForFluid`, `createForExplosion`, and `createForEntity`.

The local event documentation places `FluidEvents.interact` in startup scripts
and `FluidEvents.source` in server scripts. The latter has world/position/state
context; do not treat both as startup registry events. No active `FluidEvents`
registration was found in the current scripts; installed capability and current
pack usage are separate facts.

FluidJS is an addon API. Do not assume a FluidJS ingredient is accepted by a
Create, MBD, or custom serializer without checking that serializer.

### Fluid Registration And Source Conversion

CWI registers fluids through families of helpers in `Fluids/Fluid.js`. Gas
registration calls `.gaseous()` and `.noBlock()` and adds the existing gas tags;
that is different from a placeable liquid. Preserve fluid IDs, bucket assets,
still/flowing textures, tags, and family membership.

The installed base `FluidBuilder` has `.createAttributes()`, and the installed
Architectury `SimpleArchitecturyFluidAttributes` exposes
`.convertToSource(boolean)`. `FluidBuilder.canConvertToSource(...)` is not a
verified method here. Source renewal is an explicit gameplay behavior and must
be tested with actual neighboring sources and extraction. A visual fluid block
or a bucket does not prove renewal or automation works.

## KubeJS Additions And JEI

KubeJS Additions 4.3.4 exposes additional common events, including:

- `CommonAddedEvents.entityEnterChunk`
- `CommonAddedEvents.entityTame`
- `CommonAddedEvents.playerChangeDimension`
- `CommonAddedEvents.playerClone`
- `CommonAddedEvents.playerRespawn`

Its JEI integration exposes `JEIAddedEvents.registerRecipes`, custom category
builders, catalysts, ingredient and GUI handler registration, custom recipe data,
and runtime registration. CWI uses this for the incubator, mixing vessel,
upgrade, budding catalyst, and hammer displays.

Keep server recipe data and client JEI data synchronized. The custom JEI scripts
may reshape data for display, such as separating item inputs from fluid inputs;
that display transformation is not necessarily the server recipe JSON.

KubeJS Additions also exposes Jade provider registration. Locally documented
`JadeEvents.onCommonRegistration` belongs in startup scripts and
`JadeEvents.onClientRegistration` in client scripts. Provider IDs and payload
shapes must match between their common and client sides.

## Event Contracts And Persistent Data

CWI's startup scripts use registry/modification events, Create spout handlers,
Lychee custom conditions, and `ForgeEvents.onEvent` in addition to basic
`StartupEvents`. Server scripts use block/item/entity/player callbacks, server
tick/load events, and MBD machine callbacks. Client scripts use item tooltips,
JEI hiding/info/removal, and JEI Additions registration. These groups come from
different owners; check the local event page for the correct script type and
callback arguments.

Important working contracts in the current pack:

- Create spout callbacks in `RecipeRegister/BlockFilling.js` and
  `BuddingCatalyze.js` receive `(block, fluid, simulate)`. They return the fluid
  amount accepted, or zero. They mutate blocks and play effects only when
  `simulate` is false. Preserve this distinction when adding a handler.
- MBD callbacks expose the underlying event through `event.getEvent()`.
  Machine data and setters are on the corresponding Java objects; do not
  replace them with similarly named plain JavaScript fields.
- The furnace stores heat, temperature, parallel capacity, and speed data in
  `machine.customData`. Replacing this with script globals changes persistence
  and can mix state between machines.
- `Starter.js` uses `server.persistentData` for world/server initialization and
  `player.persistentData` for per-player first entry. Preserve keys and scope
  to avoid re-running initialization in existing saves.
- Tick scripts share `Utils/GlobalTickCounter.js` and use modulo checks to
  throttle work. Preserve both the counter lifecycle and update interval.
- An `event.cancel()` contract belongs to its owning event. Do not assume every
  callback supports cancellation or returns the same success indicator.

## Registries, Tags, Assets, Loot, And Worldgen

Items, blocks, fluids, effects, and other registry objects are added at startup.
Recipe builders consume registered objects; a recipe cannot create a missing
registry entry. Registry changes need corresponding assets/language and a
restart to verify a clean load.

Tags have a registry type. CWI separately uses item, block, and fluid tags;
an item tag is not a block tag even when they share an ID. `BatchTags.js` derives
material and mining tags from globals. Check both the generated entry and its
tag consumers before making a material usable in a new process.

`assets/<namespace>/` overrides client resources for that namespace. The pack
has texture and language overrides for mod items, so appearance must be checked
against these assets, not a generic real-world color or the original mod's
texture. `data/<namespace>/` contains server datapack resources, including
CWI biome/feature/structure data and Minecraft dimension/noise overrides.

For a worldgen resource, trace its references: biome/structure placement,
placed feature, configured feature, block states, and tags as applicable.
Placement attempts or rarity filters are not guaranteed deposits per chunk.
Verify distribution in a new test world or new chunks before writing player
guidance. Existing terrain remains existing terrain after data edits.

For a loot claim, trace the actual chest/block loot table and its current
script modifications, then inspect the relevant structure container if the
claim is about where an object is stored. Preserve existing loot rolls during
unrelated recipe or documentation changes.

## ProbeJS Workflow

ProbeJS is the local type and event documentation source. The generated output
is under `kubejs/probe/generated/`, while readable event pages are under
`local/kubejs/event_groups/`.

Use this workflow before relying on an unfamiliar API:

1. Search the generated docs for the event or builder name.
2. Inspect the installed jar with `javap` or `unzip -l` when the generated docs
   do not show a method or when behavior matters.
3. Run `/probe dump` after registering a new schema or changing startup APIs.
4. Restart or reload the editor that consumes ProbeJS completion data.
5. Test the actual game reload and inspect the log for recipe deserialization
   errors.

ProbeJS completion is evidence of a registered type, not proof that a recipe's
values are valid for a machine. Validate both the schema and the serializer.

## Safe Recipe Development Workflow

Before editing a recipe or helper:

1. Identify the exact mod and recipe type.
2. Find an existing recipe of that type in exported data, JEI, the mod jar, or
   a generated dump.
3. Record every key, array versus object shape, item/fluid distinction, count,
   chance, processing time, heat requirement, stage, and machine data field.
4. Check whether a native KubeJS or addon builder already handles the type.
5. Check pack helpers and shared globals before adding duplicate logic.
6. Choose a stable explicit recipe ID. Avoid accidental generated IDs when the
   recipe may be modified or removed later.
7. Add the smallest change in the correct script directory.
8. Validate JavaScript with Rhino or the actual KubeJS reload. Node syntax alone
   does not validate Java interop.
9. Confirm the resulting recipe in JEI and in the machine itself.
10. Run `git diff --check`, inspect the diff, and update documentation only when
    the change is intentional and useful.

## Debugging Checklist

### Recipe Does Not Appear

- Confirm the script is under `server_scripts`, not `startup_scripts`.
- Confirm the recipe type is registered by the target mod or addon.
- Check the server log for an invalid ingredient, fluid, or schema component.
- Verify the recipe ID is unique and uses lowercase `namespace:path` syntax.
- Check whether a later removal or replacement script deletes it.
- Run `event.printTypes()` or `event.printExamples(type)` when exploring an
  unfamiliar native type.

### Schema Completion Is Missing

- Confirm schema registration is in a startup script.
- Confirm the schema resource location and component keys match the JSON.
- Run `/probe dump` and restart the editor.
- Check that the external tutorial helper was actually installed before using
  its `Schema` name.

### Machine Rejects A Recipe

- Compare the final serialized JSON with a known-good recipe from the same
  serializer.
- Check singular versus plural output keys.
- Check whether an item input needs an item object, tag, or count.
- Check fluid amount units and tank count.
- Check heat level spelling and machine data.
- Check processing time units; Create uses ticks in the fields documented here.
- Check that transitional items in sequenced assembly match every nested step.

### JEI Is Wrong

- Confirm the custom JEI recipe type ID and catalyst.
- Compare the display transformation with the server recipe data.
- Keep chance, count, fluid amount, and hidden ingredient behavior synchronized.
- Remember that JEI can display a recipe that the server will not accept if the
  custom category data is stale.

## Common Failure Modes To Avoid

- Treating the Mihono `Schema` helper as a native global in this pack.
- Guessing a JSON key's component from its English name.
- Mixing a builder's argument contract with a different serializer's JSON shape.
- Changing a recipe's method order while using a schema helper.
- Flattening nested sequenced-assembly recipes into IDs.
- Replacing `Item.of` with a string when chance, rolls, or NBT matter.
- Passing an `AddItem` object to an API that expects a `FluidStackJS`, or passing
  `Fluid.of` to a custom schema that expects `{ fluid, amount }`.
- Sorting registrations whose order controls generated IDs or conflict
  resolution.
- Editing shared globals without checking every generator that consumes them.
- Claiming that a real-world chemical or mechanical explanation is implemented
  when the recipe only uses that name as a gameplay abstraction.

## Source Map

- Mihono page: `RecipesSchemaAdded` at the URL supplied in the task.
- KubeJS event docs: `local/kubejs/event_groups/`.
- Generated ProbeJS declarations: `kubejs/probe/generated/`.
- KubeJS base jar: `mods/kubejs-forge-2001.6.5-build.26.jar`.
- KubeJS Create jar: `mods/kubejs-create-forge-2001.3.0-build.8.jar`.
- KubeJS Additions jar: `mods/kubejsadditions-forge-4.3.4.jar`.
- FluidJS jar: `mods/fluidjs-1.2.0.jar` (mod metadata 1.3.0; implementation
  version 1.2.0).
- Rhino jar: `mods/rhino-forge-2001.2.3-build.10.jar`.
- ProbeJS jar: `mods/probejs-6.0.1-forge.jar`.

This guide is a development reference, not a promise that every third-party
mod's private serializer is stable. Re-check the installed jars and generated
docs when the modpack updates.
