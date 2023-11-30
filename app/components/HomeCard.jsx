import { Card, Text, Heading, CardBody } from '@chakra-ui/react';

const HomeCard = () => {
  return (
    <Card
      maxW={{ base: '90%', sm: '750px' }}
      boxShadow='lg'
      mt={{ base: '50px', sm: '100px' }}
      mb="100px"
      mx="auto"
    >
      <CardBody mx="auto">
        <Heading fontSize={{ base: '22px', sm: '26px' }} mb={{ base: '10px', sm: '15px' }} textAlign={{ base: 'left', sm: 'center' }}>¿Quiénes somos?</Heading>
        <Text fontSize={{ base: '15px', sm: '17px' }}>
          CortezAmarillo es una empresa costarricense de innovación en el ámbito de la educación,
          específicamente para brindar alternativas de lectura en etapas tempranas de aprendizaje,
          que combine lectura tradicional con herramientas tecnológicas para lograr un
          vínculo emocional y una experiencia más placentera.
        </Text>
      </CardBody>
    </Card>
  );
}

export default HomeCard;
