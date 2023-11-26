import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";

const Footer = () => {
  return (
    <Box as="footer" position="relative">
      <Flex alignItems="center">
        <Image
          src="/footerImg/app-store.png"
          alt="App Store"
          width={75}
          height={78}
          style={{ position: "absolute", left: "0px", top: "0" }}
        />
        <Image
          src="/footerImg/YellowLogo.png"
          alt="Yellow Logo"
          width={75}
          height={78}
          style={{ position: "absolute", left: "0px", top: "40%" }}
        />
        <Image
          src="/footerImg/Vector (2).png"
          alt="Vector 2"
          width={30}
          height={55}
          style={{ position: "absolute", left: "90%", top: "40%" }}
        />
        <Image
          src="/footerImg/Vector (3).png"
          alt="Vector 3"
          width={30}
          height={55}
          style={{ position: "absolute", left: "93%", top: "40%" }}
        />
        <Image
          src="/footerImg/Vector (4).png"
          alt="Vector 4"
          width={30}
          height={55}
          style={{ position: "absolute", left: "96%", top: "40%" }}
        />
      </Flex>
    </Box>
  );
};

export default Footer;
