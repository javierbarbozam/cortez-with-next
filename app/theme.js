import { extendTheme } from "@chakra-ui/react";
import { colors } from "./theme/foundations/colors";
import { fonts } from "./theme/foundations/fonts";
import { Button } from "./theme/components/Button";
import { Heading } from "./theme/components/Heading";
import { tabsVariants } from "./theme/components/Tabs";
import { linkVariants } from "./theme/components/Link";
import { card } from "./theme/components/Card";
import { containerTheme } from './theme/components/Container';

export const theme = extendTheme({
  colors,
  fonts,
  styles: {
    global: {
      body: {
        fontFamily: fonts.questrial,
        bg: "background",
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
  },
});
