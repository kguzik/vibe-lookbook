import { Container } from '@/components/ui/Container'
import { TextHero } from '@/components/ui/TextHero'
import { Section } from '@/components/ui/Section'

export default function Home() {
  return (
    <main>
      <Section disableTopMargin>
        <Container size="full">
          <TextHero
            heading="Your Style,"
            accentWord="Reimagined"
            subtitle="Upload a selfie, pick a vibe, and get AI-styled outfits you can shop - all in a few taps."
          />
        </Container>
      </Section>
    </main>
  )
}
