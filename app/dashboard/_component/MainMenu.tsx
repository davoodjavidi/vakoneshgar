"use client";

import Link from "next/link";
import Logo from "./Logo";
import MenuItem from "./Menu-Item";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LightDarkToggle from "@/components/ui/light-dark-toggle";

export default function MainMenu() {
  return (
    <nav className="bg-muted overflow-auto p-4 flex flex-col">
      {/* logo section */}
      <header className="flex justify-center border-b dark:border-b-black border-b-gray-400 pb-4">
        <div>
          <Logo />
        </div>
      </header>

      {/* end of logo section */}

      {/* start menu item */}
      <ul className="py-4 grow">
        <MenuItem href="/dashboard">پیشخوان</MenuItem>
        <MenuItem href="/dashboard/users">کاربران</MenuItem>
        <MenuItem href="/dashboard/posts">مقاله</MenuItem>
        <MenuItem href="/dashboard/account">اکانت</MenuItem>
        <MenuItem href="/dashboard/settings">تنظیمات سایت</MenuItem>
      </ul>
      {/* end menu items */}

      <footer className="flex gap-2 items-center">
        <Avatar>
          <AvatarImage src="https://avatar.iran.liara.run/public" />
          <AvatarFallback className="bg-pink-300 dark:bg-pink-600">
            DJ
          </AvatarFallback>
        </Avatar>
        <Link
          href="/"
          className="hover:underline underline-offset-4 decoration-pink-400"
        >
          خروج
        </Link>

        <LightDarkToggle className="mr-auto" />
      </footer>
    </nav>
  );
}
