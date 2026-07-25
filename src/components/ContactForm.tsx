'use client'

import { useActionState, useState } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { sendContactForm } from '@/app/actions/contact'
import SubmitButton from './SubmitButton'

export default function ContactForm() {
  const [state, dispatch, isPending] = useActionState(sendContactForm, {})
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [localError, setLocalError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Capture form ref before any await — e.currentTarget is nulled after the
    // synchronous event handler returns, so FormData(e.currentTarget) would throw.
    const form = e.currentTarget
    setLocalError(null)

    if (!executeRecaptcha) {
      setLocalError('Security check not ready. Please refresh the page and try again.')
      return
    }

    let token: string
    try {
      token = await executeRecaptcha('contact_form')
    } catch {
      setLocalError('Security check failed. Please try again.')
      return
    }

    const formData = new FormData(form)
    formData.append('recaptchaToken', token)
    dispatch(formData)
  }

  if (state.success) {
    return (
      <div className="bg-sky-light border border-sky/20 rounded-[4px] px-5 py-6 text-charcoal font-sans font-light text-[14px]">
        <p className="font-display uppercase tracking-tight text-[22px] font-semibold mb-2 text-charcoal">Message sent!</p>
        <p className="text-warm text-[13px] font-sans font-light">
          Thanks for getting in touch. We&apos;ll get back to you within one business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      {(localError ?? state.error) && (
        <p className="text-[12px] text-red-600 font-sans">{localError ?? state.error}</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label htmlFor="ct-name" className="text-[9px] tracking-[0.16em] uppercase text-warm font-sans font-normal block mb-[5px]">
            Name <span className="text-warm/50">*</span>
          </label>
          <input
            type="text"
            id="ct-name"
            name="name"
            required
            placeholder="Your name"
            className="w-full bg-white border border-[#DDDAD6] rounded-[3px] px-[13px] py-[11px] text-charcoal text-[13px] font-sans font-light placeholder:text-[#B0ABA6] outline-none focus:border-sky"
          />
        </div>
        <div>
          <label htmlFor="ct-email" className="text-[9px] tracking-[0.16em] uppercase text-warm font-sans font-normal block mb-[5px]">
            Email <span className="text-warm/50">*</span>
          </label>
          <input
            type="email"
            id="ct-email"
            name="email"
            required
            placeholder="your@email.com"
            className="w-full bg-white border border-[#DDDAD6] rounded-[3px] px-[13px] py-[11px] text-charcoal text-[13px] font-sans font-light placeholder:text-[#B0ABA6] outline-none focus:border-sky"
          />
        </div>
      </div>

      <div>
        <label htmlFor="ct-phone" className="text-[9px] tracking-[0.16em] uppercase text-warm font-sans font-normal block mb-[5px]">
          Phone
        </label>
        <input
          type="tel"
          id="ct-phone"
          name="phone"
          placeholder="0400 000 000"
          className="w-full bg-white border border-[#DDDAD6] rounded-[3px] px-[13px] py-[11px] text-charcoal text-[13px] font-sans font-light placeholder:text-[#B0ABA6] outline-none focus:border-sky"
        />
      </div>

      <div>
        <label htmlFor="ct-message" className="text-[9px] tracking-[0.16em] uppercase text-warm font-sans font-normal block mb-[5px]">
          Message <span className="text-warm/50">*</span>
        </label>
        <textarea
          id="ct-message"
          name="message"
          rows={5}
          required
          placeholder="How can we help?"
          className="w-full bg-white border border-[#DDDAD6] rounded-[3px] px-[13px] py-[11px] text-charcoal text-[13px] font-sans font-light placeholder:text-[#B0ABA6] outline-none focus:border-sky resize-vertical"
        />
      </div>

      <SubmitButton
        label="Send Message"
        pendingLabel="Sending…"
        isPending={isPending}
        className="bg-sky text-white py-[15px] rounded-[3px] text-[11px] tracking-[0.12em] uppercase font-sans font-normal w-full text-center mt-2"
      />
    </form>
  )
}
