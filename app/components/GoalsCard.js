import { Card, Text, Heading, Image, Box, CardBody} from '@chakra-ui/react';

const GoalsCard = () => {
  return(
    <Card 
    maxW={{ base: '90%', sm: '750px' }}
    h="100%"
    boxShadow='lg'
    mt={{ base: '50px', sm: '100px' }}
    mb="100px"
    mx={{ base: 'auto', sm: '20px', md:'auto', lg:'auto' }}
    alignItems="center"
    >
      <CardBody>
        <Heading fontSize={{ base: '22px', sm: '26px' }} mb={{ base: '10px', sm: '15px' }} textAlign="center" mt="10px">Objetivos</Heading>
        <Box display={{ base: 'flow', sm: 'flex' }} alignItems={{ base: 'center', sm: 'center' }} spacing='6px'>
          <Text fontSize={{ base: '15px', sm: '17px' }} mb="15px" ml="10px" w="100%">
            Buscar constantemente nuevas formas creativas de enseñar a leer, ya 
            sea a través de libros, juegos interactivos, aplicaciones o programas 
            educativos adaptados a las necesidades y preferencias de los niños.
          </Text>
          <Image
            src='/images/img-método-enseñanza.jpg'
            alt=''
            p={{ base: '15px', sm: '15px' }}
            w={{ base: '100%', sm: '370px' }}
            h={{ base: '100%', sm: '270px' }}
            borderRadius={{ base: '5px', sm: '20px' }}
            opacity={0.7}
          />
        </Box>
      </CardBody>
    </Card>
  )
}

export default GoalsCard