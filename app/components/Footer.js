import {
  Box,
  ListItem,
  UnorderedList,
  Link,
  Container,
} from "@chakra-ui/react";
import Image from "next/image";
import cortezLogo from "../../public/svg/cortez-logo-green.svg";
import { contactData } from "../utils/config";
import NextLink from "next/link";
import { AppStoreLink, GooglePlayLink } from "./StoreLink";

const ContactList = () => {
  return (
    <Box display="flex" justifyContent="center">
      <UnorderedList m="0" display="flex" gap="4" alignItems="center">
        {contactData.map((element, index) => (
          <ListItem key={index}>
            <Link as={NextLink} href={element.link}>
              <Image
                src={`/svg/contact/${element.title}.svg`}
                alt=""
                width={0}
                height={0}
                style={{ width: "20px", height: "auto" }}
              ></Image>
            </Link>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export const Footer = () => {
  return (
    <Box as="footer">
      <Container variant="layoutVariant">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          height={["60px", "80px", "120px"]}
        >
          <Box>
            <AppStoreLink />
            <GooglePlayLink />
          </Box>
          <Image
            priority={true}
            alt=""
            src={cortezLogo}
            width={0}
            height={0}
            style={{ width: "auto", height: "100%" }}
          ></Image>
          <ContactList />
        </Box>
      </Container>
    </Box>
  );
};
