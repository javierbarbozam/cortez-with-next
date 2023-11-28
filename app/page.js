import { Button, Heading } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter, Text } from "@chakra-ui/react";

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
    </main>
  );
}
