import { extendTheme } from '@chakra-ui/react'
import { cardAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle } =
  createMultiStyleConfigHelpers(cardAnatomy.keys)


export const theme = extendTheme({
  colors: {
    primary: {
      500: '#2F5356'
    },
    secondary: {
      900: '#3F5B5F'
    }
  },
  styles: {
    global: {
      'footer': {
        backgroundColor: 'primary.500',
        color: 'white',
        width: '100%', // Ancho al 100% del contenedor
        height: '120px', // Ajusta el alto del footer según sea necesario
        // Puedes añadir más estilos aquí según tus necesidades
        // por ejemplo, padding, margen, alineación, etc.
      },
      'header': { // Agregar estilos para el header
        backgroundColor: 'primary.500',
        color: 'white',
        width: '100%', // Ancho al 100% del contenedor
        height: '80px', // Ajustar el alto del header según sea necesario
        // Otros estilos adicionales según sea necesario
        // por ejemplo, padding, margen, alineación, etc.
      },
    },
  },

  },
)