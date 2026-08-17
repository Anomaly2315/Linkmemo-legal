# linkmemo-legal

Static public legal pages for LinkMemo, prepared for GitHub Pages.

## Files

- `index.html` — legal-site overview
- `privacy.html` — privacy policy and account-deletion instructions
- `terms.html` — user agreement
- `delete-account.html` — prominent account-deletion request page
- `styles.css` — responsive styling and no-JavaScript language views
- `sync_from_app.mjs` — regenerates the public pages from the app's legal source

The pages are available in English, Simplified Chinese, Traditional Chinese,
Japanese, and Korean. They use only local HTML and CSS and do not include
analytics, external JavaScript, credentials, user data, or LinkMemo application
source.

The published policy text is generated from
`../LinkMemo/lib/core/legal_documents.dart`, which is the canonical source. Run
`node sync_from_app.mjs` after changing the in-app documents, then review the
generated HTML before publishing.

## Local preview

Open `index.html` directly, or serve the directory with any static HTTP server.

## GitHub Pages

Published from the `main` branch root:

- Legal overview: <https://anomaly2315.github.io/Linkmemo-legal/>
- Account deletion (Simplified Chinese):
  <https://anomaly2315.github.io/Linkmemo-legal/delete-account.html#zh-cn>

Account deletion instructions are intentionally included in the public privacy
policy rather than maintained as a separate page.
