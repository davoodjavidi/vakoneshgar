import prisma from "@/lib/prisma";
import PostCartDashboard from "./postCartDashboard";

export default async function PostList() {
  const posts = await prisma.post.findMany();

  return (
    <ul className="grid grid-cols-2 gap-2 mt-2">
      {posts.map((post) => (
        <PostCartDashboard title={post.title} key={post.id} id={post.id} />
      ))}
    </ul>
  );
}
