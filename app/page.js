import { Button } from '@chakra-ui/react'
import { Card, CardBody, Text } from '@chakra-ui/react'
import CardImgLeft from './components/CardImgLeft'
import CardApp from './components/CardApp'
import MissionCard from './components/MissionCard'
import HomeCard from './components/HomeCard'
import GoalsCard from './components/GoalsCard'
import AboutBookCard from './components/AboutBookCard'

export default function Home() {
  return (
    <main>
      <HomeCard/>
      <CardImgLeft/>
      <CardApp/>
      <MissionCard/>
      <GoalsCard/>
      <AboutBookCard/>
    </main>
  );
}
