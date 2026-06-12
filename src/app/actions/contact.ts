'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export type ContactState = {
  success?: boolean
  error?: string
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  if (!token) return false
  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
  })
  const data = await res.json() as { success: boolean; score?: number }
  return data.success && (data.score ?? 0) >= 0.5
}

export async function sendContactForm(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string
  const message = formData.get('message') as string
  const recaptchaToken = formData.get('recaptchaToken') as string

  if (!name || !email || !message) {
    return { error: 'Please fill in all required fields.' }
  }

  const isHuman = await verifyRecaptcha(recaptchaToken)
  if (!isHuman) {
    return { error: 'Verification failed. Please try again.' }
  }

  try {
    await resend.emails.send({
      from: 'South Beach <noreply@sbmm.com.au>',
      to: process.env.CONTACT_EMAIL ?? 'samuel@vsbgroup.com.au',
      replyTo: email,
      subject: `Website enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\n\nMessage:\n${message}`,
    })
    return { success: true }
  } catch {
    return { error: 'Something went wrong. Please try again or call us directly.' }
  }
}
