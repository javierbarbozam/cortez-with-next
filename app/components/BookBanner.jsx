import { Box, Button, Heading, Text, Image } from '@chakra-ui/react';

const BookBanner = () => {
  return (
    <Box
      backgroundImage="url('/images/bg-banner.png')"
      bgSize="cover"
      w="100%"
      h={{ base: 'auto', sm: '460px' }}
      color="#394d51"
    >
      <Box
        mx="auto"
        display={{ base: 'block', sm: 'flex' }}
        h="460px"
        w="100%"
        alignItems="center"
        justifyContent="space-evenly"
        bg="rgba(255, 255, 255, 0.8)"
      >
        <Box
          ml={{ base: '32px', sm: '-180px', md: '-260px', lg: '-400px' }}
        >
          <Heading
            fontSize={{ base: '18px', sm: '18px', md: '25px', lg: '30px' }}
            mb="15px"
            pt={{ base: '30px', sm: '30px', md: '50px', lg: '50px' }}
            mt={{ base: '0', sm: '30px', md: '50px', lg: '50px' }}
            textAlign={{ base: 'left', sm: 'left' }}
            w={{ base: '260px', sm: '260px', md: '400px', lg: '500px' }}
          >
            ¡Abre las páginas y descubre la magia de Costa Rica!
          </Heading>
          <Text
            fontSize={{ base: '14px', sm: '14px', md: '18px', lg: '20px' }}
            w={{ base: '260px', sm: '270px', md: '350px', lg: '500px' }}
            textAlign={{ base: 'left', sm: 'left' }}
          >
            Cada animal tiene una historia. Leerla y verla cobrar vida nunca había sido tan fácil.
          </Text>
          <Box mb="4" textAlign={{ base: 'left', sm: 'left' }}>
            <Text
              mt={{ base: '10px', sm: '20px', md: '30px', lg: '30px' }}
              fontSize={{ base: '16px', sm: '16px', md: '20px', lg: '24px' }}
              fontWeight="700"
              mb="15px"
            >
              Ordénalo a tan solo: ₡21.000
            </Text>
            <Button _hover={{ backgroundColor: '#394d51', color: '#F5c71a' }}>
              Míralo ahora
            </Button>
          </Box>
        </Box>
        <Image
          src="/images/libro-animalescr.png"
          alt=""
          w={{ base: '100%', sm: '260px', md: '350px', lg: '470px' }}
          position={{ base: 'relative', sm: 'absolute' }}
          mt={{ base: '0', sm: '70px', md: '70px', lg: '70px' }}
          ml={{ base: '0', sm: '250px', md: '415px', lg: '510px' }}
        />
      </Box>
    </Box>
  );
};

export default BookBanner;
