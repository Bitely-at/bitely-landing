import * as React from 'react'
import { AlertCircle } from 'lucide-react'

import { cn } from '@/lib/utils'

/* Wraps one labelled control. Pass `error` and the field wires up
   aria-invalid / aria-describedby for you, so the message is announced
   instead of only being visible. */
function Field({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="field" className={cn('grid gap-2', className)} {...props} />
}

function FieldLabel({ className, children, optional, ...props }: React.ComponentProps<'label'> & { optional?: boolean }) {
  return (
    <label
      data-slot="field-label"
      className={cn('block text-sm font-medium text-foreground', className)}
      {...props}
    >
      {children}
      {optional && (
        <span className="ml-1 font-normal text-muted-foreground">(optional)</span>
      )}
    </label>
  )
}

function FieldHint({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot="field-hint"
      className={cn('text-sm leading-relaxed text-muted-foreground', className)}
      {...props}
    />
  )
}

function FieldError({ className, children, ...props }: React.ComponentProps<'p'>) {
  if (!children) return null

  return (
    <p
      data-slot="field-error"
      className={cn('flex items-start gap-1.5 text-sm text-destructive', className)}
      {...props}
    >
      <AlertCircle className="mt-0.5 size-3.5 shrink-0" strokeWidth={2} aria-hidden="true" />
      <span>{children}</span>
    </p>
  )
}

/** Ties a control to its error message: spread onto the input itself. */
export function fieldA11yProps(id: string, error?: string) {
  return {
    id,
    name: id,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? `${id}-error` : undefined,
  } as const
}

export { Field, FieldLabel, FieldHint, FieldError }
