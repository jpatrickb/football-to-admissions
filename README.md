# football-to-admissions

This code base contains data and analysis to answer questions regarding the link between sports teams at a university and enrollment in the university.

## Site (Vite + React)

The Jekyll-based `docs/` site has been replaced with a Vite + React app under `site/`.

- Dev: `npm run dev --prefix site`
- Build: `npm run build --prefix site`
- Preview (optional): `npm run preview --prefix site`

GitHub Pages is deployed via the workflow in `.github/workflows/pages.yml`. Ensure repo Settings → Pages → Source is set to GitHub Actions.

Notes:
- Router uses HashRouter to avoid 404s on GitHub Pages.
- Asset paths use the project base `/football-to-admissions/`.
- Images are served from `site/public/assets/img`.
