import { Card, Text, Heading, Image, Box, CardBody, CardFooter, Link } from '@chakra-ui/react';
import NextLink from "next/link";

const AboutBookCard = () => {
  return (
    <Card
      direction={{ base: 'column', sm: 'row'}}
      w={{ base: '90%', sm: '90%', md: '80%', lg: '60%' }}
      boxShadow='lg'
      mt={{ base: '50px', sm: '100px' }}
      mb={{ base: '40px', sm: '60px' }}
      mx={{ base: 'auto', sm: '20px', md:'auto', lg:'auto' }}
      alignItems="center"
    >
      <Image
        w={{ base: '100%', sm: '50%', md: '40%', lg: '40%' }}
        src='/images/libro-animalescr.png'
        alt=''
      />
      <Box>
        <CardBody>
          <Heading fontSize={{ base: '22px', sm: '26px' }} mb={{ base: '10px', sm: '15px' }}>
            Sobre el libro
          </Heading>
          <Text py='2px' fontSize={{ base: '14px', sm: '16px' }} mb={{ base: '-25px', sm: '-10px' }}>
            En este libro, te invitamos a un emocionante recorrido por la vida salvaje de Costa Rica,
            donde descubrirás fascinantes animales y fortalecerás tus habilidades de lectura. ¡Aventurémonos
            juntos en este viaje de aprendizaje y diversión!
          </Text>
          <Heading
            as="h2"
            mt={{ base: '20px', sm: '30px' }}
            fontSize={{ base: '16px', sm: '16px', md: '18px', lg: '20px' }}
            fontWeight="700"
            mb="-15px"
          >
            Ordénalo a tan solo: ₡21.000
          </Heading>
        </CardBody>
        <CardFooter>
          <Link as={NextLink} variant='yellowBg' href='/libros/nos-conocemos'>Descubre más</Link>
        </CardFooter>
      </Box>
    </Card>
  );
}

export default AboutBookCard;
