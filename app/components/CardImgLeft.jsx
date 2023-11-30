import { Card, Text, Heading, Image, Box, CardBody, CardFooter, Button } from '@chakra-ui/react';

const CardImgLeft = () => {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      w={{ base: '90%', sm: '815px' }}
      boxShadow='lg'
      mt={{ base: '50px', sm: '100px' }}
      mx="auto"
      alignItems="center"
    >
      <Image
        p={{ base: '15px', sm: '15px' }}
        w={{ base: '100%', sm: '370px' }}
        src='/images/img-método-enseñanza.jpg'
        alt=''
        borderRadius={{ base: '5px', sm: '20px' }}
        opacity={0.7}
      />
      <Box>
        <CardBody>
          <Heading fontSize={{ base: '22px', sm: '26px' }} mb={{ base: '10px', sm: '15px' }}>Explora nuestro método de enseñanza</Heading>
          <Text py='2px' fontSize={{ base: '15px', sm: '17px' }} mb="-25px">
            La Etapa 4 del Método Doman se enfoca en enseñar
            la lectura a niños pequeños a través de tarjetas de palabras,
            ayudándoles a reconocer y leer palabras y frases temprano en su desarrollo.
          </Text>
        </CardBody>
        <CardFooter>
          <Button _hover={{ backgroundColor: '#394d51', color: '#F5c71a' }}>
            Descubre más
          </Button>
        </CardFooter>
      </Box>
    </Card>
  );
};

export default CardImgLeft;
