import BookBanner from "./components/BookBanner";

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
