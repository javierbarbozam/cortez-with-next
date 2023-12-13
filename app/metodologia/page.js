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
  Grid,
} from "@chakra-ui/react";
import { useState } from "react";
import { pagesData } from "../utils/config";
import { DescriptionCard } from "../components/Card/DescriptionCard";
import { AppCard } from "../components/Card/AppCard";

const { augmented_reality, doman } = pagesData.methodology;
const augmentedTitle = augmented_reality.title;
const domanTitle = doman.title;

const Reality = () => {
  return (
    <>
      <DescriptionCard description={augmented_reality.description} />
      <AspectRatio maxW="900px" ratio={16 / 9} ml={{ md: "5px" }} mt="10  px" mb="10px">
        <video width="100%" height="100%" controls allowFullScreen>
          <source src="/video/videoBallena.mp4" type="video/mp4" />
        </video>
      </AspectRatio>
      <AppCard />
    </>
  );
};

const Doman = () => (
  <>
    <DescriptionCard description={doman.description[0]} />
    <Grid
      templateColumns={{ base: "repeat(2, 1fr)" }}
      margin={{ base: "30px 0" }}
      gap={{ base: "30px" }}
    >
      {doman.media.map((element) => element)}
    </Grid>
    <DescriptionCard description={doman.description[1]} />
  </>
);

export default function Methodology() {
  const [currentTab, setCurrentTab] = useState(augmentedTitle);

  const titleChange = () => {
    currentTab === augmentedTitle
      ? setCurrentTab(domanTitle)
      : setCurrentTab(augmentedTitle);
  };

  return (
    <main>
      <Container centerContent>
        <Heading>{currentTab}</Heading>
        <Tabs
          variant="content"
          onChange={() => {
            titleChange();
          }}
        >
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
