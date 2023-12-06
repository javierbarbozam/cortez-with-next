'use client'
import { Box, Flex, Image } from "@chakra-ui/react";
import { HeaderNav } from './HeaderNav';
import Link from 'next/link';

const Header = () => {
  return (
    <Box
      as="header"
      borderBottom="1px solid #eaeaea"
      py={4}
      px={9}
      height="100px"
      position="relative"
    >
      <Flex
        alignItems="center"
        justifyContent="space-between" 
      >
        <Box>
        <Link href="/">
            <Image
              src="/footerImg/LogoBlanco.png"
              alt="logo blanco"
              width={{base: "60px", sm: "60px", md: "70px"}}
              height={{base: "60px", sm: "60px", md: "70px"}}
            />
        </Link>
        </Box>
        
        <Box>
          <HeaderNav />
        </Box>
      </Flex>
    </Box>
  );
};


export default Header;
