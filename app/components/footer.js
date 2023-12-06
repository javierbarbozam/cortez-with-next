import { Box, Flex, Link } from "@chakra-ui/react";
import Image from "next/image";

const Footer = () => {
  const imageStyle = { marginRight: "8px" }; 

  return (
    <Box
      as="footer"
      position="relative"
      backgroundImage="url('/footerImg/leaves-bg.png')"
      backgroundSize="cover"
      color="white"
      width="100%"
      height="120px"
      margin="0px" 
    >
      <Flex justifyContent="space-around" alignItems="center">
        <Box maxW={{ base: "85px", md: "85px" }} width="100%">
          <Image
            src="/footerImg/app-store.png"
            alt="App-Store"
            width={95}
            height={88}
          />
        </Box>
        <Box maxW={{ base: "85px", md: "85px" }} width="100%">
          <Image
            src="/footerImg/LogoBlue.png"
            alt="YellowLogo"
            width={95}
            height={88}
          />
        </Box>

        <Flex>
        <Link href="">
          <Image
            src="/footerImg/facebook.png"
            alt="facebookFooter"
            width={20}
            height={35}
            style={imageStyle}
          />
      </Link>

      <Link href="https://www.instagram.com/cortezamarillo_cr/">
          <Image
            src="/footerImg/instagram.png"
            alt="instagramLogo"
            width={20}
            height={35}
            style={imageStyle}
          />
      </Link>

      <Link href="tel:88381532">
          <Image
            src="/footerImg/phone.png"
            alt="phoneLogo"
            width={20}
            height={35}
            style={imageStyle}
          />
      </Link>

      <Link href="mailto:hola@cortezamarillo-cr.com">
          <Image
            src="/footerImg/gmail.png"
            alt="gmail"
            width={20}
            height={35}
            style={imageStyle}
          />
      </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
