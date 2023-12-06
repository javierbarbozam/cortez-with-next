import { Card, Text, Heading, Image, Box, CardBody, CardFooter, Button, Flex } from '@chakra-ui/react';

const CardApp = () => {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      w={{ base: '90%', sm: '815px' }}
      boxShadow='lg'
      mt={{ base: '50px', sm: '100px' }}
      mb="100px"
      mx="auto"
      alignItems="center"
    >
      <Box ml={{ base: '0', sm: '20px' }}
      >
        <CardBody>
          <Heading fontSize={{ base: '22px', sm: '26px' }} mb={{ base: '10px', sm: '15px' }}>Descarga nuestra APP</Heading>
          <Text py='2' fontSize={{ base: '15px', sm: '17px' }} mb="-25px">
            Sumérgete en el mundo colorido de los
            animales costarricenses con nuestra aplicación, la cual fusiona la lectura con
            innovación tecnológica para una experiencia educativa única.
          </Text>
        </CardBody>
        <CardFooter display={{ base: 'flow', sm: 'flex' }}>
          <Button
            backgroundColor="#334346"
            w={{ base: '160px', sm: '180px' }}
            h="65px"
            mb="15px"
            mr="15px"
            _hover={{ backgroundColor: '#3B6D71' }}
          >
            <Flex align="center">
              <Image src="/images/apple-logo.svg" alt="" boxSize="30px" ml="-6px" mr="10px" />
              <Box color="#ffffff" textAlign="left">
                <Text fontSize={{ base: '12px', sm: '12px' }}>Descargalo en</Text>
                <Text fontSize={{ base: '20px', sm: '18px' }}>App Store</Text>
              </Box>
            </Flex>
          </Button>
          <Button
            backgroundColor="#334346"
            w={{ base: '160px', sm: '180px' }}
            h="65px"
            _hover={{ backgroundColor: '#3B6D71' }}
          >
            <Flex align="center">
              <Image src="/images/google-play-logo.svg" alt="" boxSize="30px" ml="-6px" mr="16px" />
              <Box color="#ffffff" textAlign="left">
                <Text fontSize={{ base: '12px', sm: '14px' }}>Consíguelo en</Text>
                <Text fontSize={{ base: '15px', sm: '16px' }}>Google Play</Text>
              </Box>
            </Flex>
          </Button>
        </CardFooter>
      </Box>
      <Image
        p={{ base: '15px', sm: '15px' }}
        w={{ base: '100%', sm: '320px' }}
        src='/images/img-método-enseñanza.jpg'
        alt=''
        borderRadius={{ base: '5px', sm: '20px' }}
        opacity={0.7}
      />
    </Card>
  );
}

export default CardApp;
