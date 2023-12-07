import { Card, Text, Heading, Image, Box, CardBody, CardFooter, Link } from '@chakra-ui/react';
import NextLink from "next/link";

const CardImgLeft = () => {
  return (
    <Card
      direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
      maxW={{ base: '90%', sm: '750px' }}
      boxShadow='lg'
      mt={{ base: '50px', sm: '80px' }}
      mx={{ base: 'auto', sm: '20px', md:'auto', lg:'auto' }}
      alignItems="center"
    >
      <Image
        p={{ base: '15px', sm: '15px' }}
        w={{ base: 'auto', sm: '380px' }}
        src='/images/img-metodo-enseñanza.jpg'
        alt=''
        borderRadius={{ base: '5px', sm: '20px' }}
        opacity={0.7}
      />
      <Box>
        <CardBody>
          <Heading fontSize={{ base: '20px', sm: '22px', md: '22px', lg: '24px' }} mb={{ base: '10px', sm: '15px' }}>
            Explora nuestro método de enseñanza
          </Heading>
          <Text py='2px' fontSize={{ base: '14px', sm: '16px' }} mb={{ base: '-25px', sm: '-10px' }}>
            La Etapa 4 del Método Doman se enfoca en enseñar
            la lectura a niños pequeños a través de tarjetas de palabras,
            ayudándoles a reconocer y leer palabras y frases temprano en su desarrollo.
          </Text>
        </CardBody>
        <CardFooter>
          <Link as={NextLink} variant='yellowBg' href='/metodologia'>Descubre más</Link>
        </CardFooter>
      </Box>
    </Card>
  );
};

export default CardImgLeft;
