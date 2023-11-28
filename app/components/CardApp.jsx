import { Card, Text, Heading, Image, Box, CardBody, CardFooter, Button, Flex } from '@chakra-ui/react';

const CardApp = () => {
  return(
    <Card direction={{ base: 'column', sm: 'row' }} w="815px" boxShadow='lg' mt="100px" mb="100px" mx="auto" color="#394d51">
      <Box ml="20px">
        <CardBody>
          <Heading fontsize="30px" mb="15px">Descarga nuestra APP</Heading>
          <Text py='2' fontsize="20px" mb="-25px">
            Sumérgete en el mundo colorido de los 
            animales costarricenses con nuestra aplicación, la cual fusiona la lectura con 
            innovación tecnológica para una experiencia educativa única.  
          </Text>
        </CardBody>
        <CardFooter>
          <Button backgroundColor="#334346" w="195px" h="65px" _hover={{ backgroundColor: '#458085' }}>
            <Flex align="center">
              <Image src="/images/apple-logo.svg" alt="" boxSize="40px" mr="12px"  />
              <Box color="#ffffff">
                <Text fontSize="14px">Download on the</Text>
                <Text fontSize="25px">App Store</Text>
              </Box>
            </Flex>
          </Button>
        </CardFooter>
      </Box>
      <Image
        p="15px"
        w="370px"
        src='/images/img-método-enseñanza.jpg'
        alt=''
        borderRadius="20px"
        opacity={0.7}
      />
    </Card>
  )
}

export default CardApp