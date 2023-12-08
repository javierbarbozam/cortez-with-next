import { Container } from '@chakra-ui/react';
import BookBanner from "./components/BookBanner";
import { AppCard } from "./components/Card/AppCard";
import { DescriptionCard } from "./components/Card/DescriptionCard";
import { MediaCard } from "./components/Card/MediaCard";
import { pagesData } from "./utils/config";

const { about, learningMethod } = pagesData.home;

export default function Home() {
  return (
    <main>
      <BookBanner />
      <Container centerContent>
        <DescriptionCard title={about.title} description={about.description} />
        <MediaCard
          media={learningMethod.media}
          title={learningMethod.title}
          info={learningMethod.description}
          cta={learningMethod.cta}
        />
        <AppCard />
      </Container>
    </main>
  );
}
