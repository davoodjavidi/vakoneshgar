"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
        <CardContent>
          <p>فرم ورود</p>
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
