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
