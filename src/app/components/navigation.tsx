import GradientText from "@/components/animations/GradientText/GradientText";
import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  return <Button>Button</Button>;
}

export default function Navigation() {
  return (
    <>
      <div className="w-full mt-2 flex flex-row justify-between items-center">
        {/* Header Name */}
        <div>
          <GradientText
            colors={["#6e56cf", "#9e8cfc", "#6e56cf", "#9e8cfc", "#6e56cf"]}
            animationSpeed={7}
            className="text-3xl"
          >
            Prajjwal Singh
          </GradientText>
        </div>
        {/* Navigation Buttons */}
        <div className="flex flex-row justify-around p-2 border w-1/3 mx-auto border-radius">
          <Button>Home</Button>
          <Button>Journey</Button>
          <Button>Skills</Button>
          <Button>Contact Me</Button>
          <Button>Project</Button>
        </div>
        {/*  */}
        <div>
          
        </div>
      </div>
    </>
  );
}
