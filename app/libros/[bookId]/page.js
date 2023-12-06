import {books} from '../../utils/config'
import { Link } from '@chakra-ui/react'
import NextLink from 'next/link'

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
    <>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </>
  )
}

