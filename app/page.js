import BookBanner from "./components/BookBanner";
import HomeCard from "./components/HomeCard";
import CardImgLeft from "./components/CardImgLeft";
import CardApp from "./components/CardApp";
import MissionCard from "./components/MissionCard";
import GoalsCard from "./components/GoalsCard";
import AboutBookCard from "./components/AboutBookCard";

export default function Home() {
  return (
    <main>
      <BookBanner/>
      <HomeCard/>
      <CardImgLeft/>
      <CardApp/>
      <MissionCard/>
      <GoalsCard/>
      <AboutBookCard/>
    </main>
  );
}
