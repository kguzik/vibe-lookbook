import type { Metadata } from 'next'
import { Hero } from '@/components/ui/Hero'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { notFoundContent } from '@/content/not-found'
import { metadata as meta } from '@/content/metadata'

export const metadata: Metadata = meta.notFound

export default function NotFound() {
  const { heading, accentWord, subtitle, button } = notFoundContent

  return (
    <Section>
      <Container size="lg">
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="font-display text-[12rem] leading-none font-bold text-[var(--color-border)]">
            404
          </p>
          <Hero
            heading={heading}
            accentWord={accentWord}
            subtitle={subtitle}
            primaryButton={button}
          />
        </div>
      </Container>
    </Section>
  )
}
