# ORTHOAXIS PLANNER (single-file web build)

Orthopedic deformity analysis, custom angle measurement and multi-osteotomy simulation.
Educational / pre-operative geometric planning aid, not for unvalidated clinical use.

## Run
Open `index.html` in a browser, or host it on GitHub Pages:

1. Create a GitHub repo and upload these files to the root.
2. Settings > Pages > Deploy from branch > `main` / root.
3. Open `https://<your-username>.github.io/<repo>/`.

Needs internet on first load (Tailwind CDN + Google Fonts). Cases are stored locally in your browser (IndexedDB).

## Notes
- "AI Analyze" needs the original Express/Gemini server, so it shows as unavailable here.
- No service worker in this build, so no offline install.
- `build/` holds the icon shim and entry file used to bundle the app with esbuild.
