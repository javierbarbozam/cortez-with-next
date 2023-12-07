import { defineStyleConfig } from '@chakra-ui/react'

export const Heading = defineStyleConfig({
  baseStyle: {
    fontFamily: "kg_blank",
    textAlign: 'center',
    color: "text",
  },
  variants: {
    descriptionCard: {
      textAlign: { base: "left", sm: "center" }
    }
  }
})