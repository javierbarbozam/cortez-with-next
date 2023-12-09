'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from './theme'
import ReactGA from 'react-ga';

// Configurar el ID de seguimiento de Google Analytics
ReactGA.initialize('G-BWJSJYF5MT');



export function Providers({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  )
}