import { Box, Flex, Link } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link"; // Importa Link de Next.js

const Header = () => {
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
          mt={5} n
        />
        <nav style={{ marginLeft: "auto" }}>
          <NextLink href="/" passHref>
            <Link mr={4} mt={5}>
              inicio
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
          </NextLink>          <NextLink href="/" passHref>
            <Link mr={4} mt={5}>
              contacto
            </Link>
          </NextLink>
        </nav>
      </Flex>
    </Box>
  );
};

export default Header;
