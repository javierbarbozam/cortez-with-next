import { HeaderNav } from "./HeaderNav"
import { HeaderLogo } from "./HeaderLogo"
import { Box, Container, Flex } from '@chakra-ui/react'

export const Header = () => {
  return (
    <header>
      <Container variant='layoutVariant'>
        <Flex justify='space-between' align='center' h='100%' w='100%'>
          <HeaderLogo/>
          <HeaderNav />
        </Flex>
      </Container>
    </header>
  )
}