'use client'

import { useActionState } from 'react'
import { sendCareerApplication } from '@/app/actions/careers'
import SubmitButton from './SubmitButton'

const ROLES = ['Front of House', 'Kitchen', 'Bar', 'Events', 'Other']

const INPUT = 'w-full bg-[#1a1a1a] border border-ink/15 rounded-[3px] px-[13px] py-[11px] text-ink text-[13px] font-sans font-light placeholder:text-ink/30 outline-none focus:border-teal'
const LABEL = 'text-[9px] tracking-[0.16em] uppercase text-ink/55 font-sans font-normal block mb-[5px]'

export default function CareersForm() {
  const [state, action] = useActionState(sendCareerApplication, {})

  if (state.success) {
    return (
      <div className="bg-[#161616] border border-ink/8 rounded-[4px] px-5 py-6 text-ink font-sans font-light text-[14px]">
        <p className="font-display uppercase tracking-tight text-[22px] font-semibold mb-2">Application received!</p>
        <p className="text-ink/55 text-[13px] font-sans font-light">
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
          <label htmlFor="ca-name" className={LABEL}>Name <span className="text-ink/40">*</span></label>
          <input type="text" id="ca-name" name="name" required placeholder="Your name" className={INPUT} />
        </div>
        <div>
          <label htmlFor="ca-email" className={LABEL}>Email <span className="text-ink/40">*</span></label>
          <input type="email" id="ca-email" name="email" required placeholder="your@email.com" className={INPUT} />
        </div>
        <div>
          <label htmlFor="ca-phone" className={LABEL}>Phone</label>
          <input type="tel" id="ca-phone" name="phone" placeholder="0400 000 000" className={INPUT} />
        </div>
        <div>
          <label htmlFor="ca-role" className={LABEL}>Role Interest <span className="text-ink/40">*</span></label>
          <select id="ca-role" name="role" required className={INPUT}>
            <option value="">Select a role</option>
            {ROLES.map((r) => (
              <option key={r} value={r} className="text-ink bg-[#1a1a1a]">{r}</option>
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
          className="w-full text-[13px] font-sans font-light text-ink/55 file:mr-3 file:py-[8px] file:px-[14px] file:rounded-none file:border-0 file:text-[10px] file:tracking-[0.1em] file:uppercase file:font-sans file:font-semibold file:text-void file:bg-ink hover:file:opacity-90 file:transition-opacity file:cursor-pointer"
        />
        <p className="text-[10px] text-ink/40 font-sans mt-1">PDF, DOC or DOCX · max 5 MB</p>
      </div>

      <SubmitButton
        label="Submit Application"
        pendingLabel="Submitting…"
        className="bg-ink text-void py-[15px] rounded-none text-[11px] tracking-[0.12em] uppercase font-sans font-semibold w-full text-center mt-2 hover:opacity-90 transition-opacity"
      />
    </form>
  )
}
