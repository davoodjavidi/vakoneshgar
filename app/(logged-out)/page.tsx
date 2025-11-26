import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "../dashboard/_component/Logo";

export default function Home() {
  return (
    <>
      <Logo />

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
