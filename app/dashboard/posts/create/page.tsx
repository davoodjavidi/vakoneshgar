"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { createPost } from "@/app/_lib/actions";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { Textarea } from "@/components/ui/textarea";

export default function CreatePostPage() {
  return (
    <div className="flex justify-center items-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>افزودن مقاله</CardTitle>
          <CardDescription>
            برای افزودن مقاله اطلاعات خود را وارد کنید
          </CardDescription>
        </CardHeader>
        <CardContent className="">
          <form action={createPost} className="flex gap-2 flex-col">
            <Input type="text" placeholder="عنوان مقاله" name="title" />
            <Textarea placeholder="توضیحات" name="content" />

            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return <Button>{pending ? "درحال ارسال" : "ارسال"}</Button>;
}
