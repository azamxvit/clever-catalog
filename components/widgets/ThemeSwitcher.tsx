"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeSwitcher({ variant = "header" }: { variant?: "header" | "mobile" }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return <div className="h-8 w-[88px] rounded-full bg-white/10" aria-hidden="true" />;
  }

  return (
    <div className={cn(
      "flex items-center gap-1 p-1",
      variant === "header" ? "rounded-full border border-white/15" : "bg-transparent"
    )}>
      <button
        onClick={() => setTheme("light")}
        aria-label="Светлая тема"
        className={cn("rounded-full p-1.5 transition-colors", theme === "light" ? "bg-white text-navy shadow-sm" : "text-white/60 hover:text-white")}
      >
        <Sun className="h-3.5 w-3.5" />
      </button>
      <button
        onClick={() => setTheme("system")}
        aria-label="Системная тема"
        className={cn("rounded-full p-1.5 transition-colors", theme === "system" ? "bg-white text-navy shadow-sm" : "text-white/60 hover:text-white")}
      >
        <Monitor className="h-3.5 w-3.5" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        aria-label="Темная тема"
        className={cn("rounded-full p-1.5 transition-colors", theme === "dark" ? "bg-white text-navy shadow-sm" : "text-white/60 hover:text-white")}
      >
        <Moon className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}