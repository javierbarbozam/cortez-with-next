import { Box, Link, Heading, Text, Image, Flex } from "@chakra-ui/react";
import NextLink from "next/link";
import { Container } from '@chakra-ui/react';
const BookBanner = () => {
  return (
    <Box position="relative">
      <Container>
        <Flex flexDir={{ base: "column", md: "row" }} align='center' justify='space-between'>
          <Box position="relative" zIndex="1" w={{base:'100%', md:'50%'}}>
            <Heading
              fontSize={{ base: "18px", sm: "16px", md: "22px", lg: "30px" }}
              mb="15px"
              pt={{ base: "5%", sm: "5%", md: "10%", lg: "5%" }}
              textAlign="left"
            >
              Abrí las páginas y descubrí el mundo mágico de la lectura!
            </Heading>
            <Text>
              Unimos la lectura tradicional con la innovación tecnológica de la realidad aumentada para hacer que el aprendizaje temprano sea emocionante. ¡Acompañanos en este viaje único!
            </Text>
            <Heading
              mt={{ base: "10px", sm: "20px", md: "30px", lg: "30px" }}
              fontSize={{ base: "14px", sm: "14px", md: "18px", lg: "20px" }}
              fontWeight="700"
              mb="15px"
              textAlign="left"
            >
              Ordénalo a tan solo: ₡21.000
            </Heading>
            <Link as={NextLink} variant="yellowBg" href="/libros/nos-conocemos">
              Miralo ahora
            </Link>
          </Box>
          <Box position="relative" zIndex="1" h={{base:"300px", sm:"350px"}} w={{base:'100%', sm:"80%", md:'50%'}}>
            <Image
              src="/images/book-crAnimals.png"
              alt=""
              position='absolute'
              top={{md:"70", lg:"10"}}
            />
          </Box>
        </Flex>
      </Container>
      <Box
        backgroundImage="url('/images/bg-banner.png')"
        bgSize="cover"
        zIndex="0"
        position="absolute"
        top="0"
        w="100%"
        h={{ base: "500px", sm: "420px", md: "400px", lg: "430px" }}
        opacity="0.2"
      />
    </Box>
  );
};

export default BookBanner;
