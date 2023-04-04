// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/api/joke.ts";
import * as $1 from "./routes/index.tsx";
import * as $2 from "./routes/of.tsx";
import * as $3 from "./routes/tools.tsx";
import * as $4 from "./routes/twitter.tsx";
import * as $$0 from "./islands/Project.tsx";

const manifest = {
  routes: {
    "./routes/api/joke.ts": $0,
    "./routes/index.tsx": $1,
    "./routes/of.tsx": $2,
    "./routes/tools.tsx": $3,
    "./routes/twitter.tsx": $4,
  },
  islands: {
    "./islands/Project.tsx": $$0,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
