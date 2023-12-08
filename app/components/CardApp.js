import { Card, Text, Heading, Image, Box, CardBody, Button, Flex } from '@chakra-ui/react';
import NextLink from "next/link";

const CardApp = () => {
  return (
    <Card
      direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row'  }}
      maxW={{ base: '90%', sm: '750px' }}
      boxShadow='lg'
      mt={{ base: '50px', sm: '100px' }}
      mb="100px"
      mx={{ base: '10px', sm: 'auto' }}
      alignItems="center"
    >
      <Box ml={{ base: '0', sm: '10px' }} >
        <Box display={{ base: 'flow', sm: 'flex' }}>
          <CardBody>
            <Heading fontSize={{ base: '20px', sm: '22px', md: '22px', lg: '24px' }} mb={{ base: '10px', sm: '15px' }}>
              Descarga nuestra APP
            </Heading>
            <Text py='2px' fontSize={{ base: '14px', sm: '16px' }} mb="-25px">
              Sumérgete en el mundo colorido de los
              animales costarricenses con nuestra aplicación, la cual fusiona la lectura
              con innovación tecnológica para una experiencia educativa única.
            </Text>
            <Box display={{ base: 'flow', sm: 'flex' }} mt="50px">
              <Button
              backgroundColor="#334346"
              w={{ base: '160px', sm: '170px' }}
              h="65px"
              mb="15px"
              mx={{ base: 'auto', sm: '20px', md:'auto', lg:'auto' }}
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
              w={{ base: '160px', sm: '170px' }}
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
            </Box>
          </CardBody>
        </Box>
      </Box>
      <Image
          p={{ base: '15px', sm: '15px' }}
          w={{ base: '100%', sm: '380px' }}
          src='/images/img-método-enseñanza.jpg'
          alt=''
          borderRadius={{ base: '5px', sm: '20px' }}
          opacity={0.7}
        />
    </Card>
  );
}

export default CardApp;