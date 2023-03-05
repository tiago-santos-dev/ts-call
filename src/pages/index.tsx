import { Heading } from '@ignite-ui/react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <Heading as='h1'>Hello World</Heading>
}
