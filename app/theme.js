import { extendTheme } from '@chakra-ui/react'
import { cardAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle } =
  createMultiStyleConfigHelpers(cardAnatomy.keys)


export const theme = extendTheme({
  colors: {
    primary: {
      500: '#F5C71A'
    },
    secondary: {
      900: '#3F5B5F'
    }
  },
  components: {
    Card: {
      baseStyle: {
        
      },
      variants: {
        elevated: definePartsStyle({
          container: {
            boxShadow: '0px 5px 12px 0px rgba(51, 67, 70, 0.10), 0px 22px 22px 0px rgba(51, 67, 70, 0.09), 0px 49px 29px 0px rgba(51, 67, 70, 0.05), 0px 87px 35px 0px rgba(51, 67, 70, 0.01), 0px 135px 38px 0px rgba(51, 67, 70, 0.00)'
          }
        })
      }
    },
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
})