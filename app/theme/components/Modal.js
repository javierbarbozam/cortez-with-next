import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

  const baseStyle = definePartsStyle({
    dialogContainer: {
      alignItems: "center",
    },
    closeButton: {
      color: "white",
      bgColor: "primary",
      borderRadius: "50%",
    },
    body: {
      p: "10px"
    }
  })

export const modalTheme = defineMultiStyleConfig({
  baseStyle,
})