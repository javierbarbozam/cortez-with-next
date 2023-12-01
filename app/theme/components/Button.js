import { defineStyleConfig } from '@chakra-ui/react'

export const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: 'bold',
    fontFamily: 'kg_blank',
    borderRadius: 'base',
    _hover: {
      transform: "scale(1.05, 1.05)"
    },
    _active: {
      bg: 'transparent'
    }
  },
  variants: {
    yellow: {
      bg: 'secondary.normal',
      color: 'primary',
      _hover: {
        bg: 'secondary.light',
      }
    },
    green: {
      bg: 'primary',
      color: 'secondary.normal',
    },
  },
  defaultProps: {
    variant: 'yellow',
  },
})