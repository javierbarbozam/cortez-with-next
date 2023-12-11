import { AppCard } from '@/app/components/Card/AppCard'
import {books} from '../../utils/config'
import { Container, Heading } from '@chakra-ui/react'
import { MediaCard } from '@/app/components/Card/MediaCard'

export async function generateStaticParams() {
  const paths = books.map((item) => item.id)

  return paths.map((item) => ({
    bookId: item
  }))
}

export default function Page({ params }) {
  const { bookId } = params
  const data = books.find((item) => item.id === bookId)
  return (
    <main>
      <Container centerContent>
        <Heading>{data.title}</Heading>
        <MediaCard 
          media={data.media}
          title={data.subtitle}
          info={data.description}
          price={data.price}
          cta={data.cta}
        />
        <AppCard />
      </Container>
    </main>
  )
}

