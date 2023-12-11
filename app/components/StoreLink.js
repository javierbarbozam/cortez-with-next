import { Link, VisuallyHidden } from "@chakra-ui/react";
import NextLink from "next/link";

export const AppStoreLink = () => (
  <Link
    as={NextLink}
    href="#"
    position="relative"
    _after={{
      content: "''",
      bg: "url(/svg/app-store-badge.svg)",
      bgSize: "100% 100%",
      objectFit: "contain",
      display: "block",
      height: "40px",
      width: "100px",
    }}
  >
    <VisuallyHidden>Descarga nuestra app en el App Store</VisuallyHidden>
  </Link>
);

export const GooglePlayLink = () => (
  <Link
    as={NextLink}
    href="#"
    position="relative"
    _after={{
      content: "''",
      bg: "url(/svg/google-play-badge.png)",
      bgSize: "100% 100%",
      objectFit: "contain",
      display: "block",
      height: "40px",
      width: "100px",
    }}
  >
    <VisuallyHidden>Descarga nuestra app en Google Play</VisuallyHidden>
  </Link>
);
