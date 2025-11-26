"use client";

import { createUser } from "@/app/_lib/actions";
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
          <CardTitle>ثبت نام</CardTitle>
          <CardDescription>
            برای ثبت نام لطفا اطلاعات خود را وارد کنید
          </CardDescription>
        </CardHeader>
        <CardContent className="">
          <form action={createUser} className="flex gap-2 flex-col">
            <Input type="text" placeholder="نام و نام خانوادگی" name="name" />
            <Input type="email" placeholder="ایمیل" name="email" />
            <Input type="password" placeholder="پسورد" name="password" />
            <Input type="password" placeholder="پسورد" name="confirmPassword" />

            <Button>ورود</Button>
          </form>
        </CardContent>
        <CardFooter className="justify-between">
          <small>قبلا ثبت نام کرده اید؟</small>
          <Button asChild variant="outline" size="sm">
            <Link href="/login">ورود</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
