"use client";

import {
  Heading,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Container,
  AspectRatio,
} from "@chakra-ui/react";
import { useState } from "react";
import { pagesData } from "../utils/config";
import { DescriptionCard } from "../components/Card/DescriptionCard";
import { AppCard } from "../components/Card/AppCard";

const {augmented_reality, doman} = pagesData.methodology
const augmentedTitle = augmented_reality.title
const domanTitle = doman.title

const Reality = () => {
  return (
    <>
      <DescriptionCard description={augmented_reality.description}/>
      <AspectRatio maxW="560px" ratio={16/9}>
        <iframe
          title="naruto"
          src="https://www.youtube.com/embed/QhBnZ6NPOY0"
          allowFullScreen
        />
      </AspectRatio>
      <AppCard />
    </>
  );
};

const Doman = () => (
  <>
    <DescriptionCard description={doman.description[0]}/>
    INSERT IMAGE
    INSERT IMAGE
    <DescriptionCard description={doman.description[1]}/>
  </>
  
)






export default function Methodology() {
  const [currentTab, setCurrentTab] = useState(augmentedTitle)

  const titleChange = () => {
    currentTab === augmentedTitle ? setCurrentTab(domanTitle) : setCurrentTab(augmentedTitle)
  }

  return (
    <main>
      <Container centerContent>
        <Heading>{currentTab}</Heading>
        <Tabs variant='content' onChange={() => {titleChange()}}>
          <TabList>
            <Tab>Realidad Aumentada</Tab>
            <Tab>Método Doman</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>{Reality()}</TabPanel>
            <TabPanel>{Doman()}</TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </main>
  );
}
