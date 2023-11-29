import { Card, Text, Heading, Image, Box, CardBody} from '@chakra-ui/react';

const GoalsCard = () => {
  return(
    <Card 
      w="815px"
      boxShadow='lg' 
      mt="100px" 
      mb="100px" 
      mx="auto" 
      color="#394d51" 
    >
      <CardBody>
        <Heading mb="15px" textAlign="center">Objetivos</Heading>
        <Box mt='6' spacing='3' display="flex" alignItems="center" justifyContent="space-evenly" >
          <Text fontSize="20px" w="400px">
            Buscar constantemente nuevas formas creativas de enseñar a leer, ya 
            sea a través de libros, juegos interactivos, aplicaciones o programas 
            educativos adaptados a las necesidades y preferencias de los niños.
          </Text>
          <Image
            src='/images/img-método-enseñanza.jpg'
            alt=''
            w="270px"
            h="190px"
            borderRadius="15px"
            opacity={0.7}
          />
        </Box>
      </CardBody>
    </Card>
  )
}

export default GoalsCard