/* Types and constants for the demo request form.
   These deliberately live outside the "use server" module: such a file may
   only export async functions, and exporting anything else fails at runtime. */

export type DemoRequestValues = {
  name: string
  restaurant: string
  email: string
  phone: string
  role: string
  locations: string
  message: string
}

export type DemoRequestState = {
  status: 'idle' | 'success' | 'error'
  /** Message shown above the form when the whole submission failed. */
  message?: string
  /** Keyed by field name, so each control can render its own error. */
  errors?: Partial<Record<keyof DemoRequestValues | 'consent', string>>
  /** Echoed back so a validation error never wipes what was typed. */
  values?: Partial<DemoRequestValues>
}

export const initialDemoRequestState: DemoRequestState = { status: 'idle' }

export const LOCATION_OPTIONS: readonly string[] = ['1', '2-5', '6-20', '21+']
