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
    paddingBottom: ["5px", "15px"],
  },
  body: {
    p: ["20px", "30px", "40px"],
  },
  footer: {
    paddingTop: "4px",
  },
});

// export the component
export const card = defineMultiStyleConfig({
  baseStyle,
});
