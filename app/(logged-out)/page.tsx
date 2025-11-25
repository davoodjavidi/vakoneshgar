import { Button } from "@/components/ui/button";
import LightDarkToggle from "@/components/ui/light-dark-toggle";
import { Activity } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="flex gap-2 items-center">
        <Activity className="text-pink-500" size={30} />
        واکنشگر
      </h1>

      <p>آموزش برنامه نویسی react و next.js</p>

      <div className="flex gap-2 items-center">
        <Button asChild>
          <Link href="/login">ورود</Link>
        </Button>
        <small>|</small>

        <Button asChild variant="outline">
          <Link href="/sign-up">ثبت نام</Link>
        </Button>
      </div>
    </>
  );
}
