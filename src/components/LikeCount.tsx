import "server-only";
import likeSchema from "~/db/schema";
import db from "~/server/db";

export default async function LikeCount() {
  const count = await db.select().from(likeSchema);

  const handleLike = async () => {
    "use server";
    await db.update(likeSchema).set({ count: (count[0]?.count ?? 0) + 1 });
  };

  return <div onClick={handleLike}>{count[0]?.count} count</div>;
}
