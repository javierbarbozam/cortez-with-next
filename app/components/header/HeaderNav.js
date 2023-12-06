"use client";

import {
  Box,
  IconButton,
  Link,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { useState } from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { appNavigation } from "../../utils/config";
import { toggleBodyOverflow } from "../../utils/toggleBodyOverflow";

const NavBar = ({ displayType, customEvent, spacing = '0' }) => {
  return (
    <UnorderedList display={displayType} gap='4' spacing={spacing}>
      {appNavigation.map((link, index) => (
        <ListItem key={index}>
          <Link
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
        </ListItem>
      ))}
    </UnorderedList>
  );
};

const DesktopNav = () => {
  return (
    <Box as="nav" display={["none", "none", "initial"]}>
      <NavBar displayType='flex'/>
    </Box>
  );
};

const MobileNav = () => {
  const [modalDisplay, setModalDisplay] = useState("none");

  return (
    <>
      <IconButton
        color="white"
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
      ></IconButton>
      <Box
        onClick={() => setModalDisplay("none")}
        position="absolute"
        zIndex="10"
        top="0"
        left="0"
        bottom="0"
        right="0"
        bg="black"
        opacity="0.6"
        display={modalDisplay}
      />
      <Box
        as="nav"
        display={modalDisplay}
        gap="6"
        alignItems="flexstart"
        flexDirection="column"
        bg="primary"
        width={["50vw", '40vw']}
        height="100vh"
        position="absolute"
        zIndex="10"
        top="0"
        right="0"
        px={['3', '3']}
        pt="6"
        borderLeft="6px solid"
        borderLeftColor="secondary.normal"
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
        ></IconButton>
        <NavBar displayType='initial' spacing="10" customEvent={() => setModalDisplay("none")} />
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
