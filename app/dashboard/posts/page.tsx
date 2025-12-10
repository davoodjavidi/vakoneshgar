import Link from "next/link";

import prisma from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import PostCartDashboard from "./postCartDashboard";
import PostList from "./postList";
import { Suspense } from "react";
import { Spinner } from "@/components/ui/spinner";
import Loading from "./loading";

export default async function PostsPage() {
  return (
    <div className="">
      <h2>تمامی پست ها</h2>

      <Button asChild>
        <Link href="/dashboard/posts/create">افزودن پست</Link>
      </Button>
      <Suspense fallback={<Loading />}>
        <PostList />
      </Suspense>
    </div>
  );
}
