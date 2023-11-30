import { Heading, Link } from "@chakra-ui/react";
import NextLink from 'next/link'
import Contact from '../components/CardContact';

export default function AboutUs() {
  return (
    <main>
      <Heading>Contacto</Heading>
      <Link as={NextLink} href="/">Home</Link>
      <Contact />
    </main>
  );
}