# dylan-thomson.github.io

Personal portfolio. Three static files, no build step, no dependencies, no trackers.

```
index.html   content
styles.css   all styling (dark + light, print stylesheet)
script.js    theme toggle, work filters, scroll reveal
.nojekyll    tell GitHub Pages to serve the files as-is
```

## Local preview

```bash
python3 -m http.server 4000
```

Then open <http://localhost:4000>.

## Deploying to GitHub Pages

**Option A — user site at `https://<username>.github.io`** (recommended)

Create a public repo named exactly `<username>.github.io`, then:

```bash
git remote add origin git@github.com:<username>/<username>.github.io.git && git push -u origin main
```

Pages turns on automatically for user sites. First build takes a minute or two.

**Option B — project site at `https://<username>.github.io/portfolio`**

Push to any public repo, then in the repo's **Settings → Pages**, set
*Source* to "Deploy from a branch", branch `main`, folder `/ (root)`.

## Custom domain

Add a `CNAME` file containing the bare domain (e.g. `dylanthomson.dev`), point a
`CNAME` DNS record at `<username>.github.io`, and enable *Enforce HTTPS* in Settings → Pages.

## Editing the work timeline

Each project is one `<li class="entry">` in `index.html`. Two attributes drive behavior:

- `data-tags` — space-separated; must match a `data-filter` value on a `.chip`
  (`ip`, `analytics`, `platform`, `integrations`, `testing`).
- `data-featured="true"` — marks the accent dot on the timeline; pair it with the
  `<span class="badge">Featured</span>` inside the heading.

Entries are listed newest-first and are otherwise plain HTML.

## A note on content

Written from an internal work-history summary. Client-side detail was deliberately
generalized before publishing: no vendor names, no internal project codenames, no links
to private repositories or internal documents, and no phone number or street address.
Keep it that way when adding entries.
