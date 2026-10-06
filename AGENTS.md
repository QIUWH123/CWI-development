# Workspace organization

These instructions apply to every agent working in this repository.

- Read and follow [`docs/DEVELOPMENT_STANDARDS.md`](docs/DEVELOPMENT_STANDARDS.md) and [`docs/KUBEJS_ULTIMATE_GUIDE.md`](docs/KUBEJS_ULTIMATE_GUIDE.md) before editing KubeJS code, recipe data, configuration helpers, or project documentation.

- Store project documentation, design proposals, audits, reviews, and working notes in `docs/`. Do not create Markdown notes beside runtime scripts, quest files, or configuration files.
- Keep the project `README.md` and this `AGENTS.md` at the repository root. Tool-discovered instruction files may remain in their required locations.
- Maintain `docs/README.md` when adding, moving, or removing documents. Update references when moving files.
- Store supporting documentation evidence under `docs/audit/` or another descriptive subfolder of `docs/`. Keep temporary analysis outputs outside the repository unless they need to be retained.
- Keep runtime code, assets, and configuration in their existing functional directories. Documentation cleanup must not change gameplay.
- Prefer updating an existing document to creating duplicate reports or dated copies. Distinguish proposals from approved or implemented changes.
