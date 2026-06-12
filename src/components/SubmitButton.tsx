'use client'

import { useFormStatus } from 'react-dom'

interface SubmitButtonProps {
  label: string
  pendingLabel?: string
  className?: string
  isPending?: boolean
}

export default function SubmitButton({
  label,
  pendingLabel = 'Sending…',
  className = '',
  isPending: externalPending,
}: SubmitButtonProps) {
  const { pending: formPending } = useFormStatus()
  const pending = externalPending ?? formPending
  return (
    <button
      type="submit"
      disabled={pending}
      className={`disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer ${className}`}
    >
      {pending ? pendingLabel : label}
    </button>
  )
}
