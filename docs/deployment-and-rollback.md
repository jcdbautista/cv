# GitHub Pages deployment and rollback

The public site is `https://jcdbautista.github.io/cv/`. GitHub Pages serves the
static export from the `gh-pages` branch. Source changes live on `main`; the
exported `out/` directory is the deployable artifact.

## Release gate

Before publishing an export:

1. Open a pull request to `main` and require the **Source CI / validate** job to
   pass. It runs `pnpm check`, `pnpm build`, and `pnpm validate:static`.
2. Review the generated site locally with `pnpm dev` or serve `out/` after the
   production build. Check both `/cv/` and `/cv/vanilla/`.
3. Merge the reviewed source change to `main`.
4. Build the exact merged commit with the locked dependencies, then publish
   the unchanged contents of `out/` to `gh-pages` using the repository's
   established Pages publishing command or tool.
5. Record both immutable SHAs: the `main` source commit and resulting
   `gh-pages` artifact commit. Verify the Pages deployment and the public URL.

Do not publish an unreviewed working tree or rebuild after recording the source
SHA. The source and deployed artifact must remain traceable as a pair.

## Current known-good reference

As observed on 2026-08-18, the public deployment is backed by:

- source (`main`): `6a0556fbb837e5d47fa5a4e588aca401a8b61ad0`
- artifact (`gh-pages`): `1de7574783fd5cf98a0788023fc4428edd39e84c`

Update this section after every verified deployment. A successful Pages run and
a public smoke check are required before replacing the reference.

## Rollback

Prefer a forward, auditable rollback over force-pushing either branch:

1. Stop further publishing and capture the failed source SHA, artifact SHA,
   Pages run URL, and visible symptom.
2. Check out the recorded known-good `main` SHA in a clean worktree.
3. Run `pnpm install --frozen-lockfile`, `pnpm check`, `pnpm build`, and
   `pnpm validate:static`.
4. Publish that unchanged `out/` directory to `gh-pages` as a new commit with a
   message that names the failed and restored source SHAs.
5. Wait for the Pages deployment to succeed, then smoke-check `/cv/` and
   `/cv/vanilla/` in a private browser window.
6. Record the new artifact SHA and the reason for rollback. Open a source fix
   before attempting another release.

The prior artifact commit remains an immutable evidence and recovery reference.
Do not delete or rewrite it. A direct branch reset or force-push is an emergency
operation and requires explicit owner approval plus a separately reviewed
recovery plan.
