import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ListChecksIcon, PartyPopper, PieChart, UsersIcon } from "lucide-react";
import Link from "next/link";

export default function TeamsStatTab() {
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-8">
        {/* 1st card */}
        <Card>
          <CardHeader className="">
            <CardTitle className="text-base">تمامی کارکنان</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div className="flex gap-2">
              <UsersIcon />
              <span className="font-bold text-4xl">8</span>
            </div>
            <div>
              <Button asChild size="xs">
                <Link href="/dashboard/settings">نمایش همه</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* 2nd card */}
        <Card>
          <CardHeader className="">
            <CardTitle className="text-base">کارکنان برتر</CardTitle>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
        {/* 3rd card */}
        <Card className="flex flex-col">
          <CardHeader className="flex justify-between">
            <CardTitle className="text-base">توزیع کارکنان</CardTitle>
            <PieChart size={20} />
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
            <ListChecksIcon />
            <span>امتیاز بندی تیکت های پشتیبانی</span>
          </CardTitle>
        </CardHeader>

        <CardContent className="pl-0">Line Graph Goes Here</CardContent>
      </Card>
    </>
  );
}
