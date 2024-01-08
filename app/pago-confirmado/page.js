import {
  Card,
  CardBody,
  Container,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import check from "../../public/svg/payment-check.svg";

export default function ConfirmPayment() {
  return (
    <Container>
      <Card >
        <CardBody>
          <Heading>¡Muchas gracias!</Heading>
          <Flex width={{sm: "30%", md: "50%", lg: "40%"}} margin="40px auto">
            <Image
              style={{
                borderRadius: "10px",
                height: "100%",
                width: "100%",
                objectFit: "contain",
                objectPosition: "center",
              }}
              alt=""
              src={check}
            ></Image>
          </Flex>
          <Text fontFamily="kg_blank" color="primary" textAlign="center" fontSize={{md:"3xl"}} fontWeight="bold">
            ¡Su pago se ha realizado de manera exitosa!
          </Text>
        </CardBody>
      </Card>
    </Container>
  );
}
