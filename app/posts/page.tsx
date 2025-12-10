import Link from "next/link";
import Logo from "../dashboard/_component/Logo";
import prisma from "@/lib/prisma";

export default async function PostsPage() {
  const posts = await prisma.post.findMany();

  return (
    <div className="flex flex-col gap-4 min-h-screen p-24  items-center">
      <Logo />

      <h2>تمامی پست ها</h2>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </div>
  );
}
