"use client";

import { validateLogin } from "@/app/_lib/actions";

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

import { Activity } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <div className="flex gap-2 items-center">
        <Activity className="text-primary" size={30} />
        <h3>واکنشگرا</h3>
      </div>

      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>ورود</CardTitle>
          <CardDescription>ورود به حساب کاربری</CardDescription>
        </CardHeader>
        <CardContent className="">
          <form action={validateLogin} className="flex gap-2 flex-col">
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
