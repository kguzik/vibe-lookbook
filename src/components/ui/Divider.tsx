export const Divider = ({ label }: { label?: string }) => (
  <div className="my-5 flex items-center gap-3 lg:my-6">
    <div className="h-px flex-1 bg-[var(--color-border)]" />
    {label && (
      <>
        <span className="text-xs text-[var(--color-subtle)]">{label}</span>
        <div className="h-px flex-1 bg-[var(--color-border)]" />
      </>
    )}
  </div>
)
