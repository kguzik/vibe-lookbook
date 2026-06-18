import { SmallHero } from '@/components/ui/SmallHero'
import { ContentList } from '@/components/ui/ContentList'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { termsContent } from '@/content/terms'
import { Button } from '@/components/ui/Button'
import { ChevronLeft } from '@/components/icons/ChevronLeft'

export default function TermsPage() {
  const { buttonLabel, hero, sections } = termsContent

  return (
    <Section disableTopMargin>
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
        <ContentList items={sections} />
      </Container>
    </Section>
  )
}
