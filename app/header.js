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
          mr={4} // Agrega margen a la derecha para separar la imagen del contenido
          mt={5} // Agrega margen superior para posicionar la imagen
        />
        <nav style={{ marginLeft: "auto" }}>
          <NextLink href="/" passHref>
            <Link mr={4} mt={5}>
              Sobre nosotros
            </Link>
          </NextLink>
          <NextLink href="/" passHref>
            <Link mr={4} mt={5}>
              Metodologia
            </Link>
          </NextLink>
        </nav>
      </Flex>
    </Box>
  );
};

export default Header;
