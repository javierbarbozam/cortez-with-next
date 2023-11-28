import { Card, Text, Heading, Image, Box, CardBody, CardFooter, Button, Flex } from '@chakra-ui/react';

const MissionCard = () => {
  return(
    <Card maxW='sm' boxShadow='lg' mt="100px" mb="100px" mx="auto" color="#394d51">
      <CardBody>
        <Image
          src='/images/img-método-enseñanza.jpg'
          alt=''
          w="370px"
          h="255px"
          borderRadius="20px"
          opacity={0.7}
        />
        <Box mt='6' spacing='3'>
          <Heading fontsize="30px" mb="15px">Nuestra Misión</Heading>
          <Text fontsize="20px">
            En Cortez Amarillo, inspiramos a los niños a través de 
            recursos educativos innovadores, fomentando la pasión por 
            la lectura y la alfabetización en todos los rincones.
          </Text>
        </Box>
      </CardBody>
    </Card>
  )
}

export default MissionCard