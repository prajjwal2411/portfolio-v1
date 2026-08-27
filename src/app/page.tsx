"use client";

import IntroCard from "./components/common/IntroCard/IntroCard";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 min-h-screen md:h-screen items-center">
          <div className="flex flex-col justify-center w-full md:w-1/2 m-auto">
            <IntroCard />
          </div>
          <div className="flex flex-col justify-center">
            <div className="">
              <h1 className="text-3xl sm:text-4xl md:text-5xl my-4">
                About Me
              </h1>
              <p className="text-base sm:text-lg md:text-xl">
                Fullstack Developer with 5+ YoE building and scaling web platforms across enterprise SaaS and high-volume logistics
                environments. Skilled across the full stack — React, Node.js, .NET, and PostgreSQL — with hands-on experience driving
                large-scale infrastructure migrations, optimizing application performance, and owning production reliability. Worked on
                platforms supporting hundreds of internal users (NielsenIQ) and Delhivery&apos;s nationwide Last Mile logistics network.
              </p>
            </div>
            {/* Marquee for companies I've worked for */}
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
