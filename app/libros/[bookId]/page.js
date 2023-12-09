import { AppCard } from '@/app/components/Card/AppCard'
import {books} from '../../utils/config'
import { Container } from '@chakra-ui/react'

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
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <AppCard />
      </Container>
    </main>
  )
}

