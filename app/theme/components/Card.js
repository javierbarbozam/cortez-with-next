import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

// base component styles
const baseStyle = definePartsStyle({
  container: {
    boxShadow: "lg",
    borderRadius: "xl",
    position: "relative",
    // Leaves Draft
    // _after: {
    //   content: "''",
    //   bg: "url(/images/card-leaves-top.png) no-repeat",
    //   bgSize: "100% 100%",
    //   objectFit: "cover",
    //   width: "90px",
    //   height: "80px",
    //   position: "absolute",
    //   top: "-17%",
    //   left: "-7%",
    // },
  },
  header: {
    p: "0",
    paddingBottom: ["10px", "15px"],
  },
  body: {
    p: ["20px", "30px", "40px"],
  },
});

const variants = {
  mediaCard: definePartsStyle({
    container: {
      p: ["20px", "30px", "40px"],
      justifyContent: [null, "space-between"],
    },
    body: {
      p: "0",
    },
    footer: {
      p: "0",
      gap: "4",
      flexWrap: [null, 'wrap']
    },
  }),
};

// export the component
export const card = defineMultiStyleConfig({
  baseStyle,
  variants,
});
