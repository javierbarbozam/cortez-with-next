import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";

const Footer = () => {
  const imageStyle = { marginRight: "8px" }; // Establece el margen derecho entre las imágenes

  return (
    <Box
      as="footer"
      position="relative"
      bgImage="url('/footerImg/leaves-bg.png')"
      bgSize="cover"
      color="white"
      width="100%"
      height="120px"
      margin="0px" // Establece los márgenes en píxeles
    >
        <Flex 
        justifyContent="space-around"
          alignItems="center"
          >
        
        <Box maxW={{ base: "85px", md: "85px" }} width="100%"> 
          <Image 
            src="/footerImg/app-store.png"
            alt="App Store"
            width={95}
            height={88}
            layout="responsive"
          />
        </Box>
        <Box maxW={{ base: "85px", md: "85px" }} width="100%">
          <Image 
            src="/footerImg/LogoBlue.png"
            alt="Yellow Logo"
            width={95}
            height={88}
            layout="responsive" 
          />
        </Box>
        
          <Flex display="flex"> 
            <Image
              src="/footerImg/facebook.png"
              alt="Vector 2"
              width={20}
              height={35}
              style={imageStyle} 
            />
            <Image
              src="/footerImg/instagram.png"
              alt="Vector 3"
              width={20}
              height={35}
              style={imageStyle} 
            />
            <Image
              src="/footerImg/phone.png"
              alt="Vector 4"
              width={20}
              height={35}
              style={imageStyle} 
            />
            <Image
              src="/footerImg/gmail.png"
              alt="Vector 4"
              width={20}
              height={35}
              style={imageStyle} 
            />
          </Flex>
        </Flex>
    </Box>
  );
};

export default Footer;
