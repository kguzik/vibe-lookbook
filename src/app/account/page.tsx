import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { SignOutButton } from '@/features/auth/SignOutButton'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { accountContent } from '@/content/account'
import { SmallHero } from '@/components/ui/SmallHero'

export default async function AccountPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  const name = user.user_metadata?.name ?? user.email
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
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-3">
              <h2 className="h4">{sections.credits.heading}</h2>
              <p className="text-sm text-[var(--color-subtle)]">
                {sections.credits.empty}
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="h4">{sections.lookbooks.heading}</h2>
              <p className="text-sm text-[var(--color-subtle)]">
                {sections.lookbooks.empty}
              </p>
            </div>
          </div>
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
