// import CountUp from "./components/animations/CountUp/CountUp";

import IntroCard from "./components/common/IntroCard/IntroCard";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-2 grid-rows-2 gap-2 h-screen">
        <div className="row-span-2 flex flex-col justify-center w-1/2 m-auto">
          <IntroCard />
        </div>
        <div className="flex flex-col justify-center">
          <div className="">
            <h1 className="text-5xl my-4">About Me</h1>
            <p className="text-xl">
              I&apos;m a frontend web developer dedicated to turning ideas into
              creative solutions. I specialize in creating seamless and
              intuitive user experiences. My approach focuses on creating
              scalable, high-performing solutions tailored to both user needs
              and business objectives. By prioritizing performance,
              accessibility, and responsiveness, I strive to deliver experiences
              that not only engage users but also drive tangible results.
            </p>
          </div>
        </div>
        <div className="col-start-2">
          <div className="flex flex-row m-auto justify-around items-center">
            {/* Count up for years of experience */}
            {/* <div className="flex flex-col items-center">
              <div className="flex flex-row items-center">
                <span>
                  <p className="text-7xl">+</p>
                </span>
                <CountUp
                  from={0}
                  to={4}
                  separator=","
                  direction="up"
                  duration={0.1}
                  className="count-up-text text-8xl"
                />
              </div>
              <span>
                <p className="text-2xl">YEARS OF</p>
                <p className="text-2xl">EXPERIENCE</p>
              </span>
            </div> */}

            {/* Count up for number of skills*/}
            {/* <div className="flex flex-col items-center">
              <div className="flex flex-row items-center">
                <span>
                  <p className="text-7xl">+</p>
                </span>
                <CountUp
                  from={0}
                  to={30}
                  separator=","
                  direction="up"
                  duration={0.1}
                  className="count-up-text text-8xl"
                />
              </div>
              <span>
                <p className="text-2xl">SKILLS</p>
                <p className="text-2xl">LEARNED</p>
              </span>
            </div> */}
          </div>
          {/* Marquee for companies I've worked for */}
          <div></div>
        </div>
      </div>
    </>
  );
}
