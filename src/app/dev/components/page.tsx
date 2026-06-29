import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { SmallHero } from '@/components/ui/SmallHero'
import { Hero } from '@/components/ui/Hero'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Divider } from '@/components/ui/Divider'
import { ErrorMessage } from '@/components/ui/ErrorMessage'
import { ContentList } from '@/components/ui/ContentList'
import { TwoColumnContent } from '@/components/ui/TwoColumnContent'
import { componentsContent } from '@/content/components'

const { sections } = componentsContent

const Block = ({
  heading,
  children,
}: {
  heading: string
  children: React.ReactNode
}) => (
  <div className="space-y-6">
    <h2 className="h4 border-b border-[var(--color-border)] pb-3">{heading}</h2>
    {children}
  </div>
)

const Row = ({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) => (
  <div className="space-y-2">
    <p className="label">{label}</p>
    <div className="flex flex-wrap items-center gap-3">{children}</div>
  </div>
)

export default function ComponentsPage() {
  if (process.env.NODE_ENV === 'production') return null

  const {
    buttons,
    inputs,
    divider,
    errorMessage,
    hero,
    smallHero,
    contentList,
    twoColumnContent,
    typography,
  } = sections

  return (
    <>
      <Section
        background="var(--color-surface-subtle)"
        disableTopMargin
        disableBottomMargin
      >
        <Container size="lg">
          <SmallHero
            title={componentsContent.title}
            subtitle={componentsContent.subtitle}
          />
        </Container>
      </Section>

      <Section>
        <Container size="lg">
          <div className="space-y-16">
            <Block heading={hero.heading}>
              <Hero
                heading={hero.title}
                accentWord={hero.accentWord}
                subtitle={hero.subtitle}
                primaryButton={hero.primaryButton}
                secondaryButton={hero.secondaryButton}
              />
            </Block>

            <Block heading={smallHero.heading}>
              <SmallHero
                title={smallHero.title}
                subtitle={smallHero.subtitle}
              />
            </Block>

            <Block heading={buttons.heading}>
              <Row label={buttons.variants.primary}>
                <Button size="sm" variant="primary">
                  {buttons.sizes.sm}
                </Button>
                <Button size="md" variant="primary">
                  {buttons.sizes.md}
                </Button>
                <Button size="lg" variant="primary">
                  {buttons.sizes.lg}
                </Button>
              </Row>
              <Row label={buttons.variants.secondary}>
                <Button size="sm" variant="secondary">
                  {buttons.sizes.sm}
                </Button>
                <Button size="md" variant="secondary">
                  {buttons.sizes.md}
                </Button>
                <Button size="lg" variant="secondary">
                  {buttons.sizes.lg}
                </Button>
              </Row>
              <Row label={buttons.variants.ghost}>
                <Button size="sm" variant="ghost">
                  {buttons.sizes.sm}
                </Button>
                <Button size="md" variant="ghost">
                  {buttons.sizes.md}
                </Button>
                <Button size="lg" variant="ghost">
                  {buttons.sizes.lg}
                </Button>
              </Row>
            </Block>

            <Block heading={inputs.heading}>
              <div className="grid gap-6 md:grid-cols-3">
                <Input
                  label={inputs.default.label}
                  placeholder={inputs.default.placeholder}
                />
                <Input
                  label={inputs.withError.label}
                  placeholder={inputs.withError.placeholder}
                  error={inputs.withError.error}
                />
                <Input
                  label={inputs.withHint.label}
                  placeholder={inputs.withHint.placeholder}
                  hint={inputs.withHint.hint}
                />
              </div>
            </Block>

            <Block heading={divider.heading}>
              <div className="space-y-2">
                <p className="label">With label</p>
                <Divider label={divider.withLabel} />
              </div>
              <div className="space-y-2">
                <p className="label">Without label</p>
                <Divider />
              </div>
            </Block>

            <Block heading={errorMessage.heading}>
              <ErrorMessage message={errorMessage.example} />
            </Block>

            <Block heading={contentList.heading}>
              <ContentList items={contentList.items} />
            </Block>

            <Block heading={twoColumnContent.heading}>
              <TwoColumnContent columns={twoColumnContent.columns} />
            </Block>

            <Block heading={typography.heading}>
              <h1>{typography.h1}</h1>
              <h2>{typography.h2}</h2>
              <h3>{typography.h3}</h3>
              <h4>{typography.h4}</h4>
              <h5>{typography.h5}</h5>
              <h6>{typography.h6}</h6>
              <p>{typography.paragraph}</p>
              <p className="label">{typography.label}</p>
              <p className="label-accent">{typography.labelAccent}</p>
              <h2>
                Heading with <span className="accent-word">accent</span>
              </h2>
            </Block>
          </div>
        </Container>
      </Section>
    </>
  )
}
