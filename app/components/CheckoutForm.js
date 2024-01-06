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
  Text,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";

const margin = {
  mb: {
    base: "16px",
    sm: "24px",
  },
};

export const CheckoutForm = ({ formData, onSubmit, handleChange }) => {
  return (
    <Card w="100%" p={{ base: "24px", md: "40px" }}>
      <Box w={{ sm: "400px", md: "570px" }} m="auto">
        <FormControl
          as="form"
          onSubmit={onSubmit}
          mt={{ base: "30px", md: "40px" }}
        >
          <Box {...margin}>
            <Heading align="center" size="md" textAlign="left">
              Datos personales
            </Heading>
          </Box>
          <Box {...margin}>
            <FormLabel htmlFor="name">Nombre completo</FormLabel>
            <Input
              type="text"
              id="name"
              name="name"
              bgColor="#E1ECEC"
              value={formData.name}
              onChange={handleChange}
              placeholder="Escribí tu nombre"
              autoComplete="name"
            ></Input>
          </Box>
          <Box {...margin}>
            <FormLabel htmlFor="email">Correo electrónico</FormLabel>
            <Input
              type="email"
              id="email"
              name="email"
              bgColor="#E1ECEC"
              value={formData.email}
              onChange={handleChange}
              placeholder="Escribí tu correo"
              autoComplete="email"
            ></Input>
          </Box>
          <Box {...margin}>
            <FormLabel htmlFor="phone">Número de teléfono</FormLabel>
            <Input
              type="text"
              id="phone"
              name="phone"
              bgColor="#E1ECEC"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Ej: +50680808080"
            ></Input>
          </Box>
          <Box {...margin}>
            <FormLabel htmlFor="description">Detalles de la compra</FormLabel>
            <Textarea
              id="description"
              name="description"
              bgColor="#E1ECEC"
              onChange={handleChange}
              value={formData.description}
            ></Textarea>
          </Box>
          <Box {...margin}>
            <Heading align="center" size="md" textAlign="left">
              Datos de envío
            </Heading>
          </Box>
          <Box {...margin}>
            <FormLabel htmlFor="address.city">Nombre de ciudad</FormLabel>
            <Input
              type="text"
              id="address.city"
              name="address.city"
              bgColor="#E1ECEC"
              value={formData.address.city}
              onChange={handleChange}
              placeholder="Nombre de ciudad o barrio"
            ></Input>
          </Box>
          <Box {...margin}>
            <FormLabel htmlFor="address.line1">Dirección</FormLabel>
            <Input
              type="text"
              id="address.line1"
              name="address.line1"
              bgColor="#E1ECEC"
              value={formData.address.line1}
              onChange={handleChange}
              placeholder="Calle, nombre de empresa u otro."
            ></Input>
          </Box>
          <Box {...margin}>
            <FormLabel htmlFor="address.line2">Dirección exacta</FormLabel>
            <Input
              type="text"
              id="address.line2"
              name="address.line2"
              bgColor="#E1ECEC"
              value={formData.address.line2}
              onChange={handleChange}
              placeholder="Número de casa u otras señas."
            ></Input>
          </Box>
          <Box {...margin}>
            <FormLabel htmlFor="address.postalCode">Código postal</FormLabel>
            <Input
              type="text"
              id="address.postalCode"
              name="address.postalCode"
              bgColor="#E1ECEC"
              value={formData.address.postalCode}
              onChange={handleChange}
              placeholder="Ej: 11104"
            ></Input>
          </Box>
          <Box {...margin}>
            <FormLabel htmlFor="address.state">Provincia</FormLabel>
            <Select
              name="address.state"
              id="address.state"
              bgColor="#E1ECEC"
              placeholder="Selecciona una provincia"
              value={formData.address.state}
              onChange={handleChange}
            >
              <option value="San José">San José</option>
              <option value="Alajuela">Alajuela</option>
              <option value="Limón">Limón</option>
              <option value="Guanacaste">Guanacaste</option>
              <option value="Cartago">Cartago</option>
              <option value="Heredia">Heredia</option>
              <option value="Puntarenas">Puntarenas</option>
            </Select>
          </Box>
          <Box {...margin}>
            <Heading align="center" size="md" textAlign="left">
              Address Shipping
            </Heading>
          </Box>
          <Box {...margin}>
            <FormLabel htmlFor="shipping.address.country">
              Shipping Address
            </FormLabel>
            <Input
              type="text"
              id="shipping.address.country"
              name="shipping.address.country"
              bgColor="#E1ECEC"
              value={formData.shipping.address.country}
              onChange={handleChange}
            ></Input>
          </Box>
          <Box {...margin}>
            <FormLabel htmlFor="shipping.address.line1">Line 1</FormLabel>
            <Input
              type="text"
              id="shipping.address.line1"
              name="shipping.address.line1"
              bgColor="#E1ECEC"
              value={formData.shipping.address.line1}
              onChange={handleChange}
            ></Input>
          </Box>
          <Box {...margin}>
            <FormLabel htmlFor="shipping.address.line2">Line 2</FormLabel>
            <Input
              type="text"
              id="shipping.address.line2"
              name="shipping.address.line2"
              bgColor="#E1ECEC"
              value={formData.shipping.address.line2}
              onChange={handleChange}
            ></Input>
          </Box>
          <Box {...margin}>
            <FormLabel htmlFor="shipping.address.postalCode">
              postalCode
            </FormLabel>
            <Input
              type="text"
              id="shipping.address.postalCode"
              name="shipping.address.postalCode"
              bgColor="#E1ECEC"
              value={formData.shipping.address.postalCode}
              onChange={handleChange}
            ></Input>
          </Box>
          <Box {...margin}>
            <FormLabel htmlFor="shipping.address.state">state</FormLabel>
            <Input
              type="text"
              id="shipping.address.state"
              name="shipping.address.state"
              bgColor="#E1ECEC"
              value={formData.shipping.address.state}
              onChange={handleChange}
            ></Input>
          </Box>
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
