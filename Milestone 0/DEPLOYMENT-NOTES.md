# Deployment notes — reconstructed snippet project

This project was reconstructed from the `Milestone 0` snippets in the public repository. Files were placed in their expected locations and a pnpm 9 lockfile was generated. The web build has been tested; the API, migrations, seed, Docker setup and CI were not verified. Do not use with real user data or deploy the backend to production without further work and security review.

For a static frontend on Cloudflare Workers:

- Root directory: `/` (when these files are uploaded directly at the repository root)
- Node build variable: `NODE_VERSION=22`
- Build command: `npx --yes pnpm@9.15.9 install --frozen-lockfile && npx --yes pnpm@9.15.9 --filter web build`
- Deploy command: `npx wrangler deploy --assets ./apps/web/dist --name milestone-0 --compatibility-date 2026-11-24`

This deployment serves the web UI only. The API is not hosted; the UI reports it as unreachable. The Vite development proxy does not work on a static deployment.
