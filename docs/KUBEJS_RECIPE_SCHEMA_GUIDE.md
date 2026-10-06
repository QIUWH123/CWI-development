# KubeJS Recipe Schema Guide

This document records the important lessons from the owner's linked
[RecipesSchemaAdded article](https://docs.mihono.cn/zh/modpack/kubejs/1.20.1/KubeJSCourse/KubeJSAdvanced/RecipesSchemaAdded),
checks them against its linked helper, and translates them to CWI's installed
Minecraft 1.20.1 KubeJS API. Read
[KubeJS Ultimate Guide](KUBEJS_ULTIMATE_GUIDE.md) for the rest of the pack's
development workflow and [Development Standards](DEVELOPMENT_STANDARDS.md) for
formatting rules.

## Sources And Verification

- The complete article, including its casting example, instructions, heat
  explanation, and all five schema examples, was read.
- Its linked [prelude.js](https://github.com/Prunoideae/-recipes/blob/1.20.1/src/prelude.js)
  was read in full. The displayed helper revision was `6f59cff`.
- The article links a component reference named `RecipesSchema.java` at
  [the download host](https://cloud.mihono.cn/s/FPCmZY3ibF5JyDD/download/RecipesSchema.java)
  and [the documentation host](https://docs.mihono.cn/Files/RecipesSchema.java).
  Those reference files could not be retrieved during this task; their full
  contents are not claimed as verified.
- The native API below was checked in
  `mods/kubejs-forge-2001.6.5-build.26.jar`, especially
  `BuiltinKubeJSPlugin`, `RecipeSchemaRegistryEventJS`, `RecipeSchema`,
  `RecipeKey`, and component-factory signatures/bytecode.
- No schema helper or runtime schema registration was installed by this
  documentation task. Example registration has not been tested in a running
  Minecraft instance.

## What A Schema Adds

The startup event `StartupEvents.recipeSchemaRegistry` lets scripts describe a
mod's existing recipe serializer. The description enables KubeJS builders,
component conversion, and recipe inspection/replacement for that JSON shape.

A schema does not register a new machine or implement a new serializer. The
target serializer must already exist. Its reading code controls the actual
recipe behavior, regardless of what names the schema assigns to fields.

The article targets KubeJS 1.20.1. Its registration workflow must be checked
again before use on another Minecraft or KubeJS major version.

## Start From The Serializer's JSON

The article's starting fixture is a casting-table recipe:

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

This fixture demonstrates four independent requirements:

- `result` is one output object.
- `ingredients` is an array containing both an item and a fluid.
- `processingTime` is a numeric tick value.
- `mold_consumed` is a Boolean.

Use these observed shapes to choose components. A field name or an English
plural is a useful clue, but does not define a schema. For example, a serializer
could use a singular name for an array; its actual JSON and parser win.

## Components Used By The Article

All the names below are verified native component-factory names registered by
CWI's installed KubeJS jar. They are obtained from `event.getComponents()`;
they are not global functions named after the components.

| Factory | Purpose in the article |
| --- | --- |
| `outputItem` | One output item |
| `outputItemArray` | An array of output items |
| `inputItemArray` | An array of item ingredients |
| `inputFluidOrItemArray` | Mixed fluid and item input array |
| `outputFluidOrItemArray` | Mixed fluid and item output array |
| `outputFluidArray` | An array of fluid outputs |
| `doubleNumber` | Numeric value; the article uses it for duration |
| `bool` | Boolean value |
| `nonEmptyString` | A non-empty string, such as a heat name |

The installed jar also registers `intNumber`. Prefer the component that matches
the target serializer's accepted numeric type. Both numeric components coerce
values rather than acting as strict validation: `intNumber` truncates fractional
values, `doubleNumber` accepts doubles, and the installed numeric components
clamp negative values to zero. Do not assume every duration field accepts
fractional ticks because the article uses `doubleNumber`; inspect the
serializer's expected type and range.

## Key Order And Constructor Arguments

The article puts the output key first and input key second so the generated
builder reads naturally as `recipe(output, inputs)`. Reversing those keys
changes the generated positional constructor signature.

For native schemas, the schema's auto-generated constructors follow key order,
subject to optional/excluded keys; an explicit `.constructor(...)` can define
another signature. Preserve the constructor contract when updating a schema.
Changing the order can break every call even if JSON key names stay identical.

The article adds duration, mold consumption, and heat keys so they can also be
set through chain methods such as `.processingTime(80)`,
`.mold_consumed(false)`, and `.heatRequirement('heated')`.

## The External Helper And Its Actual Semantics

`new Schema(type).simpleKey(...)` comes from the linked `prelude.js`. CWI does
not currently install that helper. Native KubeJS provides the components and
registration event that the helper wraps.

The helper works as follows:

1. Its priority is `100`; it imports `RecipeSchema`, `RecipeComponentBuilder`,
   and `RegistryInfo` and collects `Schema` instances in an array.
2. `simpleKey(name, factoryName, optional, alwaysWrite)` records a key.
3. At `StartupEvents.recipeSchemaRegistry`, it looks up each factory through
   `event.components.get(factoryName)()`, then calls `.key(name)`.
4. When the third argument is `undefined`, it leaves the key required.
5. When the third argument is a non-null value, it calls `.optional(value)`.
6. When the third argument is `null`, it calls `.defaultOptional()`.
7. If a third argument was provided and the fourth argument is truthy, it calls
   `.alwaysWrite()` so an omitted optional value is still written into JSON.
   An explicit chained setter already writes the value it receives, including
   when that value equals the schema default; `.alwaysWrite()` matters for the
   omitted-value case.
8. It skips registration if the serializer ID is absent from the loaded
   recipe-serializer registry.
9. It registers `new RecipeSchema(keys)` using `event.register(type, schema)`.

The helper also has `ComplexKey.addKey`, `Schema.complexKey`, and
`Schema.dynamicKey` for component builders and custom keys. These are external
helper methods. The inspected implementation does not use the `input` flag
passed to `complexKey`; it creates a `ComplexKey` without forwarding that flag.
Do not infer input/output classification from that parameter. Inspect the
resulting component role and serialized data before using a complex schema.

`.defaultOptional()` does not inspect another mod's serializer to discover its
default. In this KubeJS build its optional value is null. Omission and forced
writing must therefore be checked against the target serializer.

## Errors And Misleading Advice In The Article

- `false || true` evaluates to `true`. It supplies one optional default to the
  helper; it does not allow two values.
- `'superheated' || 'heated'` evaluates to `'superheated'`. It does not validate
  heat names or define an enum.
- `nonEmptyString` checks that a string is non-empty. It does not by itself
  restrict it to Create heat conditions.
- `event.recipe` in the first fluent example is a typo. Use `event.recipes`.
- `ServerEvent.recipes` in the prose should be `ServerEvents.recipes`.
- `kubejs/starup_scripts/@recipes` is misspelled. Use `startup_scripts`; the
  `@recipes` name is a convention of that tutorial, not a required directory.
- The article suggests guessing component types and trying again. For CWI,
  inspect the serializer or a known working recipe before changing a production
  schema.
- Values such as `100` for processing time are example defaults, not a general
  rule for every serializer.

## All Five Schema Examples

| Serializer | Ordered keys and factory names in the article |
| --- | --- |
| `createmetallurgy:casting_in_basin` | `result`: `outputItem`; `ingredients`: `inputFluidOrItemArray`; `processingTime`: `doubleNumber`; `mold_consumed`: `bool` |
| `createmetallurgy:casting_in_table` | Same keys and components as basin casting |
| `createmetallurgy:grinding` | `results`: `outputItemArray`; `ingredients`: `inputItemArray`; `processingTime`: `doubleNumber` |
| `createmetallurgy:alloying` | `results`: `outputFluidOrItemArray`; `ingredients`: `inputFluidOrItemArray`; `heatRequirement`: `nonEmptyString`; `processingTime`: `doubleNumber` |
| `createmetallurgy:melting` | `results`: `outputFluidArray`; `ingredients`: `inputItemArray`; `heatRequirement`: `nonEmptyString`; `processingTime`: `doubleNumber` |

Their published optional arguments are `100` for processing time, `true` for
mold consumption after evaluating `false || true`, and `'superheated'` for heat
after evaluating the string expression. These are records of what the article
actually executes, not defaults to apply to CWI recipes.

## Native Registration Without Installing The Helper

The following illustrates the verified native construction path. It uses the
existing `$RecipeSchema` import from CWI's high-priority `ImportStartup.js`.
The chosen defaults `80` and `false` match the fixture above; they are example
schema defaults and are not a claim about Create Metallurgy's stock defaults.

```js
StartupEvents.recipeSchemaRegistry(event => {
    const components = event.getComponents()
    const result = components.get('outputItem')().key('result')
    const ingredients = components.get('inputFluidOrItemArray')().key('ingredients')
    const processingTime = components.get('intNumber')().key('processingTime').optional(80)
    const moldConsumed = components.get('bool')().key('mold_consumed').optional(false)

    event.register('createmetallurgy:casting_in_table', new $RecipeSchema([
        result,
        ingredients,
        processingTime,
        moldConsumed
    ]))
})
```

An example server call supplies the optional values explicitly:

```js
ServerEvents.recipes(event => {
    event.recipes.createmetallurgy.casting_in_table('create:brass_sheet', [
        'createmetallurgy:graphite_plate_mold',
        Fluid.of('createmetallurgy:molten_brass', 90)
    ]).processingTime(80).mold_consumed(false).id('cwi:schema_test/brass_sheet')
})
```

This is a documentation example, not a recipe installed in CWI. Before adopting
it, confirm that the serializer is loaded, no existing integration owns the
schema, and the exported JSON matches the fixture including explicitly written
default-valued fields. Use `.alwaysWrite()` where the serializer needs the
field present even when it equals the schema default.

Other verified native key operations are `.optional(value)`,
`.defaultOptional()`, `.alt(...)`, `.preferred(...)`, `.exclude()`,
`.noBuilders()`, `.allowEmpty()`, and `.alwaysWrite()`. These change construction,
conversion, or serialization; they are not formatting options.

`event.mapRecipe(...)` is available for recipe-name mapping when needed. It is
not an additional mandatory step in the helper's direct registration example.

## Applying This To CWI

Use an existing native/addon builder when it already represents the serializer.
For unsupported serializers, compare an exact `event.custom(...)` recipe with
a candidate schema in a test world before converting a recipe family.

1. Read the installed serializer or a retained recipe resource.
2. Verify required keys, numeric ranges, arrays, item/fluid distinction, and
   serializer defaults.
3. Verify that the component role identifies real inputs/outputs. This affects
   recipe search and replacement as well as builder completion.
4. Register a schema during startup; restart to load it reliably.
5. Run `/probe dump`, then reload the editor's generated completion data.
6. Create one fixture with an explicit ID and explicit optional values.
7. Reload server resources and inspect `logs/kubejs/`.
8. Compare the serialized JSON with the known working recipe.
9. Test the recipe in its machine and check JEI.
10. Convert existing helpers only after proving the output JSON and behavior
    remain equivalent. Preserve all IDs, counts, heat, timing, and mold behavior.

The article demonstrates a valuable way to reduce repetitive custom JSON.
CWI's existing `AddItem`, `AddFluid`, `tableCasting`, `basinCasting`, `melting`,
and `alloying` helpers remain valid until a tested schema conversion is
explicitly requested.
