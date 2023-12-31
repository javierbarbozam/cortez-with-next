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

const RowCard = ({ direction, media, title, info, price, cta }) => (
  <Card variant="mediaCard" direction={{ base: "column", sm: direction }}>
    <Box width={{ base: "100%", md: "50%" }} height="auto">
      {media}
    </Box>
    <Box
      display="flex"
      gap="4"
      flexDir="column"
      alignItems="space-between"
      width={{ base: "100%", md: "50%" }}
    >
      <CardBody>
        <CardHeader>
          <Heading variant="mediaCard" size={["md", "md", "lg"]}>
            {title}
          </Heading>
        </CardHeader>
        <Text fontSize={["md", "md", "xl"]}>{info}</Text>
        {price ? <Text fontFamily="kg_blank" fontSize={["md", "md", "xl"]} pt='15px'>{price}</Text> : null}
      </CardBody>
      {cta ? <CardFooter>{cta.map((element) => element)}</CardFooter> : null}
    </Box>
  </Card>
);

const ColumnCard = ({ media, title, info, cta }) => (
  <Card variant="columnCard">
    <Box width="100%" height={{ base: "150px", md: "250px" }}>
      {media}
    </Box>
    <Box display="flex" gap="4" flexDir="column" alignItems="space-between">
      <CardBody>
        <CardHeader>
          <Heading variant="mediaCard" size={["md", "md", "lg"]}>
            {title}
          </Heading>
        </CardHeader>
        <Text fontSize={["md", "md", "xl"]}>{info}</Text>
      </CardBody>
      {cta ? (
        <CardFooter>
          {cta.map((index, element) => (
            <Flex key={index}>{element}</Flex>
          ))}
        </CardFooter>
      ) : null}
    </Box>
  </Card>
);

export const MediaCard = ({ direction = "row", media, title, info, price, cta }) =>
  direction !== "column" ? (
    <RowCard
      direction={direction}
      media={media}
      title={title}
      info={info}
      price={price}
      cta={cta}
    />
  ) : (
    <ColumnCard media={media} title={title} info={info} cta={cta} />
  );
