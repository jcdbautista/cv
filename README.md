# Julius Bautista CV

A statically exported Next.js CV with two server-rendered layouts, published at
[`jcdbautista.github.io/cv`](https://jcdbautista.github.io/cv/).

The default route uses the designed French Vanilla layout. `/vanilla/` provides
a traditional print-oriented layout. Resume content is maintained in
`src/data/resume-data.ts` and shared by both routes.

## Local development

```bash
pnpm install --frozen-lockfile
pnpm dev
# open http://localhost:3000/cv/
```

The project is configured as a GitHub Pages project site, so local and exported
routes include the `/cv` base path.

## Validation

```bash
pnpm check             # Biome lint and formatting checks
pnpm build             # production static export to out/
pnpm validate:static   # exported metadata, landmarks, image alt text, and links
```

Pull requests and pushes to `main` run the same sequence in **Source CI**. A
green source check is the release gate for publishing the static export.

## Deployment and recovery

GitHub Pages serves the generated artifact from `gh-pages`. The source branch,
published artifact, release verification, and forward-rollback procedure are
documented in [docs/deployment-and-rollback.md](docs/deployment-and-rollback.md).

Production changes should always preserve the source SHA and resulting
`gh-pages` SHA as a traceable pair. Do not force-push a rollback.

## Project structure

```text
src/app/                 routes, metadata, and static sitemap
src/data/resume-data.ts  canonical CV content
src/templates/           French Vanilla and Vanilla layouts
scripts/                 exported-site validation
docs/                    deployment and recovery runbook
```
