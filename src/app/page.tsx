import { Container } from '@/components/ui/Container'
import { TextHero } from '@/components/ui/TextHero'

export default function Home() {
  return (
    <main>
      <Container size="full">
        <TextHero
          heading="Your Style,"
          accentWord="Reimagined"
          subtitle="Upload a selfie, pick a vibe, and get AI-styled outfits you can shop - all in a few taps."
        />
      </Container>
    </main>
  )
}
