import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Hero } from '@/components/ui/Hero'
import { PhotoUpload } from '@/features/generate/PhotoUpload'
import { generateContent } from '@/content/generate'

export default function GeneratePage() {
  return (
    <main>
      <Section disableBottomMargin>
        <Container size="lg">
          <Hero
            heading={generateContent.heading}
            accentWord={generateContent.accentWord}
            subtitle={generateContent.subtitle}
          />
        </Container>
      </Section>

      <Section disableTopMargin spacing="xs">
        <Container size="sm">
          <PhotoUpload />
        </Container>
      </Section>
    </main>
  )
}
