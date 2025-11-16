import { Badge } from "@/components/ui/badge";
import JourneyCard from "../components/common/JourneyCards/JourneyCard";
import styles from "./journey.module.css";
import { journeyData } from "./journeyData";

export default function Journey() {
  return (
    <>
      <div className="">
        <div className={`${styles.timeline}`}>
          {journeyData?.map((data, index) => {
            return (
              <div key={index + 1}>
                <Badge
                  className={`${styles.dateContainer} ${
                    index % 2
                      ? styles.dateLeftContainer
                      : styles.dateRightContainer
                  }`}
                >
                  {data?.date}
                </Badge>
                <div
                  className={`${styles.container} ${
                    index % 2 ? styles.rightContainer : styles.leftContainer
                  }`}
                >
                  <div
                    className={`${styles.timelinePointer} ${
                      index % 2 ? styles.leftContainer : ""
                    }`}
                  ></div>
                  <JourneyCard
                    header={data?.header}
                    title={data?.title}
                    description={data?.description}
                  ></JourneyCard>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
