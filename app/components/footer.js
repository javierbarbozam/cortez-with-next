import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";

const Footer = () => {
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
    >/ 
      <Flex alignItems="center">
        <Image
          src="/footerImg/app-store.png"
          alt="App Store"
          width={95}
          height={88}
          style={{ position: "absolute", left: "15%", top: "40%" }}
        />
        <Image
          src="/footerImg/LogoBlue.png"
          alt="Yellow Logo"
          width={95}
          height={88}
          style={{ position: "absolute", left: "50%", top: "12%" }}
        />
        <Image
          src="/footerImg/facebook.png"
          alt="Vector 2"
          width={20}
          height={35}
          style={{ position: "absolute", left: "70%", top: "40%" }}
        />
        <Image
          src="/footerImg/instagram.png"
          alt="Vector 3"
          width={20}
          height={35}
          style={{ position: "absolute", left: "72%", top: "40%" }}
        />
        <Image
          src="/footerImg/phone.png"
          alt="Vector 4"
          width={20}
          height={35}
          style={{ position: "absolute", left: "74%", top: "40%" }}
        />
          <Image
          src="/footerImg/gmail.png"
          alt="Vector 4"
          width={20}
          height={35}
          style={{ position: "absolute", left: "76%", top: "40%" }}
        />
      </Flex>
    </Box>
  );
};

export default Footer;
