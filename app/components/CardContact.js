import { Card, Box, Heading, Grid, GridItem } from '@chakra-ui/react';
import Link from 'next/link'

const socialMedia = [
  { icon: '', title: 'cortezamarillo_cr', link: 'https://www.instagram.com/cortezamarillo_cr/' },
  { icon: '', title: 'CortezAmarillo', link: '' },
  { icon: '', title: '8838-1532', link: '' },
  { icon: '', title: 'CortezAmarillo', link: 'mailto:hola@cortezamarillo-cr.com' }
];

export default function Contact() {
  return (
    <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: '', md: 'repeat(2, 1fr)' }} gap='30px' maxW='1020px' m='20px'>
      {socialMedia.map((network, index) => (
        <GridItem key={index}>
          <Link href={network.link}>
            <Card w={{ base: '281px', sm: '320px', md: '358px' }} h='177px' p='30px'>
              {/* <Image src={network.icon} alt='' /> */}
              <Heading fontSize='20px' textAlign='center'>{network.title}</Heading>
            </Card>
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
}
