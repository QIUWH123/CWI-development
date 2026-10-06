# Development Standards

This document is the repository standard for KubeJS scripts, recipe data, configuration helpers, and project documentation. Apply it to new work and to existing files when they are intentionally reformatted. Formatting work must preserve gameplay behavior.

## Scope

- Keep runtime code, assets, and configuration in their existing functional directories.
- Do not rename KubeJS runtime files or directories as a style cleanup. Directory placement can affect KubeJS loading semantics.
- Do not format generated files, caches, assets, `.DS_Store` files, or machine-generated evidence unless the file has been deliberately included for review.
- Store project documentation, design proposals, audits, reviews, and working notes under `docs/`.
- Use uppercase snake case for all Markdown filenames under `docs/`, except `docs/README.md`, which must remain the documentation index required by `AGENTS.md`.

## File Formatting

- Use UTF-8, LF line endings, spaces only, no trailing whitespace, and exactly one final newline.
- Use four spaces for every JavaScript indentation level.
- Remove separator lines such as `----------` and `==========`.
- Add blank lines between top-level functions, event handlers, helper groups, and major recipe sections when they improve readability.
- Use consistent spacing around operators, commas, colons, braces, and chained calls.
- Do not introduce alignment padding that creates inconsistent whitespace.

## JavaScript Style

- Remove trailing semicolons from JavaScript statements.
- Use single quotes for ordinary JavaScript strings.
- Preserve template literals and strings whose escaping or embedded content would change if the quote style changed.
- Use `const` by default and `let` when reassignment is required.
- Do not introduce new `var` declarations. Do not rename existing globals solely for style.
- Keep helper names and public global names unchanged, including `AddItem`, `AddFluid`, `global.outPutMaterial`, and `global.materialTypes`.
- Keep KubeJS priority comments such as `// priority: 10000` as the exact first line of the file. Do not move, reword, or convert them to block comments.

## Comments

- Comments must be standalone and top-level: place them four spaces less indented than the code they describe.
- Replace underscores in comments with spaces.
- Capitalize the first letter of every word in ordinary comments.
- Remove Chinese comments.
- Remove separator comments and decorative comment banners.
- Add or clarify a comment only when it explains non-obvious logic, an intentional gameplay abstraction, a known uncertainty, or an important operating limitation.
- Do not add a repetitive lesson or speculative scientific explanation to every item or recipe.
- Preserve comments that document gameplay abstractions, narrative intent, known uncertainties, or required priorities.
- Category comments inside recipe lists follow these same rules. Do not over-categorize related vanilla items or recipes.

## Item.of Simplification

- Change `Item.of('id')` to `'id'` only when it has no extra method, NBT, tag, callback, or Java object requirement and the receiving API accepts the equivalent item ID.
- Change `Item.of('id', count)` to `'countx id'` only when the receiving API accepts that shorthand and the resulting stack is equivalent.
- Keep `Item.of(...)` when it uses `.withChance()`, `.weakNBT()`, NBT, tags, callbacks, Java `ItemStack` behavior, or any other complex data.
- Verify the receiving API before simplifying an `Item.of(...)` call. A visually shorter expression is not sufficient evidence of equivalence.

## Recipe Data And Helpers

- Keep `event.custom(...)` JSON objects on one line with spaces when doing so remains readable and preserves the custom schema.
- Use `AddItem` and `AddFluid` when they produce the same object shape and behavior as the original recipe data.
- Format item objects as `{ "item": "namespace:path", "count": 2 }` and fluid objects as `{ "fluid": "namespace:path", "amount": 500 }` when the schema uses those fields.
- Keep custom schemas, Java or typed objects, and multiline data when flattening or helper conversion would reduce readability or change the schema.
- Preserve every recipe ID, namespace, path, count, chance, fluid, amount, processing time, heat requirement, stage, predicate, and output order.
- Never correct, rename, or normalize an existing resource ID during formatting.

## Recipe Ordering And Organization

- Group related recipes and helpers logically, with clear section comments.
- Do not reorder runtime files, event handlers, global definitions, material or ore arrays, recipe registrations, generated data maps, sequenced-assembly steps, outputs, or creative-tab entries without verifying that order is semantically irrelevant.
- `Object.values(...)` order, recipe conflict resolution, generated IDs, and event priority can depend on declaration order.
- Sort recipe IDs alphabetically by mod, recipe type, and path only in independent recipe-removal lists where order cannot affect behavior.
- Preserve all originally present non-empty removal IDs. Remove empty entries such as `event.remove({ id: '' })`.
- Combine repeated mod removals into arrays only when the resulting event behavior is identical.
- Keep category comments formatted consistently and do not sort recipe registrations merely to make a file look orderly.

## Naming And Documentation

- Keep resource IDs in lowercase `namespace:path` format.
- Use descriptive uppercase snake case for all Markdown files under `docs/`, for example `RECIPE_REALISM_AUDIT.md` and `STEEL_PRODUCTION_DESIGN.md`. Keep `docs/README.md` as the required index exception.
- Update `docs/README.md` and all internal links when a document is added, removed, or renamed.
- Prefer updating an existing document over creating duplicate dated reports.
- Keep temporary formatter reports outside the repository unless they are intentionally retained under `docs/audit/`.

## Behavior Safeguards

- Formatting changes must be functionally identical to the original code.
- Do not change recipe logic, values, chances, counts, fluids, outputs, event priorities, event order, load order, or helper semantics while applying style rules.
- Treat `Preload/Global.js`, `Fluids/Fluid.js`, and other shared definition files as behavior-sensitive. Preserve their keys, order, and exported values unless the task explicitly changes them.
- Preserve KubeJS directory semantics: startup scripts load once, server scripts reload with server events, and client scripts reload with the client.
- If a requested simplification might affect behavior, keep the original form and record the reason in the review rather than guessing.

## Validation

Run these checks for every formatting batch:

1. Run `git diff --check`.
2. Check for remaining tabs, trailing whitespace, and missing final newlines.
3. Review changed literals and identifiers, especially recipe IDs, counts, chances, fluid amounts, processing times, heat, stages, priorities, and output order.
4. Compare recipe counts and important registration data before and after large edits.
5. Validate scripts with the actual KubeJS or Rhino reload when available. Node syntax checking alone does not validate KubeJS Java interop or runtime APIs.
6. Inspect the final diff for accidental behavior changes before moving to the next batch.

## Review Checklist

- [ ] Only the intended files changed.
- [ ] Formatting follows four-space indentation and has no trailing semicolons.
- [ ] Comments follow the top-level, Title Case, no-underscore rule.
- [ ] Priority comments, IDs, globals, helpers, and runtime paths are preserved.
- [ ] `Item.of(...)` changes were verified against the receiving API.
- [ ] Recipe ordering changes are limited to behavior-independent removal lists.
- [ ] `event.custom(...)`, `AddItem`, and `AddFluid` changes preserve the same schema.
- [ ] `git diff --check` and runtime or Rhino validation were completed where available.
