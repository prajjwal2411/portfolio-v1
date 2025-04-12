"use client"

import GradientText from "@/components/animations/GradientText/GradientText";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export default function Navigation() {

  const [isDark, setIsDark] = useState<boolean>(false);

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
      <div className="w-full mt-2 flex flex-row justify-between items-center">
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
        {/* Navigation Buttons */}
        <div className="flex flex-row justify-around p-2 border w-1/3 border-radius">
          <Button>Home</Button>
          <Button>Journey</Button>
          <Button>Skills</Button>
          <Button>Contact Me</Button>
          <Button>Project</Button>
        </div>
        {/* Dark Mode Switch */}
        <div className="">
          {isDark ? 'DarkMode' : 'LightMode'}
          <Switch onClick={toggleTheme}/>
        </div>
      </div>
    </>
  );
}
