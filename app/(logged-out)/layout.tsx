import { Button } from "@/components/ui/button";
import LightDarkToggle from "@/components/ui/light-dark-toggle";
import Link from "next/link";

type Props = {
  children?: React.ReactNode;
};

export default function LoggedOutLayout({ children }: Props) {
  return (
    <>
      <div className="flex flex-col gap-4 min-h-screen p-24 justify-center items-center">
        {children}
      </div>
      <LightDarkToggle className="fixed top-[calc(50%-12px)] right-5" />
      <Button asChild className="fixed top-2 right-2">
        <Link href="/dashboard">حساب کاربری</Link>
      </Button>
    </>
  );
}
