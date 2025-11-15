import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/Card/card";
import GithubIcon from "../../icons/github";
import LinkedInIcon from "../../icons/linkedin";

export default function IntroCard() {
  return (
    <Card className="flex flex-col items-center px-6">
      {/* My Photo */}
      <div></div>
      <div className="text-center">
        <p className="text-5xl mb-12">Prajjwal Singh</p>
        <p className="text-xl font-light">Frontend Developer</p>
        <p className="text-xl font-light">Pune, India</p>
        <p className="text-xl font-light">prajjwals2411@gmail.com</p>
      </div>
      <div className="flex flex-row mb-12">
        <span className="m-2">
          <GithubIcon />
        </span>
        <span className="m-2">
          <LinkedInIcon />
        </span>
      </div>
      <div>
        {/* Add a button to open the resume's PDF */}
        <Button disabled>Resume</Button>
      </div>
    </Card>
  );
}
