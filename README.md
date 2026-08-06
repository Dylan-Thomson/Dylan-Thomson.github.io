# dylan-thomson.github.io

Personal portfolio. Three static files, no build step, no dependencies, no trackers.

```
index.html   content
styles.css   all styling (dark + light, print stylesheet)
script.js    theme toggle, scroll reveal
.nojekyll    tell GitHub Pages to serve the files as-is
```

## Local preview

```bash
python3 -m http.server 4000
```

Then open <http://localhost:4000>.

## Deploying to GitHub Pages

**Option A, user site at `https://<username>.github.io`** (recommended)

Create a public repo named exactly `<username>.github.io`, then:

```bash
git remote add origin git@github.com:<username>/<username>.github.io.git && git push -u origin main
```

Pages turns on automatically for user sites. The first build takes a minute or two.

**Option B, project site at `https://<username>.github.io/portfolio`**

Push to any public repo, then in the repo's **Settings → Pages**, set
*Source* to "Deploy from a branch", branch `main`, folder `/ (root)`.

## Custom domain

Add a `CNAME` file containing the bare domain (e.g. `dylanthomson.dev`), point a
`CNAME` DNS record at `<username>.github.io`, and enable *Enforce HTTPS* in Settings → Pages.

## Editing

Each project is one `<li class="entry">` inside an `<ol class="timeline">`. Plain HTML,
no attributes needed beyond the markup itself. Two timelines exist: one in `#agents`
and one in `#work`. Entries are ordered newest first.

Section numbers (`<span class="num">03</span>`) are hand-written, so renumber them if
you add or reorder a section.

## House style

- **No em dashes.** Rewrite the sentence instead of substituting a different dash.
- En dashes are used only for year ranges (`2025 – 2026`).
- Keep the work list short. It is a portfolio, not a changelog. Anything you would not
  want to be asked about in an interview does not belong on the page at all.

## A note on content

Written from an internal work-history summary. Client-side detail was deliberately
generalized before publishing: no vendor names, no internal project codenames, no links
to private repositories or internal documents, and no phone number or street address.
Keep it that way when adding entries.
