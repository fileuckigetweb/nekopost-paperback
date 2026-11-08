# NekoPost Paperback 0.8 — v0.3.0 (independent test build)

This repository is independent from SodsaiMe. Five Discover sections: manga, comic, novel, original_novel, ai_project.

Known facts from MANGA SHELF: NekoPost manga chapter URLs can be `/manga/12162/19`; its reader relies on JavaScript/WebView. Paperback is not a WebView, so reader images/text are NOT guaranteed. The API request/response shape has not been validated for all categories.

This build preserves Paperback 0.8 API factories, improves chapter link routing and image fallbacks, and reports unsupported dynamic novel chapters rather than silently showing incorrect content. Novel SVG pages remain experimental for HTML-available text.

Upload `versioning.json`, `index.html`, and `NekoPost/source.js`, `NekoPost/icon.png` to a separate GitHub repository. Confirm versioning.json shows 0.3.0 on GitHub Pages before updating the Paperback source.
