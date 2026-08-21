# Notes

Static GitHub Pages site (Jekyll, `jekyll-theme-minimal` via `_config.yml`). Content is `README.md`; `CNAME` sets the production domain.

- Dev: `docker compose -f docker-compose.base44.yml up -d` → http://localhost:3000 (Jekyll serve with `--force_polling`, needed for bind mounts).
- `Gemfile` was added for local dev only (GitHub Pages ignores it); gems live in the `gems` volume.
- No database, no external services, no secrets. "GitHub Metadata: No GitHub API authentication" in logs is harmless.
- Editing `_config.yml` requires restarting the `web` service; content edits auto-regenerate.
