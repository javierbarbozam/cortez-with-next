'use client'

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
import { useState } from 'react';
import { sendContactForm } from '@/lib/api';

export default function Form() {
  const initialState = {
    name: '',
    lastName: '',
    email: '',
    message: '',
  }

  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await sendContactForm(formData);
      setFormData(initialState);
    } catch (error) {
      console.error('Error al enviar el formulario', error);
    }
  };
  return (
    <Card w={{ base: '304px', sm: '570px', md: '834px' }} p={{ base: '24px', sm: '', md: '40px' }}>
      <Box w={{ sm: '400px', md: '570px' }} m='auto'>
        <Heading textAlign='center'>Preguntas, Comentarios, ¡Nos Encantaría Escucharte!</Heading>
        <FormControl onSubmit={handleSubmit} as='form' mt={{ base: '30px', md: '40px' }} isRequired>
          <Flex flexDirection={{ base: 'column', sm: '', md: 'row' }} gap={{ sm: '0', md: '32px' }}>
            <Box w={{ sm: '', md: '50%' }} mb={{ base: '16px', sm: '24px' }}>
              <FormLabel htmlFor='nombre'>Nombre</FormLabel>
              <Input id='nombre' type='text' bgColor='#E1ECEC' name='name' value={formData.name} onChange={handleInputChange} />
            </Box>
            <Box w={{ sm: '', md: '50%' }} mb={{ base: '16px', sm: '24px' }}>
              <FormLabel htmlFor='lastname'>Apellidos</FormLabel>
              <Input id='lastname' type='text' bgColor='#E1ECEC' name='lastName' value={formData.lastName} onChange={handleInputChange} />
            </Box>
          </Flex>
          <FormLabel htmlFor='correo'>Email</FormLabel>
          <Input id='correo' type='email' bgColor='#E1ECEC' mb={{ base: '16px', sm: '24px' }} name='email' value={formData.email} onChange={handleInputChange}/>
          <FormLabel htmlFor='message'>Mensaje</FormLabel>
          <Textarea id='message' bgColor='#E1ECEC' name='message' value={formData.message} onChange={handleInputChange} ></Textarea>
          <Flex justifyContent='center'>
            <Button type='submit' mt='16px'>Enviar mensaje</Button>
          </Flex>
        </FormControl>
      </Box>
    </Card>
  )
}