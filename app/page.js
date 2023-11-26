import Image from 'next/image';
import styles from './page.module.css';
import { Button, Card, CardHeader, CardBody, CardFooter, Text } from '@chakra-ui/react';
import footer from './footer.js'; // Asegúrate de tener la ruta correcta



export default function Home() {
  return (
    <main className={styles.main}>
      <Card>
  <CardBody>
    <Text>View a summary of all your customers over the last month.</Text>
  </CardBody>
</Card>
      <Button fontSize={{ base: "24px", md: "40px", lg: "56px" }}  bgColor={{ base: "yellow", md: "black", lg: "red" }}>Welcome</Button>
      <Button fontSize={["24px", "40px", "56px"]}  bgColor={{ base: "yellow", md: "black", lg: "red" }}>Welcome</Button>
      <Button colorScheme="blue">Un botón de ejemplo</Button>
      {/* Agrega el componente Footer al final de la página */}
      
    </main>
  )
}
