import { 
  Card, 
  CardBody, 
  CardHeader, 
  Heading, 
  Text, 
  Stack, 
  StackDivider, 
  Box 
} from '@chakra-ui/react';

export function EmailTemplate(name, lastName, email, message) {
  return (
    <Card>
      <CardHeader>
        <Heading size='md'>Correo de cliente</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Nombre
            </Heading>
            <Text pt='2' fontSize='sm'>
              {name}
            </Text>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Apellidos
            </Heading>
            <Text pt='2' fontSize='sm'>
              {lastName}
            </Text>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Correo
            </Heading>
            <Text pt='2' fontSize='sm'>
              {email}
            </Text>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Message
            </Heading>
            <Text pt='2' fontSize='sm'>
              {message}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  )
}