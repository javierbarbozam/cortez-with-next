'use client'

import { Card, Heading, Grid, GridItem, Box } from '@chakra-ui/react';
import Link from 'next/link'
import { Instagram, Facebook } from './instagramIcon';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';

const socialMedia = [
  { icon: <Instagram />, title: 'cortezamarillo_cr', link: 'https://www.instagram.com/cortezamarillo_cr/' },
  { icon: <Facebook />, title: 'CortezAmarillo', link: '' },
  { icon: <PhoneIcon w='42px' h='42px'/>, title: '8838-1532', link: 'tel:88381532' },
  { icon: <EmailIcon w='42px' h='42px'/>, title: 'hola@cortezamarillo-cr.com', link: 'mailto:hola@cortezamarillo-cr.com' }
];

export default function Contact() {
  return (
    <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: '', md: 'repeat(2, 1fr)' }} gap='30px' maxW='1020px' m='20px' w={{ base: '281px', sm: '320px', md: '358px' }}>
      {socialMedia.map((network, index) => (
        <GridItem key={index}>
          <Link href={network.link}>
            <Card w={{ base: '281px', sm: '320px', md: '358px' }} h='177px' p='30px' flexDirection='column' align='center' gap='30px'>
              <Box>{network.icon}</Box>
              <Heading fontSize='20px'>{network.title}</Heading>
            </Card>
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
}
