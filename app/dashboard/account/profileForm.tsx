"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UpdateProfile } from "@/app/_lib/actions";
import { useFormStatus } from "react-dom";

type User = {
  id: number | string; // Use string if using UUIDs
  name: string;
  email: string;
  nationalId: number;
  placeOfBirth: string;
};

type Props = {
  user: User;
};

export default function ProfileForm({ user }: Props) {
  const { id, name, email, nationalId, placeOfBirth } = user;

  return (
    <div className="flex justify-center items-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>ویرایش اطلاعات</CardTitle>
          <CardDescription>
            برای ویرایش لطفا اطلاعات خود را وارد کنید
          </CardDescription>
        </CardHeader>
        <CardContent className="">
          <form action={UpdateProfile} className="flex gap-2 flex-col">
            <input type="hidden" name="id" value={id} />
            <Input
              type="text"
              placeholder="نام و نام خانوادگی"
              name="name"
              defaultValue={name}
            />
            <Input
              type="email"
              placeholder="ایمیل"
              name="email"
              defaultValue={email}
              disabled
            />

            <Input
              type=""
              placeholder="کدملی"
              name="nationalId"
              defaultValue={nationalId}
              disabled
            />

            <Input
              type=""
              placeholder="محل تولد"
              name="placeOfBirth"
              defaultValue={placeOfBirth}
            />

            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return <Button>{pending ? "درحال ویرایش" : "ویرایش"}</Button>;
}
