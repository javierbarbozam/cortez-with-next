import { Box, IconButton, Link, useTheme } from "@chakra-ui/react";
import { useState } from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { appNavigation } from "../utils/config";
import { toggleBodyOverflow } from "../utils/toggleBodyOverflow";
import { extendTheme  } from "../theme";

const NavBar = ({ customEvent }) => {
  return (
    <>
      {appNavigation.map((link, index) => (
        <Link
          key={index}
          variant="header"
          as={NextLink}
          href={link.href}
          onClick={() => {
            toggleBodyOverflow();
            customEvent();
          }}
        >
          {link.text}
        </Link>
      ))}
    </>
  );
};

const DesktopNav = () => {
  return (
    <Box as='nav' display={["none", "none", "flex"]} gap="4">
      <NavBar />
    </Box>
  );
};

const MobileNav = () => {
  const [modalDisplay, setModalDisplay] = useState("none");
  const theme = useTheme(); // Obtener el tema actual

  return (
    <>
      <IconButton
        display={["block", "block", "none"]}
        onClick={() => {
          toggleBodyOverflow();
          setModalDisplay("flex");
        }}
        _hover={{ bg: "transparent" }}
        aria-label="Abrir menú"
        size="lg"
        bg="transparent"
        icon={<HamburgerIcon />}
      />
      <Box
        onClick={() => setModalDisplay("none")}
        position="absolute"
        zIndex="10"
        top="0"
        left="0"
        bottom="0"
        right="0"
        bg="black"
        opacity="0.5"
        display={modalDisplay}
      />
      <Box
        as="nav"
        bg={theme.colors.primary[500]}
        display={modalDisplay}
        gap="6"
        alignItems="flex-start"
        flexDirection="column"
        width="40vw"
        height="100vh"
        position="absolute"
        zIndex="10"
        top="0"
        right="0"
        px="6"
        pt="6"
      >
        <IconButton
          onClick={() => {
            toggleBodyOverflow();
            setModalDisplay("none");
          }}
          display="flex"
          justifyContent="flex-end"
          color="white"
          _hover={{ bg: "transparent" }}
          aria-label="Cerrar menú"
          size="md"
          bg="transparent"
          icon={<CloseIcon />}
        />
        <NavBar customEvent={() => setModalDisplay("none")} />
      </Box>
    </>
  );
};

export const HeaderNav = () => {
  return (
    // Header
    <>
      <DesktopNav />
      <MobileNav />
    </>
    // Header
  );
};
