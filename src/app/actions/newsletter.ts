'use server'

import { createClient } from '@sanity/client'
import { Resend } from 'resend'

const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'dh3aa2kr',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
})

const resend = new Resend(process.env.RESEND_API_KEY)

export type NewsletterState = {
  success?: boolean
  error?: string
}

export async function subscribeNewsletter(
  _prev: NewsletterState,
  formData: FormData
): Promise<NewsletterState> {
  const email = (formData.get('email') as string ?? '').trim()
  const name = (formData.get('name') as string ?? '').trim()

  if (!email || !email.includes('@')) {
    return { error: 'Please enter a valid email address.' }
  }

  try {
    await writeClient.create({
      _type: 'newsletter',
      name: name || undefined,
      email,
      subscribedAt: new Date().toISOString(),
    })
  } catch (err) {
    console.error('Sanity newsletter write failed:', err)
    return { error: 'Something went wrong. Please try again.' }
  }

  // Send confirmation email — non-blocking, don't fail signup if this errors
  try {
    await resend.emails.send({
      from: 'Volpino <onboarding@resend.dev>',
      to: email,
      subject: 'Welcome to the Volpino list',
      text: `Hi ${name || 'there'},\n\nThanks for joining the Volpino list. You will be the first to know about events, specials and what is happening at the restaurant.\n\nSee you soon.\nThe Volpino team\nvolpino.com.au`,
    })
  } catch (err) {
    console.error('Resend confirmation email failed:', err)
  }

  return { success: true }
}
