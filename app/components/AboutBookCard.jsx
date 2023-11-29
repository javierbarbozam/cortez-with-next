import { Card, Text, Heading, Image, Box, CardBody, CardFooter, Button } from '@chakra-ui/react';

const AboutBookCard = () => {
  return(
    <Card 
      direction={{ base: 'column', sm: 'row' }} 
      w="815px" 
      boxShadow='lg' 
      mt="100px" 
      mb="60px"
      mx="auto" 
      color="#394d51" 
    >
      <Image
        w="400px"
        src='/images/libro-animalescr.png'
        alt=''
      />
      <Box>
        <CardBody>
          <Heading fontSize="30px" mb="15px">Sobre el libro</Heading>
          <Text py='2px' fontSize="18px" mb="-25px">
            En este libro, te invitamos a un emocionante recorrido por la vida 
            salvaje de Costa Rica, donde descubrirás fascinantes animales y fortalecerás tus 
            habilidades de lectura. ¡Aventurémonos juntos en este viaje de aprendizaje y diversión!
          </Text>
          <Text mt="40px" fontSize="20px" fontWeight="700">
            Ordénalo a tan solo: ₡21.000
          </Text>
        </CardBody>
        <CardFooter>
          <Button mt="-18px" _hover={{ backgroundColor: '#394d51', color:'#F5c71a' }}>
            Descubre más
          </Button>
        </CardFooter>
      </Box>
    </Card>
  )
}

export default AboutBookCard