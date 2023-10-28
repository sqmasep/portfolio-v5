import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema.ts",
  driver: "better-sqlite",
  out: "./drizzle/",
  dbCredentials: {
    url: "portfolio.db",
  },
} satisfies Config;
