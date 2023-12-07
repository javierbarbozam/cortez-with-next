import BookBanner from "./components/BookBanner";
import { DescriptionCard } from "./components/Card/DescriptionCard";
import { pagesData } from "./utils/config";

const {about} = pagesData.home;

export default function Home() {
  return (
    <main>
      <BookBanner />
      <DescriptionCard title={about.title} description={about.description}/>
    </main>
  );
}
