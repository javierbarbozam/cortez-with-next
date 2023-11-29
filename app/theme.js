import { extendTheme } from "@chakra-ui/react";
import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { colors } from "./theme/foundations/colors";
import { fonts } from "./theme/foundations/fonts";
import { Button } from "./theme/components/Button";

const { definePartsStyle } = createMultiStyleConfigHelpers(cardAnatomy.keys);

export const theme = extendTheme({
  colors,
  fonts,
  styles: {
    global: {
      body: {
        fontFamily: fonts.questrial,
        bg: "background",
      },
    },
  },
  components: {
    Card: {
      baseStyle: {},
      variants: {
        elevated: definePartsStyle({
          container: {
            boxShadow:
              "0px 5px 12px 0px rgba(51, 67, 70, 0.10), 0px 22px 22px 0px rgba(51, 67, 70, 0.09), 0px 49px 29px 0px rgba(51, 67, 70, 0.05), 0px 87px 35px 0px rgba(51, 67, 70, 0.01), 0px 135px 38px 0px rgba(51, 67, 70, 0.00)",
          },
        }),
      },
    },
    Button,
    Heading: {
      baseStyle: {
        fontSize: { base: "20px", sm: "25px", md: "30px" }, 
      },
    },
  },
});
