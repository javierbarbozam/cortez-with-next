import { Heading, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { Doman } from "./components/doman";
import { Reality } from "./components/reality";

export default function Methodology() {
  return (
    <main>
      <Heading>Metodologia</Heading>
      <Link as={NextLink} href="/">
        Home
      </Link>
      <Tabs>
        <TabList>
          <Tab>Realidad Aumentada</Tab>
          <Tab>Método Doman</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {Reality()}
          </TabPanel>
          <TabPanel>
            {Doman()}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </main>
  );
}
