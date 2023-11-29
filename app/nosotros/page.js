import { Heading, Link } from "@chakra-ui/react";
import NextLink from 'next/link'

export default function AboutUs() {
  return (
    <main>
      <Heading>Im About Us</Heading>
      <Link as={NextLink} href="/">Home</Link>
    </main>
  );
}