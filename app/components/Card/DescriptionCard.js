import { Card, Text, Heading, CardBody, CardHeader} from "@chakra-ui/react";

export const DescriptionCard = ({title, description}) => {
  return (
    <Card size="sm">
      <CardBody>
        <CardHeader>
          <Heading size={["md", "md", "lg"]} variant="descriptionCard">
            {title}
          </Heading>
        </CardHeader>
        <Text fontSize={["md", "md", "xl"]}>
          {description}
        </Text>
      </CardBody>
    </Card>
  );
};
