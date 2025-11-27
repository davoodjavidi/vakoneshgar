import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BadgeCheckIcon,
  BadgeXIcon,
  LaptopIcon,
  LucideUserX,
  PartyPopper,
  UserCheck2,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import WorkLocationTrends from "./WorkLocationTrends";

export default function SiteInfoTab() {
  const totalUsers = 100;
  const usersValid = 80;
  const validUsersPercentage = (usersValid / totalUsers) * 100;

  return (
    <>
      <div className="grid lg:grid-cols-3 gap-8">
        {/* 1st card */}
        <Card>
          <CardHeader className="">
            <CardTitle className="text-base">تعداد کاربران سایت</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div className="flex gap-2">
              <UserIcon />
              <span className="font-bold text-4xl">{totalUsers}</span>
            </div>
            <div>
              <Button asChild size="xs">
                <Link href="/dashboard/users">نمایش همه</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* 2nd card */}
        <Card>
          <CardHeader className="">
            <CardTitle className="text-base">تعداد کاربران فعال</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              {validUsersPercentage > 75 ? <UserCheck2 /> : <LucideUserX />}

              <span className="font-bold text-4xl">{usersValid}</span>
            </div>
          </CardContent>

          <CardFooter>
            <span
              className={`text-xs flex gap-1 items-center ${
                validUsersPercentage > 75 ? "text-green-500" : "text-red-500"
              }`}
            >
              {validUsersPercentage > 75 ? <BadgeCheckIcon /> : <BadgeXIcon />}
              {validUsersPercentage}% کاربران فعال هستند
            </span>
          </CardFooter>
        </Card>
        {/* 3rd card */}
        <Card className="border-pink-500 flex flex-col">
          <CardHeader>
            <CardTitle className="text-base">کاربر برتر</CardTitle>
          </CardHeader>

          <CardContent className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://avatar.iran.liara.run/public" />
              <AvatarFallback className="bg-pink-300 dark:bg-pink-600">
                DJ
              </AvatarFallback>
            </Avatar>
            <span className="text-2xl font-bold">داود جاویدی</span>
          </CardContent>

          <CardFooter className="flex gap-2 items-center text-sm text-muted-foreground mt-auto">
            <PartyPopper className="text-pink-500" />
            داود تبریک می گوییم.
          </CardFooter>
        </Card>
      </div>
      <Card className="my-4">
        <CardHeader>
          <CardTitle className="text-md flex gap-2 items-center">
            <LaptopIcon />
            <span>اطلاعات محل کار کاربران</span>
          </CardTitle>
        </CardHeader>

        <CardContent className="pl-0">
          <WorkLocationTrends />
        </CardContent>
      </Card>
    </>
  );
}
