import { Card, Text, Heading, Image, Box, CardBody, CardFooter, Button } from '@chakra-ui/react';

const CardImgLeft = () => {
  return(
    <Card 
      direction={{ base: 'column', sm: 'row' }} 
      w="815px" 
      boxShadow='lg' 
      mt="100px" 
      mx="auto" 
      color="#394d51" 
    >
      <Image
        p="15px"
        w="370px"
        src='/images/img-método-enseñanza.jpg'
        alt=''
        borderRadius="20px"
        opacity={0.7}
      />
      <Box>
        <CardBody>
          <Heading mb="15px">Explora nuestro método de enseñanza</Heading>
          <Text py='2px' fontSize="20px" mb="-25px">
            La Etapa 4 del Método Doman se enfoca en enseñar 
            la lectura a niños pequeños a través de tarjetas de palabras, 
            ayudándoles a reconocer y leer palabras y frases temprano en su desarrollo.
          </Text>
        </CardBody>
        <CardFooter>
          <Button _hover={{ backgroundColor: '#394d51', color:'#F5c71a' }}>
            Descubre más
          </Button>
        </CardFooter>
      </Box>
    </Card>
  )
}

export default CardImgLeft