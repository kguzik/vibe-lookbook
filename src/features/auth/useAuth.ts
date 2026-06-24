'use client'

import { useEffect, useState } from 'react'

import type { User } from '@supabase/supabase-js'
import { createClient } from '@/lib/supabase/client'

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const supabase = createClient()

    supabase.auth
      .getSession()
      .then(({ data: { session } }) => {
        setUser(session?.user ?? null)
      })
      .catch(() => {})
      .finally(() => setLoading(false))

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null)
        setLoading(false)
      },
    )

    return () => listener.subscription.unsubscribe()
  }, [])

  return { user, loading }
}
