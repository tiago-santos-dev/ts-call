import previewImage from '@/assets/app-preview.png'
import maskImage from '@/assets/mask.png'
import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'
import { Container, HeadingContainer, Hero, Preview } from './styles'

export default function Home() {
  return (
    <Container>
      <Hero>
        <HeadingContainer>
          <Heading as='h1' size="4xl">Agendamento descomplicado </Heading>
          <Text size="xl">
            Conecte seu calendário e permita que as pessoas marquem agendamentos
            no seu tempo livre.
          </Text>
        </HeadingContainer>
        <Image
          className='mask-image'
          src={maskImage}
          height={400}
          priority
          alt='Imagem de fundo com grade serrilhada'
        />
      </Hero>
      <Preview>
        <Image
          src={previewImage}
          height={400}
          quality={100}
          priority
          alt='Calendário simbolizando aplicação em funcionamento'
        />
      </Preview>
    </Container>
  )
}
