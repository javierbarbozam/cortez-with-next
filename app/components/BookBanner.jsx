import { Box, Button, Heading, Text, Image } from '@chakra-ui/react';

const HeroSection = () => {
  return (
    <Box
      backgroundImage="url('/images/bg-banner.png')"
      bgSize="cover"
      h="440px"
      color="#394d51"
    >
      <Box mx="auto" display="flex" h="440px" alignItems="center" justifyContent="space-evenly" bg="rgba(255, 255, 255, 0.7)">
        <Box mt="50px" ml="-360px">
          <Heading fontSize={{ base: '22px', sm: '30px' }} mb="15px" textAlign="left" w="500px">
            ¡Abre las páginas y descubre la magia de Costa Rica!
          </Heading>
          <Text fontSize={{ base: '15px', sm: '20px' }} w="500px">
            Cada animal tiene una historia. Leerla y verla cobrar vida nunca había sido tan fácil.
          </Text>
          <Box mb="4">
            <Text mt={{ base: '10px', sm: '20px' }} fontSize="20px" fontWeight="700" mb="15px">
              Ordénalo a tan solo: ₡21.000
            </Text>
              <Button _hover={{ backgroundColor: '#394d51', color: '#F5c71a' }}>
                Míralo ahora
              </Button>
          </Box>
        </Box>
        <Image src="/images/libro-animalescr.png" alt="" w={{ base: '100%', sm: '450px' }} position="absolute" mt="70px" ml="500px"/>
      </Box>
    </Box>
  );
};

export default HeroSection;
