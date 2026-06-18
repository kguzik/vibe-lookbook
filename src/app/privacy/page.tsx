import { SmallHero } from '@/components/ui/SmallHero'
import { ContentList } from '@/components/ui/ContentList'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { privacyContent } from '@/content/privacy'

export default function PrivacyPage() {
  const { hero, sections } = privacyContent

  return (
    <Section>
      <Container size="md">
        <SmallHero title={hero.title} subtitle={hero.subtitle} />
        <ContentList items={sections} />
      </Container>
    </Section>
  )
}
