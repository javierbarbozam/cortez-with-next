import BookBanner from "./components/BookBanner";
import { DescriptionCard } from "./components/Card/DescriptionCard";
import { MediaCard } from "./components/Card/MediaCard";
import { pagesData } from "./utils/config";

const { about, learningMethod } = pagesData.home;

export default function Home() {
  return (
    <main>
      <BookBanner />
      <DescriptionCard title={about.title} description={about.description} />
      <MediaCard
        media={learningMethod.media}
        title={learningMethod.title}
        info={learningMethod.description}
        cta={learningMethod.cta}
      />
    </main>
  );
}
