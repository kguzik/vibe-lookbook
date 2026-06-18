import { Container } from '@/components/ui/Container'
import { Hero } from '@/components/ui/Hero'
import { Section } from '@/components/ui/Section'
import { Sparkles } from '@/components/icons/Sparkles'
import { homeData } from '@/content/home'

export default function Home() {
  const { hero } = homeData

  return (
    <main>
      <Section disableTopMargin>
        <Container size="full">
          <Hero
            heading={hero.heading}
            accentWord={hero.accentWord}
            subtitle={hero.subtitle}
            primaryButton={{
              ...hero.primaryButton,
              size: 'lg',
              iconLeft: <Sparkles />,
            }}
          />
        </Container>
      </Section>
    </main>
  )
}
