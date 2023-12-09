import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const baseStyle = {
  maxW:{
    base: '600px',
    md: '1024px',
  },
  m: {
    sm: 'auto',
  },
  p: {
    base: '30px',
    md: '40px',
  },
  gap: '30px',
}

const layoutVariant = defineStyle(() => {
  return {
    p: '0 30px',
    h:'100%'
  }
})

// define custom variants
const variants = {
  layoutVariant: layoutVariant,
}

export const containerTheme = defineStyleConfig({ baseStyle, variants })