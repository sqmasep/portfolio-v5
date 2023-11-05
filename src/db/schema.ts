import { sqliteTable, integer } from "drizzle-orm/sqlite-core";

export const likeSchema = sqliteTable("like", {
  count: integer("count").default(0),
  lastUpdated: integer("last_updated", { mode: "timestamp" }),
});
