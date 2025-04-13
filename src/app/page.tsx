import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-2 grid-rows-2 gap-2 h-screen">
        <div className="row-span-2 flex flex-col justify-center ">
          <Card className="flex flex-col">
            <CardHeader>
              {/* My Photo */}
              <div></div>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <h1>Prajjwal Singh</h1>
                <h4>Frontend Developer</h4>
                <h4>Pune, India</h4>
              </div>
              <div>
                {/* Add Linkedin, Github, Profiles */}
              </div>
            </CardContent>
          </Card>
        </div>
        <div className=""></div>
        <div className="col-start-2"></div>
      </div>
    </>
  );
}
