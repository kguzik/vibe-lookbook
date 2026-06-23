import type { Metadata } from 'next'
import { metadata as meta } from '@/content/metadata'

export const metadata: Metadata = meta.login

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
