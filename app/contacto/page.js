import { Heading, Link } from "@chakra-ui/react";
import NextLink from 'next/link'
import Form from '../components/form';

export default function AboutUs() {
  return (
    <main>
      <Heading>Contacto</Heading>
      <Link as={NextLink} href="/">Home</Link>
      <Form />
    </main>
  );
}