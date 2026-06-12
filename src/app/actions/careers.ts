'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export type CareersState = {
  success?: boolean
  error?: string
}

export async function sendCareerApplication(
  _prev: CareersState,
  formData: FormData
): Promise<CareersState> {
  const name    = formData.get('name') as string
  const email   = formData.get('email') as string
  const phone   = formData.get('phone') as string
  const role    = formData.get('role') as string
  const message = formData.get('message') as string
  const cvFile  = formData.get('cv') as File | null

  if (!name || !email || !role) {
    return { error: 'Please fill in all required fields.' }
  }

  const attachments: { filename: string; content: Buffer }[] = []
  if (cvFile && cvFile.size > 0) {
    const arrayBuffer = await cvFile.arrayBuffer()
    attachments.push({
      filename: cvFile.name,
      content: Buffer.from(arrayBuffer),
    })
  }

  try {
    await resend.emails.send({
      from: 'South Beach Website <onboarding@resend.dev>',
      to: 'events@southbeachproject.com.au',
      replyTo: email,
      subject: `New Career Application — ${role}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || 'Not provided'}`,
        `Role: ${role}`,
        '',
        'Cover note:',
        message || 'No cover note provided.',
      ].join('\n'),
      attachments,
    })
    return { success: true }
  } catch {
    return { error: 'Something went wrong. Please try again or email us directly.' }
  }
}
