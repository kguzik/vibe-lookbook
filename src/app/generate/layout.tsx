import type { Metadata } from 'next'
import { metadata as meta } from '@/content/metadata'

export const metadata: Metadata = meta.generate

export default function GenerateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
