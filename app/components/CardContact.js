'use client'

import { Card, Heading, Grid, GridItem, Box, Text } from '@chakra-ui/react';
import Link from 'next/link'
import { Instagram } from './SocialMediaIcon';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';

const iconProps = {
  w: {
    base: '32px',
    md: '42px'
  },
  h:{
    base: '32px',
    md: '42px'
  },
  color: '#394D51',
}

const socialMedia = [
  { icon: <Instagram {...iconProps} />, title: 'Instagram', link: 'https://www.instagram.com/cortezamarillo_cr/', contact:'cortezamarillo_cr' },
  { icon: <PhoneIcon {...iconProps} />, title: 'Teléfono', link: 'tel:88381532', contact:'8838-1532' },
  { icon: <EmailIcon {...iconProps} />, title: 'Correo electrónico', link: 'mailto:hola@cortezamarillo-cr.com', contact:'hola@cortezamarillo-cr.com'}
];

export default function Contact() {
  return (
    <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap='20px'>
      {socialMedia.map((network, index) => (
        <GridItem key={index}>
          <Link href={network.link}>
            <Card h={{base:'150px', md:'200px'}} justifyContent='center' align='center' gap={{base:'10px', md:'20px'}} p='20px'>
              <Heading
                fontWeight='700'
                fontSize={["md", "md", "lg"]}
                color='#394D51'
              >
                {network.title}
              </Heading>
              <Box>{network.icon}</Box>
              <Text textAlign="center" fontSize={["md", "md", "lg"]}>{network.contact}</Text>
            </Card>
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
}
