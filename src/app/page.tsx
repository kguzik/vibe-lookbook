import { Container } from '@/components/ui/Container'
import { Hero } from '@/components/ui/Hero'
import { Section } from '@/components/ui/Section'

export default function Home() {
  return (
    <main>
      <Section disableTopMargin>
        <Container size="full">
          <Hero
            heading="Your Style,"
            accentWord="Reimagined"
            subtitle="Upload a selfie, pick a vibe, and get AI-styled outfits you can shop - all in a few taps."
            primaryButton={{
              label: 'Get Started',
              size: 'lg',
              href: '/generate',
            }}
          />
        </Container>
      </Section>
    </main>
  )
}
