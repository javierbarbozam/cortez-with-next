import { extendTheme } from '@chakra-ui/react';

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
    }
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold', // Normally, it is "semibold"
      },
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
      },
      variants: {
        'with-shadow': {
          bg: 'red.400',
          boxShadow: '0 0 2px 2px #efdfde',
        },
        solid: (props) => ({
          bg: 'primary.500',
          color: 'secondary.900'
        }),
        // 5. We can add responsive variants
        sm: {
          bg: 'teal.500',
          fontSize: 'md',
        },
      },
      // 6. We can overwrite defaultProps
      defaultProps: {
        size: 'md', // default is md
        // variant: 'sm', // default is solid
        // colorScheme: 'green', // default is gray
      },
    },
  },
});
