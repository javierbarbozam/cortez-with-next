import { Container, Heading, Link } from "@chakra-ui/react";
import NextLink from 'next/link'
import Contact from '../components/CardContact';
import Form from '../components/form';

export default function AboutUs() {
  return (
    <main>
      <Heading>Contacto</Heading>
      <Container centerContent>
        <Contact />
        <Form />
      </Container>
    </main>
  );
}