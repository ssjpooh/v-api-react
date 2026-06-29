# v-api-react

TypeScript client converted from `foxcom_api` for React/browser projects.

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
