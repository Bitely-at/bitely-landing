'use server'

import type {
  DemoRequestState,
  DemoRequestValues,
} from '@/lib/demo-request'
import { LOCATION_OPTIONS } from '@/lib/demo-request'
import { deliverDemoRequest } from '@/lib/demo-email'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale, hasLocale } from '@/lib/i18n'


/* Deliberately permissive: the only job here is to catch typos like a missing
   @ or a trailing comma. Real deliverability is proven by the reply, not a regex. */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function read(formData: FormData, key: string) {
  const value = formData.get(key)
  return typeof value === 'string' ? value.trim() : ''
}

export async function requestDemo(
  _prevState: DemoRequestState,
  formData: FormData,
): Promise<DemoRequestState> {
  /* Honeypot: a hidden field no human ever fills in. Bots that fill it get a
     success screen so they stop retrying, but nothing is recorded. */
  if (read(formData, 'company_website')) {
    return { status: 'success' }
  }

  const lang = read(formData, 'lang')
  const locale = hasLocale(lang) ? lang : defaultLocale
  const { demo } = getDictionary(locale)

  const values: DemoRequestValues = {
    name: read(formData, 'name'),
    restaurant: read(formData, 'restaurant'),
    email: read(formData, 'email'),
    phone: read(formData, 'phone'),
    role: read(formData, 'role'),
    locations: read(formData, 'locations'),
    message: read(formData, 'message'),
  }
  const consent = formData.get('consent') === 'on'

  const errors: DemoRequestState['errors'] = {}

  if (values.name.length < 2) {
    errors.name = demo.errors.name
  }
  if (values.restaurant.length < 2) {
    errors.restaurant = demo.errors.restaurant
  }
  if (!values.email) {
    errors.email = demo.errors.emailMissing
  } else if (!EMAIL_PATTERN.test(values.email)) {
    errors.email = demo.errors.emailInvalid
  }
  if (values.phone && values.phone.replace(/[^0-9]/g, '').length < 6) {
    errors.phone = demo.errors.phone
  }
  if (!LOCATION_OPTIONS.includes(values.locations)) {
    errors.locations = demo.errors.locations
  }
  if (values.message.length > 2000) {
    errors.message = demo.errors.message
  }
  if (!consent) {
    errors.consent = demo.errors.consent
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: 'error',
      message: demo.errors.summary,
      errors,
      values,
    }
  }

  const delivery = await deliverDemoRequest(values, locale)

  if (!delivery.ok) {
    // Keep the lead in the server log so it is not lost while delivery is broken,
    // and surface a path the visitor can act on instead of a dead end.
    console.error('[bitely] demo request delivery failed', {
      reason: delivery.reason,
      ...values,
      receivedAt: new Date().toISOString(),
    })
    return {
      status: 'error',
      message: demo.errors.delivery,
      values,
    }
  }

  return {
    status: 'success',
    message: demo.received,
  }
}
