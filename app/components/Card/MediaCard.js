import {
  Card,
  CardBody,
  Text,
  Flex,
  CardHeader,
  Heading,
  Box,
  CardFooter,
} from "@chakra-ui/react";

export const MediaCard = ({ direction = "row", media, title, info, cta }) => {
  return (
    <Card
      variant="mediaCard"
      direction={{ base: "column", sm: direction }}
      h={{ sm: "300px", md: "350px" }}
    >
      <Box height={["50%", "100%"]} width={["100%", "50%"]}>
        {media}
      </Box>
      <Box
        mt={{base: '15px', sm: '0'}}
        width={["100%", "50%"]}
        display="flex"
        gap="4"
        flexDir="column"
        alignItems="space-between"
      >
        <CardBody>
          <CardHeader>
            <Heading variant="mediaCard" size={["md", "md", "lg"]}>
              {title}
            </Heading>
          </CardHeader>
          <Text fontSize={["md", "md", "xl"]}>{info}</Text>
        </CardBody>
        <CardFooter>
          {cta
            ? cta.map((element, index) => <Flex key={index}>{element}</Flex>)
            : null}
        </CardFooter>
      </Box>
    </Card>
  );
};
