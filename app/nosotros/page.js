import { MediaCard } from "../components/Card/MediaCard";
import { DescriptionCard } from "../components/Card/DescriptionCard";
import { pagesData } from "../utils/config";
import { Container, Flex } from "@chakra-ui/react";

const { history, goals, mission, vision } = pagesData.about;

export default function AboutUs() {
  return (
    <main>
      <DescriptionCard
          title={history.title}
          description={history.description}
        />
        <MediaCard
          direction="row-reverse"
          media={goals.media}
          title={goals.title}
          info={goals.description}
        />
        <Flex flexDir={{ base: "column", sm: "row" }} gap="6">
          <MediaCard
            direction="column"
            media={mission.media}
            title={mission.title}
            info={mission.description}
          />
          <MediaCard
            direction="column"
            media={goals.media}
            title={vision.title}
            info={vision.description}
          />
        </Flex>
    </main>
  );
}
