import * as React from 'react'
import { ChevronDown } from 'lucide-react'

import { cn } from '@/lib/utils'

/* Shared field surface. Every input on the site derives from this so a text
   field, a textarea and a select never drift apart visually. */
export const fieldBaseClass =
  'w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground transition-colors placeholder:text-muted-foreground hover:border-ring/60 focus:border-ring focus:outline-none focus:ring-3 focus:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-60 aria-[invalid=true]:border-destructive aria-[invalid=true]:focus:border-destructive aria-[invalid=true]:focus:ring-destructive/20'

function Input({ className, type = 'text', ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(fieldBaseClass, className)}
      {...props}
    />
  )
}

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(fieldBaseClass, 'resize-y', className)}
      {...props}
    />
  )
}

/* Native <select> keeps mobile pickers and form autofill working; only the
   arrow is swapped for the lucide chevron used elsewhere on the site. */
function NativeSelect({ className, children, ...props }: React.ComponentProps<'select'>) {
  return (
    <div className="relative">
      <select
        data-slot="native-select"
        className={cn(fieldBaseClass, 'appearance-none pr-11', className)}
        {...props}
      >
        {children}
      </select>
      <ChevronDown
        className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
        strokeWidth={1.5}
        aria-hidden="true"
      />
    </div>
  )
}

export { Input, Textarea, NativeSelect }
