import {
  Card,
  CardDescription,
  CardTitle,
} from "@/components/ui/Card/card";

export interface JourneyCardProps {
  header: string;
  title: string;
  description?: string[];
}

export default function JourneyCard(props: JourneyCardProps) {
  const { header, title, description } = props;

  return (
    <>
    <Card className="p-5">
      <CardTitle className="">{header}</CardTitle>
      <CardTitle>{title}</CardTitle>
      <CardDescription>
        <ul>
          {description?.map((data, index) => {
            return <li className="list-disc m-2 text-base" key={index+1}>
              {data}
            </li>
          })}
        </ul>
      </CardDescription>{" "}
      {/* Description in a loop */}
    </Card>
    </>
  );
}
