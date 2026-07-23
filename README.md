# v-api-react

TypeScript client converted from `foxcom_api` for React/browser projects.

## Install from GitHub

Consumers do not need to clone this repository next to their application. Add the Git repository as a dependency. The prebuilt `dist` output is committed to the repository, so installation requires no build scripts (works under pnpm's build-script allowlist without any `allowBuilds` entry).

> Maintainers: run `pnpm build` and commit the regenerated `dist/` together with any `src/` change — consumers install whatever `dist` is committed.

```json
{
  "dependencies": {
    "v-api-react": "git+https://github.com/ssjpooh/v-api-react.git#main"
  }
}
```

Then install the application dependencies.

```bash
pnpm install
```

For reproducible installations, replace `main` with a release tag or commit SHA.

```json
{
  "dependencies": {
    "v-api-react": "git+https://github.com/ssjpooh/v-api-react.git#v1.0.0"
  }
}
```

The repository must be accessible from the developer or CI environment. Private repositories require GitHub authentication configured outside `package.json`.

```ts
import { FoxcomApi } from "v-api-react";

const api = FoxcomApi.init({ baseUrl: "https://api.example.com" });

const result = await api.siteService.getSites({
  token,
  pageNo: 1,
  keyword: "",
  groupID: "",
  isActive: 1,
});
```

Run `npm run convert` after changing the Dart source in `../foxcom_api`.

## Real API token

Create `public/env.json` from `public/env.example.json` and fill in the real API values.

```json
{
  "api_url": "https://api.example.com",
  "token_id": "your-token-id",
  "site_secret": "your-site-secret"
}
```

Then request and save an access token from the real API server.

```bash
pnpm run token
```

The script calls `POST /v1/oauth/token` with `token_id` and `site_secret`, then saves the issued token back to `public/env.json`.

## HTML API test page

Run the local API test page:

```bash
pnpm run dev
```

Open the printed localhost URL. The page loads `public/env.json`, issues tokens through `POST /v1/oauth/token`, and proxies test API calls through the local server to avoid browser CORS issues.
