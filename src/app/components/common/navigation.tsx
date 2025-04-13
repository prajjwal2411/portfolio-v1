"use client";

import GradientText from "@/app/components/animations/GradientText/GradientText";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const pathName = usePathname();

  useEffect(() => {
    const root = window.document.documentElement;
    const stored = localStorage.getItem("theme");

    if (stored === "dark") {
      root.classList.add("dark");
      setIsDark(true);
    } else {
      root.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    const isDarkMode = root.classList.contains("dark");

    if (isDarkMode) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <>
      <div className="w-full my-2 flex flex-row justify-between items-center">
        {/* Header Name */}
        <div className="">
          <GradientText
            colors={["#6e56cf", "#9e8cfc", "#6e56cf", "#9e8cfc", "#6e56cf"]}
            animationSpeed={7}
            className="text-3xl"
          >
            Prajjwal Singh
          </GradientText>
        </div>
        {/* Navigation Buttons -> Change this to Cards */}
        <div className="flex flex-row justify-around p-2 border w-1/3 border-radius">
          <Link href="/">Home</Link>
          <Link href="journey"> Journey </Link>
          <Link href="skills"> Skills </Link>
          <Link href="contact"> Contact Me </Link>
          <Link href="proects"> Project </Link>
        </div>
        {/* Dark Mode Switch */}
        <div className="">
          <Switch onClick={toggleTheme} />
        </div>
      </div>
    </>
  );
}
