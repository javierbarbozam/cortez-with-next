import { MediaCard } from "../components/Card/MediaCard";
import { DescriptionCard } from "../components/Card/DescriptionCard";
import { pagesData } from "../utils/config";
import { Container } from '@chakra-ui/react';

const { history, goals } = pagesData.about;

export default function AboutUs() {
  return (
    <main>
      <Container centerContent >
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
      </Container>
    </main>
  );
}
