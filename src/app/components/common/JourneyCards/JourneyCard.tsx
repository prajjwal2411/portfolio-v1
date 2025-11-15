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
      {/* <CardDescription>{date}</CardDescription> * Remove the date from here and Add it to right side of the card as a badge */}
      <CardDescription>
        <ul>
          <li>Achievement 1</li>
          <li>Achievement 2</li>
        </ul>
      </CardDescription>{" "}
      {/* Description in a loop */}
    </Card>
    </>
  );
}
