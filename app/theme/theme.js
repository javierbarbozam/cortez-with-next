import { extendTheme } from "@chakra-ui/react";
import { colors } from "./foundations/colors";
import { fonts } from "./foundations/fonts";
import { Button } from "./components/Button";
import { Heading } from "./components/Heading";
import { tabsVariants } from "./components/Tabs";
import { linkVariants } from "./components/Link";
import { card } from "./components/Card";
import { containerTheme } from './components/Container';
import { modalTheme } from "./components/Modal";

export const theme = extendTheme({
  colors,
  fonts,
  styles: {
    global: {
      body: {
        fontFamily: fonts.questrial,
        bg: "background",
        height: '100vh'
      },
      header: {
        height: ["80px", "80px", "120px"],
        bg: "primary",
        py: "2",
        borderBottom: "6px solid",
        borderBottomColor: "secondary.normal",
      },
      footer: {
        width: "100%",
        py: "4",
        bg: "url(/images/leaves-bg.png) center/contain",
        backgroundColor: "secondary.light",
      },
      li: {
        listStyle: "none",
      },
    },
  },
  components: {
    Card: card,
    Button,
    Heading,
    Tabs: tabsVariants,
    Link: linkVariants,
    Container: containerTheme,
    Modal: modalTheme
  },
});
