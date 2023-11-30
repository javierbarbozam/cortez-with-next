import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Heading,
  Card,
  Flex,
  Box
} from '@chakra-ui/react';

export default function Form() {
  return (
    <Card w={{ base: '304px', sm: '570px', md: '834px' }} p={{ base: '24px', sm: '', md: '40px' }}>
      <Box w={{sm:'400px', md: '570px' }} m='auto'>
        <Heading textAlign='center'>Preguntas, Comentarios, ¡Nos Encantaría Escucharte!</Heading>
        <FormControl as='form' mt={{base:'30px', md:'40px'}}>
          <Flex flexDirection={{ base: 'column', sm: '', md: 'row' }} gap={{ sm: '0', md: '32px' }}>
            <Box w={{ sm: '', md: '50%' }} mb={{base:'16px', sm:'24px'}}>
              <FormLabel htmlFor='nombre'>Nombre</FormLabel>
              <Input id='nombre' type='text' bgColor='#E1ECEC' />
            </Box>
            <Box w={{ sm: '', md: '50%' }} mb={{base:'16px', sm:'24px'}}>
              <FormLabel htmlFor='lastname'>Apellidos</FormLabel>
              <Input id='lastname' type='text' bgColor='#E1ECEC' />
            </Box>
          </Flex>
          <FormLabel htmlFor='correo'>Email</FormLabel>
          <Input id='correo' type='email' bgColor='#E1ECEC' mb={{base:'16px', sm:'24px'}}/>
          <FormLabel htmlFor='message'>Mensaje</FormLabel>
          <Textarea id='message' bgColor='#E1ECEC' ></Textarea>
          <Flex justifyContent='center'>
            <Button type='submit' mt='16px'>Enviar mensaje</Button>
          </Flex>
        </FormControl>
      </Box>
    </Card>
  )
}