"use client";

import NextLink from "next/link";
import {
  Heading,
  Link,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Container,
} from "@chakra-ui/react";
import { useState } from "react";
import { Doman } from "./components/doman";
import { Reality } from "./components/reality";
import { methodologyTitles } from "../utils/config";

export default function Methodology() {
  const [currentTab, setCurrentTab] = useState('reality')

  const titleChange = () => {
    currentTab === 'reality' ? setCurrentTab('doman') : setCurrentTab('reality')
  }

  return (
    <main>
      <Container centerContent>
        <Heading>{methodologyTitles(currentTab)}</Heading>
        <Tabs variant='content' isLazy onChange={() => {titleChange()}}>
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
