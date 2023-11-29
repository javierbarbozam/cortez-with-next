import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
};

export const theme = extendTheme({
  breakpoints,
  colors: {
    primary: {
      500: '#2F5356',
    },
    secondary: {
      900: '#3F5B5F',
    },
    custom: {
      footer: '#FCED8C',
    },
  },
  styles: {
    global: {
      'footer': {
        backgroundColor: 'custom.footer', 
        color: 'white',
        width: '100%',
        height: '120px',
      },
      'header': {
        backgroundColor: 'primary.500', 
        color: 'white',
        width: '100%',
        height: '80px',
      },
    },
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
          color: 'secondary.900',
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
