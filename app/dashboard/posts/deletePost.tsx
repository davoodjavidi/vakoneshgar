"use client";

import { deletePostAction } from "@/app/_lib/actions";
import { Spinner } from "@/components/ui/spinner";
import { Trash } from "lucide-react";
import { useTransition } from "react";

export default function DeletePost({ id }: { id: number }) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    if (confirm("Are you sure you want to delete post?")) {
      startTransition(() => deletePostAction(id));
    }
  }

  return (
    <button
      className="flex items-center gap-1 border border-gray-400 rounded-md p-2 hover:bg-gray-500 cursor-pointer transition duration-300"
      onClick={handleDelete}
    >
      {!isPending ? (
        <>
          <Trash className="cursor-pointer" size={20} />
          <small>پاک کردن</small>
        </>
      ) : (
        <Spinner />
      )}
    </button>
  );
}
