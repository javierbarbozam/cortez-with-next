'use client';


import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, CloseButton, Flex, IconButton, Link } from "@chakra-ui/react";
import { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { color } from "framer-motion";

const Header = () => {
  const [display, changeDisplay] = useState('none')
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
      ml="15px"
      >
  <NextLink href="/">
      <Image
        src="/footerImg/LogoBlanco.png"
        alt="logo blanco"
        width={70}
        height={50}
      />
  </NextLink>


        <Flex
          pos="fixed"
          top="2rem"
          right="3rem"
          display={['none', 'none', 'flex', 'flex']} // Ocultar en resoluciones menores
        >
          <nav style={{ marginLeft: "auto" }}>
            <NextLink href="/" passHref>
              <Link mr={4} mt={5}>
                Inicio
              </Link>
            </NextLink>
            <NextLink href="/libros" passHref>
              <Link mr={4} mt={5}>
                sobre nosotros
              </Link>
            </NextLink>
          <NextLink href="/metodologia" passHref>
              <Link mr={4} mt={5}>
                Metodologia
              </Link>
            </NextLink>
            <NextLink href="/contacto" passHref>
              <Link mr={4} mt={5}>
                contacto
              </Link>
            </NextLink>      
          </nav>

        </Flex>
        <IconButton
        color="white"
        ml={2}
        aria-label="open menu"
        size="lg"
        icon={<HamburgerIcon />}
        display={['flex', 'flex', 'none', 'none']}
        onClick={() => changeDisplay('flex')}
        position="absolute"
        left='80%'
      />
      </Flex>
      <Flex
        w={['222px', '322px']}
        h='200px'
        bgColor="gray.50"
        zIndex={20}
        pos="fixed"
        top="0"
        right="0" 
        overflow="auto"
        flexDir="column"
        display={display}
        borderRadius="15px" 
        borderColor="yellow.400" 
        borderWidth="2px" 
        borderStyle="solid" 
      >
        <Flex justify="flex-end">
          <IconButton
          mt={2}
          mr={2}
          aria-label="close menu"
          size="ig"
          color="red.500"
          icon={
            
            <CloseButton/>
          }
          onClick={() => changeDisplay('none')}
          />

          
        </Flex>

      <Flex
      flexDir="column"
      align='center'
      >
        <nav style={{ display: 'flex', flexDirection: 'column' }}>
          <NextLink href="/" passHref>
            <Link mr={4} mt={5} color="black">
              Inicio
            </Link>
          </NextLink>
          <NextLink href="/libros/page.js" passHref>
            <Link mr={4} mt={5} color="black" style={{ marginTop: '10px' }}>
              Sobre nosotros
            </Link>
          </NextLink>
          <NextLink href="/metodologia" passHref>
            <Link mr={4} mt={5} color="black" style={{ marginTop: '10px' }}>
              Metodología
            </Link>
          </NextLink>
          <NextLink href="/contacto" passHref>
            <Link mr={4} mt={5} color="black" style={{ marginTop: '10px' }}>
              Contacto
            </Link>
          </NextLink>
        </nav>
      </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
