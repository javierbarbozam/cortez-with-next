import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const headerLink = defineStyle({
  fontFamily: 'kg_blank',
  color: 'white'
});

const variants = {
  header: headerLink,
};

export const linkVariants = defineStyleConfig({ variants });