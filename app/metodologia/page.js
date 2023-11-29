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
} from "@chakra-ui/react";
import { useState } from "react";
import { Doman } from "./components/doman";
import { Reality } from "./components/reality";

const title = (current) => {
  const data = {
    doman: 'Explora nuestro método de enseñanza: Aprende sobre el Método Doman',
    reality: 'Lectura que Cobre Vida: Descubre la Realidad Aumentada',
  }
  return data[current]
};

export default function Methodology() {
  const [currentTab, setCurrentTab] = useState('reality')

  const titleChange = () => {
    currentTab === 'reality' ? setCurrentTab('doman') : setCurrentTab('reality')
  }

  return (
    <main>
      <Link as={NextLink} href="/">
        Home
      </Link>
      <Heading>{title(currentTab)}</Heading>
      <Tabs onChange={() => {titleChange()}}>
        <TabList>
          <Tab>Realidad Aumentada</Tab>
          <Tab>Método Doman</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>{Reality()}</TabPanel>
          <TabPanel>{Doman()}</TabPanel>
        </TabPanels>
      </Tabs>
    </main>
  );
}
