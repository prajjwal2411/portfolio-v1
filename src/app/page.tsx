"use client";

import CountUp from "./components/animations/CountUp/CountUp";
import IntroCard from "./components/common/IntroCard/IntroCard";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-auto md:grid-rows-2 gap-4 md:gap-2 min-h-screen md:h-screen">
          <div className="md:row-span-2 flex flex-col justify-center w-full md:w-1/2 m-auto">
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
                platforms supporting hundreds of internal users (NielsenIQ) and Delhivery's nationwide Last Mile logistics network.
              </p>
            </div>
          </div>
          <div className="col-start-2">
            <div className="flex flex-row m-auto justify-around items-center">
              {/* Count up for years of experience */}
              <div className="flex flex-col items-center">
                <div className="flex flex-row items-center">
                  <CountUp
                    from={0}
                    to={5}
                    separator=","
                    direction="up"
                    duration={0.1}
                    className="count-up-text text-8xl"
                  />
                  <span>
                    <p className="text-9xl">+</p>
                  </span>
                </div>
                <span className="text-center">
                  <p className="text-2xl">YEARS OF</p>
                  <p className="text-2xl">EXPERIENCE</p>
                </span>
              </div>

              {/* Count up for number of skills */}
              <div className="flex flex-col items-center">
                <div className="flex flex-row items-center">
                  <CountUp
                    from={0}
                    to={30}
                    separator=","
                    direction="up"
                    duration={0.1}
                    className="count-up-text text-8xl"
                  />
                  <span>
                    <p className="text-7xl">+</p>
                  </span>
                </div>
                <span className="text-center">
                  <p className="text-2xl">SKILLS</p>
                  <p className="text-2xl">LEARNED</p>
                </span>
              </div>

              {/* Count up for repos maintained */}
              <div className="flex flex-col items-center">
                <div className="flex flex-row items-center">
                  <CountUp
                    from={0}
                    to={55}
                    separator=","
                    direction="up"
                    duration={0.1}
                    className="count-up-text text-8xl"
                  />
                  <span>
                    <p className="text-7xl">+</p>
                  </span>
                </div>
                <span className="text-center">
                  <p className="text-2xl">REPOSITORIES</p>
                  <p className="text-2xl">MAINTAINED</p>
                </span>
              </div>

              {/* Count up for Projects Created */}
              <div className="flex flex-col items-center">
                <div className="flex flex-row items-center">
                  <CountUp
                    from={0}
                    to={5}
                    separator=","
                    direction="up"
                    duration={0.1}
                    className="count-up-text text-8xl"
                  />
                  <span>
                    <p className="text-7xl">+</p>
                  </span>
                </div>
                <span className="text-center">
                  <p className="text-2xl">PROJECTS</p>
                  <p className="text-2xl">CREATED</p>
                </span>
              </div>
            </div>
            {/* Marquee for companies I've worked for */}
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
