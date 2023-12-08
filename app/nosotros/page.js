import { MediaCard } from "../components/Card/MediaCard";
import { DescriptionCard } from "../components/Card/DescriptionCard";
import { pagesData } from "../utils/config";

const { history, goals } = pagesData.about;

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
    </main>
  );
}
