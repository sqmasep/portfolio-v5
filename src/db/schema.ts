import { sqliteTable, integer } from "drizzle-orm/sqlite-core";

const likeSchema = sqliteTable("like", {
  count: integer("count").default(0),
  lastUpdated: integer("last_updated", { mode: "timestamp" }),
});

export default likeSchema;
