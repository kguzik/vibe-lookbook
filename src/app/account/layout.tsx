import type { Metadata } from 'next'
import { metadata as meta } from '@/content/metadata'

export const metadata: Metadata = meta.account

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
