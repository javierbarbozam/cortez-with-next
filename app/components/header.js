'use client';


import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, CloseButton, Flex, IconButton, Link } from "@chakra-ui/react";
import { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";

const Header = () => {
  const [display, changeDisplay] = useState('none')
  return (
    <Box
      as="header"
      borderBottom="1px solid #eaeaea"
      py={4}
      px={6}
      position="relative"
    >
      <Flex alignItems="center">
        <Image
          src="/footerImg/LogoBlanco.png"
          alt="logo blanco"
          width={75}
          height={78}
          mr={4}
          mt={5}
        />
        <Flex
          pos="fixed"
          top="1rem"
          right="1rem"
          display={['none', 'none', 'flex', 'flex']} // Ocultar en resoluciones menores
        >
          <nav style={{ marginLeft: "auto" }}>
            <NextLink href="/" passHref>
              <Link mr={4} mt={5}>
                Inicio
              </Link>
            </NextLink>
            <NextLink href="/" passHref>
              <Link mr={4} mt={5}>
                sobre nosotros
              </Link>
            </NextLink>
          <NextLink href="/" passHref>
              <Link mr={4} mt={5}>
                Metodologia
              </Link>
            </NextLink>
            <NextLink href="/" passHref>
              <Link mr={4} mt={5}>
                contacto
              </Link>
            </NextLink>      
          </nav>

        </Flex>
          <IconButton
          color={"white"}
          ml='150px'
          aria-label="open menu"
          size="lg"
          mr={2}
          icon={<HamburgerIcon/>}
          display={['flex', 'flex','none', 'none']}
          onClick={() => changeDisplay('flex')}
          />
      </Flex>
      <Flex
          w='322px'
          h= '200px'
          bgColor="gray.50"
          zIndex={20}
          pos="fixed"
          top="0"
          left="0"
          overflow="auto"
          flexDir="column"
          display={display}
      >
        <Flex justify="flex-end">
          <IconButton
          mt={2}
          mr={2}
          aria-label="close menu"
          size="ig"
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
          <NextLink href="/" passHref>
            <Link mr={4} mt={5} color="black" style={{ marginTop: '10px' }}>
              Sobre nosotros
            </Link>
          </NextLink>
          <NextLink href="/" passHref>
            <Link mr={4} mt={5} color="black" style={{ marginTop: '10px' }}>
              Metodología
            </Link>
          </NextLink>
          <NextLink href="/" passHref>
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
