import { Card, Text, Heading, CardBody} from '@chakra-ui/react';

const HomeCard = () => {
  return(
    <Card 
      w="750px" 
      boxShadow='lg' 
      mt="100px" 
      mb="100px" 
      mx="auto" 
      color="#394d51"
    >
      <CardBody mx="auto">
          <Heading mb="15px" textAlign="center">¿Quiénes somos?</Heading>
          <Text fontSize="20px" w="640px">
            CortezAmarillo es una empresa costarricense de innovación en el ámbito de la educación, 
            específicamente para brindar alternativas de lectura en etapas tempranas de aprendizaje, 
            que combine lectura tradicional con herramientas tecnológicas para lograr un 
            vínculo emocional y una experiencia más placentera.
          </Text>
      </CardBody>
    </Card>
  )
}

export default HomeCard