import { Card, Text, Heading, Image, Box, CardBody, CardFooter, Button } from '@chakra-ui/react';

const AboutBookCard = () => {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      w={{ base: '90%', sm: '815px' }} // Ajustar el ancho para pantallas pequeñas
      boxShadow='lg'
      mt={{ base: '50px', sm: '100px' }} // Ajustar el margen superior para pantallas pequeñas
      mb={{ base: '40px', sm: '60px' }} // Ajustar el margen inferior para pantallas pequeñas
      mx="auto"
      color="#394d51"
      alignItems="center"
    >
      <Image
        w={{ base: '100%', sm: '400px' }} // Ajustar el ancho de la imagen para pantallas pequeñas
        src='/images/libro-animalescr.png'
        alt=''
      />
      <Box>
        <CardBody>
          <Heading fontSize={{ base: '22px', sm: '26px' }} mb={{ base: '10px', sm: '15px' }}>Sobre el libro</Heading>
          <Text py='2px' fontSize={{ base: '14px', sm: '16px' }} mb="-25px">
            En este libro, te invitamos a un emocionante recorrido por la vida
            salvaje de Costa Rica, donde descubrirás fascinantes animales y fortalecerás tus
            habilidades de lectura. ¡Aventurémonos juntos en este viaje de aprendizaje y diversión!
          </Text>
          <Text mt={{ base: '30px', sm: '40px' }} fontSize="20px" fontWeight="700">
            Ordénalo a tan solo: ₡21.000
          </Text>
        </CardBody>
        <CardFooter>
          <Button mt={{ base: '-15px', sm: '-18px' }} _hover={{ backgroundColor: '#394d51', color: '#F5c71a' }}>
            Descubre más
          </Button>
        </CardFooter>
      </Box>
    </Card>
  );
}

export default AboutBookCard;
