'use client'

import { useActionState } from 'react'
import { sendCareerApplication } from '@/app/actions/careers'
import SubmitButton from './SubmitButton'

const ROLES = ['Front of House', 'Kitchen', 'Bar', 'Events', 'Other']

const INPUT = 'w-full bg-white border border-[#DDDAD6] rounded-[3px] px-[13px] py-[11px] text-charcoal text-[13px] font-sans font-light placeholder:text-[#B0ABA6] outline-none focus:border-sky'
const LABEL = 'text-[9px] tracking-[0.16em] uppercase text-warm font-sans font-normal block mb-[5px]'

export default function CareersForm() {
  const [state, action] = useActionState(sendCareerApplication, {})

  if (state.success) {
    return (
      <div className="bg-sky-light border border-sky/20 rounded-[4px] px-5 py-6 text-charcoal font-sans font-light text-[14px]">
        <p className="font-display uppercase tracking-tight text-[22px] font-semibold mb-2">Application received!</p>
        <p className="text-warm text-[13px] font-sans font-light">
          Thanks for your interest in joining the South Beach team. We&apos;ll be in touch if there&apos;s a good fit.
        </p>
      </div>
    )
  }

  return (
    <form action={action} className="flex flex-col gap-4" encType="multipart/form-data">
      {state.error && (
        <p className="text-[12px] text-red-600 font-sans">{state.error}</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="ca-name" className={LABEL}>Name <span className="text-warm/50">*</span></label>
          <input type="text" id="ca-name" name="name" required placeholder="Your name" className={INPUT} />
        </div>
        <div>
          <label htmlFor="ca-email" className={LABEL}>Email <span className="text-warm/50">*</span></label>
          <input type="email" id="ca-email" name="email" required placeholder="your@email.com" className={INPUT} />
        </div>
        <div>
          <label htmlFor="ca-phone" className={LABEL}>Phone</label>
          <input type="tel" id="ca-phone" name="phone" placeholder="0400 000 000" className={INPUT} />
        </div>
        <div>
          <label htmlFor="ca-role" className={LABEL}>Role Interest <span className="text-warm/50">*</span></label>
          <select id="ca-role" name="role" required className={INPUT}>
            <option value="">Select a role</option>
            {ROLES.map((r) => (
              <option key={r} value={r} className="text-charcoal bg-white">{r}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="ca-message" className={LABEL}>Cover Note</label>
        <textarea
          id="ca-message"
          name="message"
          rows={5}
          placeholder="Tell us a little about yourself and why you'd like to join the team…"
          className={`${INPUT} resize-vertical`}
        />
      </div>

      <div>
        <label htmlFor="ca-cv" className={LABEL}>CV / Resume (optional)</label>
        <input
          type="file"
          id="ca-cv"
          name="cv"
          accept=".pdf,.doc,.docx"
          className="w-full text-[13px] font-sans font-light text-warm file:mr-3 file:py-[8px] file:px-[14px] file:rounded-[3px] file:border file:border-sky file:text-[10px] file:tracking-[0.1em] file:uppercase file:font-sans file:text-sky file:bg-transparent hover:file:bg-sky hover:file:text-white file:transition-colors file:cursor-pointer"
        />
        <p className="text-[10px] text-warm/60 font-sans mt-1">PDF, DOC or DOCX · max 5 MB</p>
      </div>

      <SubmitButton
        label="Submit Application"
        pendingLabel="Submitting…"
        className="bg-sky text-white py-[15px] rounded-[3px] text-[11px] tracking-[0.12em] uppercase font-sans font-normal w-full text-center mt-2"
      />
    </form>
  )
}
