import { Button, Heading, Link } from "@chakra-ui/react";
import { Card, CardBody, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Home() {
  return (
    <main>
      <Heading>Im a Heading</Heading>
      <Card>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>
      <Button size="sm" variant="green">
        Mirar ahora
      </Button>
      <Button variant="yellow">Mirar ahora</Button>
      <Link as={NextLink} href="./nosotros">Sobre Nosotros</Link>
      <Link as={NextLink} href="./contacto">Contacto</Link>
      <Link as={NextLink} href="./metodologia">Metodología</Link>
      <Link href="./[books]/page.js">Nos Conocemos</Link>
    </main>
  );
}
