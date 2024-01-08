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
  Select,
  Checkbox,
} from "@chakra-ui/react";
import { useState } from "react";

const margin = {
  mb: {
    base: "16px",
    sm: "24px",
  },
};

const formLabels = {
  name: "Nombre completo",
  email: "Correo electrónico",
  phone: "Número de teléfono",
  description: "Detalles de la compra",
  "address.city": "Nombre de ciudad",
  "address.line1": "Dirección",
  "address.line2": "Dirección exacta",
  "address.postalCode": "Código postal",
  "address.state": "Provincia",
  "shipping.address.state": "Provincia",
  "shipping.address.city": "Nombre de la ciudad",
  "shipping.address.line1": "Dirección",
  "shipping.address.line2": "Dirección exacta",
  "shipping.address.postalCode": "Código postal",
  "shipping.name": "Nombre de quien recibe el pedido",
  "shipping.phone": "Teléfono de quien recibe el pedido",
};

const FormTitle = ({ title }) => (
  <Box {...margin}>
    <Heading align="center" size="md" textAlign="left">
      {title}
    </Heading>
  </Box>
);

const FormInput = ({ name, placeholder, autoComplete }) => (
  <Box {...margin}>
    <FormLabel htmlFor={name}>{formLabels[name]}</FormLabel>
    <Input
      type="text"
      id={name}
      name={name}
      bgColor="#E1ECEC"
      placeholder={placeholder}
      autoComplete={autoComplete}
    ></Input>
  </Box>
);

const FormTextArea = ({ name, placeholder }) => (
  <Box {...margin}>
    <FormLabel htmlFor={name}>{formLabels[name]}</FormLabel>
    <Textarea
      id={name}
      name={name}
      bgColor="#E1ECEC"
      placeholder={placeholder}
    ></Textarea>
  </Box>
);

const FormSelect = ({ name, placeholder, options }) => (
  <Box {...margin}>
    <FormLabel htmlFor={name}>{formLabels[name]}</FormLabel>
    <Select
      name={name}
      id={name}
      bgColor="#E1ECEC"
      placeholder={placeholder}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Select>
  </Box>
);

export const CheckoutForm = ({ action }) => {
  const [showShippingFields, setShowShippingFields] = useState(false);

  const handleCheckboxChange = () => {
    setShowShippingFields(!showShippingFields);
  };

  return (
    <Card w="100%" p={{ base: "24px", md: "40px" }}>
      <Box w={{ sm: "400px", md: "570px" }} m="auto">
        <form action={action}>
          <FormControl mt={{ base: "30px", md: "40px" }} isRequired>
            <Box {...margin}>
              <Heading align="center" size="md" textAlign="left">
                Datos personales
              </Heading>
            </Box>
            <FormInput
              name="name"
              placeholder="Escribí tu nombre"
              autoComplete="name"
            />
            <FormInput
              name="email"
              placeholder="Escribí tu correo electrónico"
              autoComplete="email"
            />
            <FormInput
              name="phone"
              placeholder="Escribí tu número telefónico"
              autoComplete="phone"
            />
            <FormControl>
              <FormTextArea
                name="description"
                placeholder="Agregá información relevante sobre el pedido"
              />
            </FormControl>
            <FormTitle title="Dirección" />
            <FormInput
              name="address.city"
              placeholder="Nombre de ciudad o barrio."
            />
            <FormInput
              name="address.line1"
              placeholder="Calle, nombre de empresa u otro."
            />
            <FormInput
              name="address.line2"
              placeholder="Número de casa u otras señas."
            />
            <FormInput name="address.postalCode" placeholder="Ej: 11104" />
            <FormSelect
              name="address.state"
              placeholder="Seleccioná una provincia"
              options={[
                "San José",
                "Alajuela",
                "Limón",
                "Guanacaste",
                "Cartago",
                "Heredia",
                "Puntarenas",
              ]}
            />
            <FormControl>
              <Box {...margin}>
                <Checkbox
                  onChange={handleCheckboxChange}
                  isChecked={showShippingFields}
                >
                  Mi dirección de envío es diferente a mi residencia
                </Checkbox>
              </Box>
            </FormControl>
            {showShippingFields && (
              <Box {...margin}>
                <FormTitle title="Datos de envío" />
                <FormControl>
                  <FormInput
                    name="shipping.name"
                    placeholder="Escribí tu nombre"
                    autoComplete="name"
                  />
                  <FormInput
                    name="shipping.phone"
                    placeholder="Escribí tu número telefónico"
                    autoComplete="phone"
                  />
                </FormControl>
                <FormSelect
                  name="shipping.address.state"
                  placeholder="Seleccioná una provincia"
                  options={[
                    "San José",
                    "Alajuela",
                    "Limón",
                    "Guanacaste",
                    "Cartago",
                    "Heredia",
                    "Puntarenas",
                  ]}
                />
                <FormInput
                  name="shipping.address.city"
                  placeholder="Nombre de ciudad o barrio"
                />
                <FormInput
                  name="shipping.address.line1"
                  placeholder="Calle, nombre de la empresa u otro."
                />
                <FormInput
                  name="shipping.address.line2"
                  placeholder="Número de casa u otras señas."
                />
                <FormInput
                  name="shipping.address.postalCode"
                  placeholder="Ej: 11104"
                />
              </Box>
            )}
            <Flex justifyContent="center">
              <Button type="submit" mt="16px">
                Confirmar datos
              </Button>
            </Flex>
          </FormControl>
        </form>
      </Box>
    </Card>
  );
};
