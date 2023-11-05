"use server";

import { likeSchema } from "~/db/schema";
import db from "~/server/db";

export const addLike = async (prevCount: number) => {
  await db
    .update(likeSchema)
    .set({ count: prevCount + 1, lastUpdated: new Date(Date.now()) });
};
