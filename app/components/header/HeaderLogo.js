import cortezLogo from "../../public/svg/cortez-logo-white.svg";
import { Link } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";

export const HeaderLogo = () => {
  return (
    <Link as={NextLink} href="/" height="100%">
      <Image
        priority={true}
        alt=""
        src={cortezLogo}
        width={0}
        height={0}
        style={{ width: "auto", height: "100%" }}
      ></Image>
    </Link>
  );
};
