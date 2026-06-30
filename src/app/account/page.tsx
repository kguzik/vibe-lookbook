import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { SignOutButton } from '@/features/auth/SignOutButton'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { accountContent } from '@/content/account'
import { SmallHero } from '@/components/ui/SmallHero'
import { TwoColumnContent } from '@/components/ui/TwoColumnContent'

export default async function AccountPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  const name = user.user_metadata?.name ?? user.email ?? 'user'
  const email = user.email ?? '-'
  const { sections } = accountContent

  return (
    <main>
      <Section
        background="var(--color-surface-subtle)"
        disableTopMargin
        disableBottomMargin
      >
        <Container size="lg">
          <SmallHero
            title={accountContent.greeting(name)}
            subtitle={accountContent.subtitle}
          />
        </Container>
      </Section>
      <Section>
        <Container size="lg">
          <TwoColumnContent
            columns={[
              {
                heading: sections.credits.heading,
                body: sections.credits.empty,
              },
              {
                heading: sections.email.heading,
                body: email,
              },
            ]}
          />
        </Container>
      </Section>
      <Section disableTopMargin disableBottomMargin spacing="sm">
        <Container size="lg">
          <SignOutButton />
        </Container>
      </Section>
    </main>
  )
}
