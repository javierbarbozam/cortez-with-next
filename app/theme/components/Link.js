import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const headerLink = defineStyle({
  fontFamily: 'kg_blank',
  color: 'white',
  _disabled: {
    color: "secondary.normal",
    cursor: "not-allowed"
  }
});

const yellowBg = defineStyle({
  display: 'inline-block',
  fontFamily: 'kg_blank',
  color: 'primary',
  backgroundColor: 'secondary.normal',
  px: '6',
  py: '3',
  borderRadius: '10px',
})

const variants = {
  header: headerLink,
  yellowBg: yellowBg
};

export const linkVariants = defineStyleConfig({ variants });