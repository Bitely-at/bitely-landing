/* Delivery of demo requests to the sales inbox, via Resend.
   Kept out of the "use server" module so it can stay a plain async helper
   and be unit-testable without the action wrapper. */

import { Resend } from 'resend'

import type { DemoRequestValues } from '@/lib/demo-request'

const LOCATION_LABELS: Record<string, string> = {
  '1': 'A single location',
  '2-5': '2 to 5 locations',
  '6-20': '6 to 20 locations',
  '21+': '21+ locations',
}

export type DeliveryResult =
  | { ok: true }
  | { ok: false; reason: string }

function bodyText(values: DemoRequestValues): string {
  const locations = LOCATION_LABELS[values.locations] ?? values.locations

  return [
    `Name:       ${values.name}`,
    `Restaurant: ${values.restaurant}`,
    `Email:      ${values.email}`,
    values.phone ? `Phone:      ${values.phone}` : null,
    values.role ? `Role:       ${values.role}` : null,
    `Locations:  ${locations}`,
    '',
    values.message ? `Message:\n${values.message}` : 'No message.',
    '',
    `Received:   ${new Date().toISOString()}`,
  ]
    .filter((line) => line !== null)
    .join('\n')
}

/* Sends the request to DEMO_REQUEST_TO. Never throws: a delivery problem is
   returned as { ok: false } so the caller can decide what the visitor sees. */
export async function deliverDemoRequest(
  values: DemoRequestValues,
): Promise<DeliveryResult> {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.DEMO_REQUEST_TO
  const from = process.env.DEMO_REQUEST_FROM

  if (!apiKey || !to || !from) {
    return {
      ok: false,
      reason:
        'Missing RESEND_API_KEY, DEMO_REQUEST_TO or DEMO_REQUEST_FROM environment variable.',
    }
  }

  try {
    const { data, error } = await new Resend(apiKey).emails.send({
      from,
      to,
      replyTo: values.email,
      subject: `Demo request: ${values.restaurant}`,
      text: bodyText(values),
    })

    if (error) {
      return { ok: false, reason: `${error.name}: ${error.message}` }
    }
    if (!data?.id) {
      return { ok: false, reason: 'Resend returned no message id.' }
    }
    return { ok: true }
  } catch (cause) {
    return {
      ok: false,
      reason: cause instanceof Error ? cause.message : String(cause),
    }
  }
}
