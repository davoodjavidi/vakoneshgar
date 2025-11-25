"use client";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MoonIcon, Sun } from "lucide-react";

type Props = {
  className?: string;
};

export default function LightDarkToggle({ className }: Props) {
  const [isDarkMode, setIsDarkmode] = useState(true);

  return (
    <Tooltip>
      <TooltipTrigger
        onClick={() => {
          setIsDarkmode((prev) => !prev);
          document.body.classList.toggle("dark");
        }}
        className={className}
      >
        {isDarkMode ? <MoonIcon /> : <Sun />}
      </TooltipTrigger>
      <TooltipContent>{isDarkMode ? "حالت روز" : "حالت شب"}</TooltipContent>
    </Tooltip>
  );
}
