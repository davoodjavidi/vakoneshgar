import { Button } from "@/components/ui/button";
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

      {/* <div className="flex gap-2 items-center">
        <Button asChild>
          <Link href="/login">ورود</Link>
        </Button>
        <small>|</small>

        <Button asChild variant="outline">
          <Link href="/sign-up">ثبت نام</Link>
        </Button>
      </div> */}
    </div>
  );
}
