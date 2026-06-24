import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { SignOutButton } from '@/features/auth/SignOutButton'

export default async function AccountPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  const name = user.user_metadata?.name ?? user.email

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-4">
      <h1>Hi, {name}</h1>
      <SignOutButton />
    </main>
  )
}
