import { Box, Link, Heading, Text, Image } from '@chakra-ui/react';
import NextLink from "next/link";

const BookBanner = () => {
  return (
    <Box
      backgroundImage="url('/images/bg-banner.png')"
      bgSize="cover"
      w="100%"
      h={{ base: '340px', sm: '320px', md: '400px', lg: '430px' }}
      color="#394d51"
      mb={{ base: '80%', sm:'0'}}
    >
      <Box 
        mx="auto"
        display={{ base: 'block', sm: 'flex' }}
        h={{ base: '340px', sm: '320px', md: '400px', lg: '430px' }}
        w="100%"
        alignItems="center"
        justifyContent="space-evenly"
        bg="rgba(255, 255, 255, 0.8)"
      >
        <Box
          ml={{ base: '34px', sm: '-175px', md: '-260px', lg: '-400px' }}
        >
          <Heading
            fontSize={{ base: '18px', sm: '16px', md: '22px', lg: '30px' }}
            mb="15px"
            pt={{ base: '30px', sm: '30px', md: '50px', lg: '50px' }}
            mt={{ base: '0', sm: '15px', md: '50px', lg: '50px' }}
            textAlign={{ base: 'left', sm: 'left' }}
            w={{ base: '220px', sm: '230px', md: '370px', lg: '500px' }}
          >
            ¡Abre las páginas y descubre la magia de Costa Rica!
          </Heading>
          <Text
            fontSize={{ base: '14px', sm: '14px', md: '18px', lg: '20px' }}
            w={{ base: '230px', sm: '230px', md: '350px', lg: '500px' }}
            textAlign={{ base: 'left', sm: 'left' }}
          >
            Cada animal tiene una historia. Leerla y verla cobrar vida nunca había sido tan fácil.
          </Text>
          <Box mb="4">
            <Heading
              as="h2"
              mt={{ base: '10px', sm: '20px', md: '30px', lg: '30px' }}
              fontSize={{ base: '14px', sm: '14px', md: '18px', lg: '20px' }}
              fontWeight="700"
              mb="15px"
              textAlign="left"
            >
              Ordénalo a tan solo: ₡21.000
            </Heading>
            <Link as={NextLink} variant='yellowBg' href='/libros/nos-conocemos'>Miralo ahora</Link>
          </Box>
        </Box>
        <Image
          src="/images/book-crAnimals.png"
          alt=""
          w={{ base: '100%', sm: '270px', md: '382px', lg: '430px' }}
          position="absolute"
          zIndex="1"
          mt={{ base: '0px', sm: '80px', md: '76px', lg: '60px' }}
          ml={{ base: '0px', sm: '220px', md: '396px', lg: '450px' }}
        />
      </Box>
    </Box>
  );
};

export default BookBanner;
