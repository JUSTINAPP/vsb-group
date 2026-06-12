'use client'

import { useActionState, useState } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { sendFunctionsEnquiry } from '@/app/actions/functions'
import SubmitButton from './SubmitButton'

export default function FunctionsEnquiryForm() {
  const [state, dispatch, isPending] = useActionState(sendFunctionsEnquiry, {})
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
      token = await executeRecaptcha('functions_enquiry')
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
      <div className="bg-white/10 border border-white/20 rounded-[4px] px-5 py-6 text-white font-jost font-light text-[14px]">
        <p className="font-cormorant text-[22px] font-light mb-2">Thank you for your enquiry!</p>
        <p className="text-white/70 text-[13px] font-jost font-light">
          We&apos;ll be in touch within one business day to discuss your event.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      {(localError ?? state.error) && (
        <p className="text-[12px] text-red-300 font-jost">{localError ?? state.error}</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label htmlFor="fn-name" className="text-[9px] tracking-[0.16em] uppercase text-white/50 font-jost font-normal block mb-[5px]">
            Name <span className="text-white/30">*</span>
          </label>
          <input
            type="text"
            id="fn-name"
            name="name"
            required
            placeholder="Your name"
            className="w-full bg-white/8 border border-white/15 rounded-[3px] px-[13px] py-[11px] text-white text-[13px] font-jost font-light placeholder:text-white/28 outline-none focus:border-white/40"
          />
        </div>
        <div>
          <label htmlFor="fn-email" className="text-[9px] tracking-[0.16em] uppercase text-white/50 font-jost font-normal block mb-[5px]">
            Email <span className="text-white/30">*</span>
          </label>
          <input
            type="email"
            id="fn-email"
            name="email"
            required
            placeholder="your@email.com"
            className="w-full bg-white/8 border border-white/15 rounded-[3px] px-[13px] py-[11px] text-white text-[13px] font-jost font-light placeholder:text-white/28 outline-none focus:border-white/40"
          />
        </div>
        <div>
          <label htmlFor="fn-phone" className="text-[9px] tracking-[0.16em] uppercase text-white/50 font-jost font-normal block mb-[5px]">
            Phone
          </label>
          <input
            type="tel"
            id="fn-phone"
            name="phone"
            placeholder="0400 000 000"
            className="w-full bg-white/8 border border-white/15 rounded-[3px] px-[13px] py-[11px] text-white text-[13px] font-jost font-light placeholder:text-white/28 outline-none focus:border-white/40"
          />
        </div>
        <div>
          <label htmlFor="fn-date" className="text-[9px] tracking-[0.16em] uppercase text-white/50 font-jost font-normal block mb-[5px]">
            Preferred Date <span className="text-white/30">*</span>
          </label>
          <input
            type="date"
            id="fn-date"
            name="date"
            required
            className="w-full bg-white/8 border border-white/15 rounded-[3px] px-[13px] py-[11px] text-white text-[13px] font-jost font-light outline-none focus:border-white/40"
          />
        </div>
        <div>
          <label htmlFor="fn-guests" className="text-[9px] tracking-[0.16em] uppercase text-white/50 font-jost font-normal block mb-[5px]">
            Number of Guests <span className="text-white/30">*</span>
          </label>
          <select
            id="fn-guests"
            name="guests"
            required
            className="w-full bg-white/8 border border-white/15 rounded-[3px] px-[13px] py-[11px] text-white text-[13px] font-jost font-light outline-none focus:border-white/40"
          >
            <option value="">Select guests</option>
            {['10–15', '16–20', '21–30', '31–40', '40+'].map((v) => (
              <option key={v} value={v} className="text-charcoal bg-white">{v} guests</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="fn-occasion" className="text-[9px] tracking-[0.16em] uppercase text-white/50 font-jost font-normal block mb-[5px]">
            Occasion
          </label>
          <select
            id="fn-occasion"
            name="occasion"
            className="w-full bg-white/8 border border-white/15 rounded-[3px] px-[13px] py-[11px] text-white text-[13px] font-jost font-light outline-none focus:border-white/40"
          >
            <option value="">Select occasion</option>
            {['Birthday', 'Anniversary', 'Corporate', 'Wedding', 'Celebration', 'Other'].map((v) => (
              <option key={v} value={v} className="text-charcoal bg-white">{v}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="fn-message" className="text-[9px] tracking-[0.16em] uppercase text-white/50 font-jost font-normal block mb-[5px]">
          Message
        </label>
        <textarea
          id="fn-message"
          name="message"
          rows={4}
          placeholder="Tell us about your event, dietary requirements or any questions…"
          className="w-full bg-white/8 border border-white/15 rounded-[3px] px-[13px] py-[11px] text-white text-[13px] font-jost font-light placeholder:text-white/28 outline-none focus:border-white/40 resize-vertical"
        />
      </div>

      <SubmitButton
        label="Send Enquiry"
        pendingLabel="Sending…"
        isPending={isPending}
        className="bg-sky text-white py-[15px] rounded-[3px] text-[11px] tracking-[0.12em] uppercase font-jost font-normal w-full text-center mt-2 hover:bg-sky-dark transition-colors"
      />
    </form>
  )
}
