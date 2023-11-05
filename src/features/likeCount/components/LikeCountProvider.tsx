import "server-only";
import LikeCount from "./LikeCount";
import db from "~/server/db";
import { likeSchema } from "~/db/schema";
import { addLike } from "../actions/actions";

export default async function LikeCountProvider() {
  const like = await db.select().from(likeSchema);

  return <LikeCount like={like[0]?.count ?? 0} onLike={addLike} />;
}
