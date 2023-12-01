"use client";

import {
  Box,
  IconButton,
  Link,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useRef } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

const NavBar = ({ displayType = "flex", gapAmount }) => {
  return (
    <Box display={displayType} gap={gapAmount}>
      <Link variant="header" as={NextLink} href="/">
        Inicio
      </Link>
      <Link variant="header" as={NextLink} href="/nosotros">
        Sobre Nosotros
      </Link>
      <Link variant="header" as={NextLink} href="/metodologia">
        Metodología
      </Link>
      <Link variant="header" as={NextLink} href="/contacto">
        Contacto
      </Link>
      <Link variant="header" as={NextLink} href="/libros/nos-conocemos">
        ¿Nos Conocemos?
      </Link>
    </Box>
  );
};

const DesktopNav = () => {
  return <NavBar displayType={["none", "none", "flex"]} gapAmount="4" />;
};

function MobileNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <IconButton
        display={["block", "block", "none"]}
        ref={btnRef}
        onClick={onOpen}
        _hover={{ bg: "transparent" }}
        aria-label="Abrir menú"
        size="lg"
        bg="transparent"
        icon={<HamburgerIcon />}
      ></IconButton>
      <Drawer
        size="xs"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="primary">
          <DrawerCloseButton color="white" />
          <DrawerBody py={10}>
            <NavBar displayType="grid" gapAmount="4" />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export const HeaderNav = () => {
  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
};
