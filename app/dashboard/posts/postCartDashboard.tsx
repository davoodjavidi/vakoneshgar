import { Edit } from "lucide-react";
import Link from "next/link";
import DeletePost from "./deletePost";

interface Props {
  title: string;
  id: number;
}

export default function PostCartDashboard({ title, id }: Props) {
  return (
    <li className="flex border border-gray-500 justify-between items-center px-2 py-4 rounded-md">
      <Link href={`/posts/${id}`}>{title}</Link>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1 border border-gray-400 rounded-md p-2 hover:bg-gray-500 cursor-pointer transition duration-300">
          <Edit size={20} />
          <small>ویرایش</small>
        </div>

        <DeletePost id={id} />
      </div>
    </li>
  );
}
