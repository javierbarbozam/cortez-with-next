import { Container, Heading } from "@chakra-ui/react";
import Contact from '../components/CardContact';

export default function AboutUs() {
  return (
    <main style={{ height: '58%' }}>
      <Container centerContent>
        <Heading>Contacto</Heading>
        <Contact />
      </Container>
    </main>
  );
}