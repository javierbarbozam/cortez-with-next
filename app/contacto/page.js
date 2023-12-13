import { Container, Heading } from "@chakra-ui/react";
import Contact from '../components/CardContact';
import ContactForm from '../components/form/ContactForm';
import OrderForm from '../components/form/OrderForm';
export default function AboutUs() {
  return (
    <main>
      <Container centerContent>
        <Heading>Contacto</Heading>
        <Contact />
        <ContactForm />
        <OrderForm />
      </Container>
    </main>
  );
}