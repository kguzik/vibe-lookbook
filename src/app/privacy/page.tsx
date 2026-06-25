import type { Metadata } from 'next'
import { SmallHero } from '@/components/ui/SmallHero'
import { ContentList } from '@/components/ui/ContentList'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { privacyContent } from '@/content/privacy'
import { metadata as meta } from '@/content/metadata'
import { Button } from '@/components/ui/Button'
import { ChevronLeft } from '@/components/icons/ChevronLeft'

export const metadata: Metadata = meta.privacy

export default function PrivacyPage() {
  const { buttonLabel, hero, sections } = privacyContent

  return (
    <main>
      <Section
        disableTopMargin
        disableBottomMargin
        background="var(--color-surface-subtle)"
      >
        <Container size="md">
          <Button
            href="/"
            className="mb-6 pl-0 md:mb-8"
            variant="ghost"
            size="sm"
            iconLeft={<ChevronLeft />}
          >
            {buttonLabel}
          </Button>
          <SmallHero title={hero.title} subtitle={hero.subtitle} />
        </Container>
      </Section>
      <Section disableTopMargin>
        <Container size="md">
          <ContentList items={sections} />
        </Container>
      </Section>
    </main>
  )
}
