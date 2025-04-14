import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import GithubIcon from "./components/icons/linkedin";
import LinkedInIcon from "./components/icons/github";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-2 grid-rows-2 gap-2 h-screen">
        <div className="row-span-2 flex flex-col justify-center ">
          <Card className="flex flex-col items-center px-6">
            {/* My Photo */}
            <div></div>
            <div className="text-center">
              <h1>Prajjwal Singh</h1>
              <h4>Frontend Developer</h4>
              <h4>Pune, India</h4>
            </div>
            <div className="flex flex-row">
              <span className="m-2">
                <GithubIcon />
              </span>
              <span className="m-2">
                <LinkedInIcon />
              </span>
            </div>
            <div>
              {/* Add a button to open the resume's PDF */}
              <Button>Resume</Button>
            </div>
          </Card>
        </div>
        <div className=""></div>
        <div className="col-start-2"></div>
      </div>
    </>
  );
}
