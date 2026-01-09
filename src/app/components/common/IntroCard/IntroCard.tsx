'use client'

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/Card/card";
import GithubIcon from "../../icons/github";
import LinkedInIcon from "../../icons/linkedin";

export default function IntroCard() {
  const resumeUrl = "https://drive.google.com/file/d/1yO_smdb6JSxNj3jMDNWi-AIISRWgocTG/view?usp=drive_link";

  const handleResumeClick = () => {
    window.open(resumeUrl, "_blank");
  }
  
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
        <a className="m-2" href="https://github.com/prajjwal2411" target="_blank">
          <GithubIcon />
        </a>
        <a className="m-2" href="https://www.linkedin.com/in/prajjwal-singh-75410a142/" target="_blank">
          <LinkedInIcon />
        </a>
      </div>
        <Button onClick={handleResumeClick}>Resume</Button>
    </Card>
  );
}
