import { defineStyleConfig } from '@chakra-ui/react'

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

export const containerTheme = defineStyleConfig({ baseStyle })