'use server'

import type {
  DemoRequestState,
  DemoRequestValues,
} from '@/lib/demo-request'
import { LOCATION_OPTIONS } from '@/lib/demo-request'


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
    errors.name = 'Please tell us your name.'
  }
  if (values.restaurant.length < 2) {
    errors.restaurant = 'Please tell us the name of your restaurant.'
  }
  if (!values.email) {
    errors.email = 'We need an email address to reach you.'
  } else if (!EMAIL_PATTERN.test(values.email)) {
    errors.email = 'That email address does not look right.'
  }
  if (values.phone && values.phone.replace(/[^0-9]/g, '').length < 6) {
    errors.phone = 'That phone number looks too short.'
  }
  if (!LOCATION_OPTIONS.includes(values.locations)) {
    errors.locations = 'Please choose how many locations you run.'
  }
  if (values.message.length > 2000) {
    errors.message = 'Please keep this under 2000 characters.'
  }
  if (!consent) {
    errors.consent = 'We need your permission to get back to you.'
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: 'error',
      message: 'Please check the highlighted fields.',
      errors,
      values,
    }
  }

  // TODO: Deliver the request somewhere durable before going live. Until this
  // is wired up, submissions only reach the server log and are then lost.
  // Options, cheapest first:
  //   - email:    Resend / Postmark to the sales inbox
  //   - database: a `demo_requests` table
  //   - CRM:      a webhook into HubSpot, Pipedrive, …
  console.info('[bitely] demo request received', {
    ...values,
    receivedAt: new Date().toISOString(),
  })

  return {
    status: 'success',
    message: 'Your demo request is in.',
  }
}
