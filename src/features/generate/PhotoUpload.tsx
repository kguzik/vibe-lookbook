'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { generateContent } from '@/content/generate'

const { photoUpload } = generateContent

type PhotoUploadProps = {
  onPhotoChange?: (file: File | null) => void
}

export const PhotoUpload = ({ onPhotoChange }: PhotoUploadProps) => {
  const [preview, setPreview] = useState<string | null>(null)
  const [dragging, setDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const cameraInputRef = useRef<HTMLInputElement>(null)

  const handleFile = (file: File | null) => {
    if (!file) return
    const url = URL.createObjectURL(file)
    setPreview(url)
    onPhotoChange?.(file)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFile(e.target.files?.[0] ?? null)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragging(false)
    handleFile(e.dataTransfer.files?.[0] ?? null)
  }

  const handleRemove = () => {
    setPreview(null)
    onPhotoChange?.(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
    if (cameraInputRef.current) cameraInputRef.current.value = ''
  }

  return (
    <div className="space-y-5">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleInputChange}
      />
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="user"
        className="hidden"
        onChange={handleInputChange}
      />

      {preview ? (
        <div className="flex flex-col items-center justify-center space-y-5">
          <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl">
            <Image
              src={preview}
              alt={photoUpload.preview}
              fill
              className="object-cover"
            />
          </div>
          <Button variant="secondary" size="md" onClick={handleRemove}>
            {photoUpload.changeButton}
          </Button>
        </div>
      ) : (
        <div className="space-y-3">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => {
              e.preventDefault()
              setDragging(true)
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={handleDrop}
            className={[
              'flex w-full cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed p-12 transition-colors',
              dragging
                ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/5'
                : 'border-[var(--color-border)] hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-raised)]',
            ].join(' ')}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-[var(--color-subtle)]"
            >
              <path
                d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <polyline
                points="17 8 12 3 7 8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line x1="12" y1="3" x2="12" y2="15" strokeLinecap="round" />
            </svg>
            <p className="text-sm text-[var(--color-subtle)]">
              {photoUpload.dropzone}
            </p>
          </button>

          <Button
            variant="secondary"
            size="md"
            onClick={() => cameraInputRef.current?.click()}
          >
            {photoUpload.cameraButton}
          </Button>
        </div>
      )}
    </div>
  )
}
