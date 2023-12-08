'use client'

import { Card, Heading, Grid, GridItem, Box } from '@chakra-ui/react';
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
  { icon: <Instagram {...iconProps} />, title: 'cortezamarillo_cr', link: 'https://www.instagram.com/cortezamarillo_cr/' },
  { icon: <PhoneIcon {...iconProps} />, title: '8838-1532', link: 'tel:88381532' },
  { icon: <EmailIcon {...iconProps} />, title: 'hola@cortezamarillo-cr.com', link: 'mailto:hola@cortezamarillo-cr.com' }
];

export default function Contact() {
  return (
    <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap='20px'>
      {socialMedia.map((network, index) => (
        <GridItem key={index}>
          <Link href={network.link}>
            <Card h={{base:'100px', md:'170px'}} justifyContent='center' align='center' gap={{base:'10px', md:'20px'}} p='20px'>
              <Box>{network.icon}</Box>
              <Heading fontSize={{ base: '16px', md: '20px' }}>{network.title}</Heading>
            </Card>
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
}
