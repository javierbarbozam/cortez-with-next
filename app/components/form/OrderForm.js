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

const margin = {
  mb: {
    base:'16px', 
    sm: '24px' 
  }
}

export default function OrderForm() {
  const initialState = {
    name: '',
    lastName: '',
    email: '',
    number: '',
    address: '',
    product: '',
    description: '',
  }

  const [orderData, setOrderData] = useState(initialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setOrderData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await 'onvo';
      setOrderData(initialState);
    } catch (error) {
      console.error('Error al enviar el formulario', error);
    }
  };
  return (
    <Card w='100%' p={{ base: '24px', md: '40px' }}>
      <Box w={{ sm: '400px', md: '570px' }} m='auto'>
        <Heading align='center'>Datos de envío</Heading>
        <FormControl onSubmit={handleSubmit} as='form' mt={{ base: '30px', md: '40px' }} isRequired>
          <Flex flexDirection={{ base: 'column', md: 'row' }} gap={{md: '32px' }}>
            <Box w={{ md: '50%' }} {...margin}>
              <FormLabel htmlFor='name'>Nombre</FormLabel>
              <Input 
                id='name' 
                type='text' 
                bgColor='#E1ECEC' 
                name='name' 
                value={orderData.name} 
                onChange={handleInputChange} 
              />
            </Box>
            <Box w={{ md: '50%' }} {...margin}>
              <FormLabel htmlFor='lastname'>Apellidos</FormLabel>
              <Input 
                id='lastname' 
                type='text' 
                bgColor='#E1ECEC' 
                name='lastName' 
                value={orderData.lastName }
                onChange={handleInputChange}
              />
            </Box>
          </Flex>
          <FormLabel htmlFor='email'>Correo</FormLabel>
          <Input 
            id='email' 
            type='email' 
            bgColor='#E1ECEC' 
            {...margin}
            name='email' 
            value={orderData.email}
            onChange={handleInputChange} 
          />
          <FormLabel htmlFor='number'>Numero</FormLabel>
          <Input 
            id='number' 
            type='number' 
            bgColor='#E1ECEC' 
            {...margin}
            name='number' 
            value={orderData.number}
            onChange={handleInputChange} 
          />
          <FormLabel htmlFor='address'>Dirección de envio</FormLabel>
          <Input 
            id='address' 
            type='text' 
            bgColor='#E1ECEC' 
            {...margin}
            name='address' 
            value={orderData.address}
            onChange={handleInputChange} 
          />
          <FormLabel htmlFor='products'>Cantidad de productos</FormLabel>
          <Input 
            id='products' 
            type='number' 
            bgColor='#E1ECEC' 
            {...margin}
            name='products' 
            value={orderData.product}
            onChange={handleInputChange} 
          />
          <FormLabel htmlFor='description'>Descripción</FormLabel>
          <Textarea 
            id='description' 
            bgColor='#E1ECEC' 
            name='description' 
            value={orderData.description}
            onChange={handleInputChange} 
          ></Textarea>
          <Flex justifyContent='center'>
            <Button type='submit' mt='16px'>Enviar mensaje</Button>
          </Flex>
        </FormControl>
      </Box>
    </Card>
  )
}