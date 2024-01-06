"use client";

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Heading,
  Card,
  Flex,
  Box,
  Text
} from "@chakra-ui/react";
import { useState } from "react";

const margin = {
  mb: {
    base: "16px",
    sm: "24px",
  },
};

const formFields = [
  { name: "name", type: "text", label: "Nombre"},
  { name: "lastName", type: "text", label: "Apellidos"},
  { name: "email", type: "email", label: "Correo" },
  { name: "number", type: "number", label: "Número" },
  { name: "description", type: "textarea", label: "Descripción" },
  { name: "country", type: "text", label: "País" },
  { name: "city", type: "text", label: "Provincia" },
  { name: "state", type: "text", label: "Cantón" },
  { name: "postalCode", type: "text", label: "Código postal" },
  { name: "products", type: "number", label: "Cantidad de productos" },
];

export const CheckoutForm = () => {
  const initialState = Object.fromEntries(formFields.map(nameField => [nameField.name, '']));
  const [orderData, setOrderData] = useState(initialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setOrderData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await "onvo";
      setOrderData(initialState);
    } catch (error) {
      console.error("Error al enviar el formulario", error);
    }
  };
  
  return (
    <Card w="100%" p={{ base: "24px", md: "40px" }}>
      <Box w={{ sm: "400px", md: "570px" }} m="auto">
        <Heading align="center">Datos de envío</Heading>
        <FormControl
          onSubmit={handleSubmit}
          as="form"
          mt={{ base: "30px", md: "40px" }}
          isRequired
        >
          {formFields.map((field) => (
            <Box key={field.name} {...margin}>
              <FormLabel htmlFor={field.name}>{field.label}</FormLabel>
              {field.type === "textarea" ? (
                <Textarea
                  id={field.name}
                  bgColor="#E1ECEC"
                  name={field.name}
                  value={orderData[field.name]}
                  onChange={handleInputChange}
                />
              ) : (
                <Input
                  id={field.name}
                  type={field.type}
                  bgColor="#E1ECEC"
                  name={field.name}
                  value={orderData[field.name]}
                  onChange={handleInputChange}
                />
              )}
            </Box>
          ))}
          <Flex justifyContent="center">
            <Button type="submit" mt="16px">
              Confirmar datos
            </Button>
          </Flex>
        </FormControl>
      </Box>
    </Card>
  );
};
