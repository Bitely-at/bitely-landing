'use client'

import { useActionState } from 'react'
import { AlertCircle, Check, Loader2 } from 'lucide-react'

import { requestDemo } from '@/app/actions/request-demo'
import {
  Field,
  FieldError,
  FieldLabel,
  fieldA11yProps,
} from '@/components/ui/field'
import { Input, NativeSelect, Textarea } from '@/components/ui/input'
import { buttonVariants } from '@/components/ui/button'
import type { Dictionary } from '@/lib/dictionaries'
import { LOCATION_OPTIONS, initialDemoRequestState } from '@/lib/demo-request'
import type { Locale } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export function DemoForm({
  locale,
  dict,
}: {
  locale: Locale
  dict: Dictionary['demo']
}) {
  const [state, formAction, isPending] = useActionState(
    requestDemo,
    initialDemoRequestState,
  )

  const errors = state.errors ?? {}
  const values = state.values ?? {}

  return (
    <section id="demo" className="border-t bg-background">
      <div className="mx-auto max-w-2xl px-6 py-16 md:py-32">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-medium tracking-tight lg:text-5xl">
            {dict.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-balance text-muted-foreground">
            {dict.intro}
          </p>
        </div>

        {state.status === 'success' ? (
          <div role="status" className="mt-12 text-center">
            <span className="mx-auto flex size-10 items-center justify-center rounded-full border">
              <Check className="size-5" strokeWidth={1.5} aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-xl font-medium">{dict.successTitle}</h3>
            <p className="mx-auto mt-2 max-w-sm text-balance text-muted-foreground">
              {dict.successBody}
            </p>
          </div>
        ) : (
          <form action={formAction} noValidate className="mt-12 grid gap-5">
            <input type="hidden" name="lang" value={locale} />

            {state.status === 'error' && state.message && (
              <p
                role="alert"
                className="flex items-start gap-2 rounded-xl border border-destructive/25 bg-destructive/5 px-4 py-3 text-sm text-destructive"
              >
                <AlertCircle
                  className="mt-0.5 size-4 shrink-0"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <span>{state.message}</span>
              </p>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="name">{dict.fields.name}</FieldLabel>
                <Input
                  {...fieldA11yProps('name', errors.name)}
                  autoComplete="name"
                  defaultValue={values.name}
                />
                <FieldError id="name-error">{errors.name}</FieldError>
              </Field>

              <Field>
                <FieldLabel htmlFor="restaurant">{dict.fields.restaurant}</FieldLabel>
                <Input
                  {...fieldA11yProps('restaurant', errors.restaurant)}
                  autoComplete="organization"
                  defaultValue={values.restaurant}
                />
                <FieldError id="restaurant-error">
                  {errors.restaurant}
                </FieldError>
              </Field>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="email">{dict.fields.email}</FieldLabel>
                <Input
                  {...fieldA11yProps('email', errors.email)}
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  defaultValue={values.email}
                />
                <FieldError id="email-error">{errors.email}</FieldError>
              </Field>

              <Field>
                <FieldLabel htmlFor="locations">{dict.fields.locations}</FieldLabel>
                <NativeSelect
                  {...fieldA11yProps('locations', errors.locations)}
                  defaultValue={values.locations ?? '1'}
                >
                  {LOCATION_OPTIONS.map((value) => (
                    <option key={value} value={value}>
                      {dict.locationOptions[value]}
                    </option>
                  ))}
                </NativeSelect>
                <FieldError id="locations-error">{errors.locations}</FieldError>
              </Field>
            </div>

            <Field>
              <FieldLabel htmlFor="message" optional>
                {dict.fields.message}
              </FieldLabel>
              <Textarea
                {...fieldA11yProps('message', errors.message)}
                rows={3}
                maxLength={2000}
                defaultValue={values.message}
              />
              <FieldError id="message-error">{errors.message}</FieldError>
            </Field>

            {/* Honeypot: hidden from people, tempting to bots. */}
            <div aria-hidden="true" className="hidden">
              <label htmlFor="company_website">Company website</label>
              <input
                id="company_website"
                name="company_website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <Field className="gap-2">
              <div className="flex items-start gap-3">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  aria-invalid={errors.consent ? true : undefined}
                  aria-describedby={errors.consent ? 'consent-error' : undefined}
                  className="mt-0.5 size-4 shrink-0 cursor-pointer rounded border-input accent-primary focus:outline-none focus:ring-3 focus:ring-ring/30 aria-[invalid=true]:border-destructive"
                />
                <FieldLabel
                  htmlFor="consent"
                  className="font-normal leading-relaxed text-muted-foreground"
                >
                  {dict.fields.consent}
                </FieldLabel>
              </div>
              <FieldError id="consent-error">{errors.consent}</FieldError>
            </Field>

            <button
              type="submit"
              disabled={isPending}
              className={cn(
                buttonVariants({ size: 'lg' }),
                'mt-1 h-11 w-full rounded-xl text-base sm:w-fit sm:px-8',
              )}
            >
              {isPending ? (
                <>
                  <Loader2
                    className="size-4 animate-spin"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  {dict.sending}
                </>
              ) : (
                dict.submit
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
