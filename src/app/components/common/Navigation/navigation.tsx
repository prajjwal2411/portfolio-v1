"use client";

import GradientText from "@/app/components/animations/GradientText/GradientText";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/Card/card";
import LightModeIcon from "../../icons/light";
import DarkModeIcon from "../../icons/dark";
import './navigation.css';
import { motion } from 'motion/react';

export default function Navigation() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const pathName = usePathname();
  
  const tabs = [
    {id: 'home', label: "Home", href: "/" },
    {id: 'journey', label: "Journey", href: "/journey" },
    {id: 'projects', label: "Projects", href: "/projects" },
    {id: 'contact', label: "Contact", href: "/contact" },
  ];

  let [activeTab, setActiveTab] = useState(tabs[0].id);

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
        <Card className="flex p-3 flex-row justify-around border w-1/3 border-radius items-center">
          {tabs.map((tab) => (
            <Link
              key={tab.id}
              href={tab.href}
              className={`${pathName === tab.href ? "active" : ""} relative rounded-full px-3 py-1.5 text-sm font-medium transition focus:outline-none`}
              onClick={() => setActiveTab(tab.id)}
            >
              {activeTab === tab.id && (
                <motion.span
                  layoutId="selectedIndicator" // The magic happens here
                  className="absolute inset-0 bg-(--primary) rounded-full"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </Link>
          ))}
        </Card>
        {/* Dark Mode Switch */}
        <div className="flex flex-row items-center">
          {isDark ? <DarkModeIcon /> : <LightModeIcon />}
          <Switch className="ml-3" onClick={toggleTheme} />
        </div>
      </div>
    </>
  );
}
