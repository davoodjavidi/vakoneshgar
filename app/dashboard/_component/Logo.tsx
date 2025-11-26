import { Activity } from "lucide-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <h3 className="flex gap-2 items-center">
        <Activity className="text-primary" size={30} />
        واکنشگر
      </h3>
    </Link>
  );
}
