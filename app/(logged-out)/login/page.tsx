"use client";

import { loginAction } from "@/app/_lib/actions";
import Logo from "@/app/dashboard/_component/Logo";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <Logo />

      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>ورود</CardTitle>
          <CardDescription>ورود به حساب کاربری</CardDescription>
        </CardHeader>
        <CardContent className="">
          <form action={loginAction} className="flex gap-2 flex-col">
            <Input type="email" placeholder="ایمیل" name="email" />
            <Input type="password" placeholder="پسورد" name="password" />

            <Button>ورود</Button>
          </form>
        </CardContent>
        <CardFooter className="justify-between">
          <small>حساب کاربری ندارید؟</small>
          <Button asChild variant="outline" size="sm">
            <Link href="/sign-up">ثبت نام</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
