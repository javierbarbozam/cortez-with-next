import { Card, Text, Heading, Image, Box, CardBody } from '@chakra-ui/react';

const MissionCard = () => {
  return (
    <Card
      maxW={{ base: '90%', sm: 'sm' }}
      boxShadow='lg'
      mt={{ base: '50px', sm: '100px' }}
      mb="100px"
      mx={{ base: 'auto', sm: '20px', md:'auto', lg:'auto' }}
    >
      <CardBody>
      <Image
        p={{ base: '5px', sm: '5px' }}
        w={{ base: '100%', sm: '370px' }}
        src='/images/img-metodo-enseñanza.jpg'
        alt=''
        borderRadius={{ base: '5px', sm: '15px' }}
        opacity={0.7}
      />
        <Box mt={{ base: '10px', sm: '15px' }} spacing='3'>
          <Heading fontSize={{ base: '22px', sm: '26px' }} mb="15px">Nuestra Misión</Heading>
          <Text fontSize={{ base: '15px', sm: '17px' }}>
            En Cortez Amarillo, inspiramos a los niños a través de
            recursos educativos innovadores, fomentando la pasión por
            la lectura y la alfabetización en todos los rincones.
          </Text>
        </Box>
      </CardBody>
    </Card>
  );
}

export default MissionCard;
