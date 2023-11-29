import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";

const Footer = () => {
  const imageStyle = { marginRight: "8px" }; // Establece el margen derecho entre las imágenes

  return (
    <Box
      as="footer"
      position="relative"
      bgImage="url('/footerImg/leaves-bg.png')" // Ruta de la imagen de fondo
      bgSize="70%" 
      color="white"
      width="100%"
      height="120px"
      margin="0px" // Establece los márgenes en píxeles
    >
      <Flex justifyContent="space-around" alignItems="center">
        <Image
          src="/footerImg/app-store.png"
          alt="App Store"
          width={95}
          height={88}
        />
        <Image
          src="/footerImg/LogoBlue.png"
          alt="Yellow Logo"
          width={95}
          height={88}
        />
        <Flex display="flex">
          <Image
            src="/footerImg/facebook.png"
            alt="Vector 2"
            width={20}
            height={35}
            style={imageStyle} // Aplica el estilo de margen a la imagen
          />
          <Image
            src="/footerImg/instagram.png"
            alt="Vector 3"
            width={20}
            height={35}
            style={imageStyle} // Aplica el estilo de margen a la imagen
          />
          <Image
            src="/footerImg/phone.png"
            alt="Vector 4"
            width={20}
            height={35}
            style={imageStyle} // Aplica el estilo de margen a la imagen
          />
          <Image
            src="/footerImg/gmail.png"
            alt="Vector 4"
            width={20}
            height={35}
            style={imageStyle} // Aplica el estilo de margen a la imagen
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
