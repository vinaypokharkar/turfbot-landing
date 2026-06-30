'use client'

import { useState, FormEvent } from 'react'
import { WA_NUMBER } from '@/lib/config'
import WhatsAppIcon from './icons/WhatsAppIcon'

export default function Contact() {
  const [note, setNote] = useState('No spam. We only message you about your setup.')
  const [noteGreen, setNoteGreen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const f = e.currentTarget
    const turf = (f.elements.namedItem('turf') as HTMLInputElement).value.trim()
    const owner = (f.elements.namedItem('owner') as HTMLInputElement).value.trim()
    const phone = (f.elements.namedItem('phone') as HTMLInputElement).value.trim()
    const city = (f.elements.namedItem('city') as HTMLInputElement).value.trim()
    const plan = (f.elements.namedItem('plan') as HTMLSelectElement).value

    const newErrors: Record<string, string> = {}
    if (!turf) newErrors.turf = 'Required. Please fill this in.'
    if (!owner) newErrors.owner = 'Required. Please fill this in.'
    if (!phone) newErrors.phone = 'Required. Please fill this in.'

    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    const msg =
      `Hi TurfBook! I want to set up WhatsApp booking.%0A%0A` +
      `Turf: ${turf}%0A` +
      `Owner: ${owner}%0A` +
      `Phone: ${phone}%0A` +
      `City: ${city || '-'}%0A` +
      `Plan: ${plan || 'Not sure yet'}`

    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank')
    setNote("Opening WhatsApp. We'll reply there shortly.")
    setNoteGreen(true)
    setSubmitting(true)
    setTimeout(() => setSubmitting(false), 2500)
  }

  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="contact-box reveal">
          <div className="contact-img">
            <div className="ov">
              <h2>
                Let&apos;s get your
                <br />
                bookings running.
              </h2>
              <p>Tell us about your turf and we&apos;ll set up your WhatsApp system.</p>
            </div>
          </div>

          <div className="contact-form">
            <h3>Start your setup</h3>
            <p className="lead">We will contact you on WhatsApp to get started.</p>

            <form onSubmit={handleSubmit} noValidate aria-label="Turf setup request">
              <div className="frow">
                <div className="field">
                  <label htmlFor="turf">
                    Turf Name <span className="req" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="turf"
                    name="turf"
                    placeholder="Enter turf name"
                    required
                    aria-invalid={errors.turf ? true : undefined}
                    aria-describedby={errors.turf ? 'turf-error' : undefined}
                  />
                  {errors.turf && (
                    <p className="field-error show" id="turf-error">
                      {errors.turf}
                    </p>
                  )}
                </div>
                <div className="field">
                  <label htmlFor="owner">
                    Owner Name <span className="req" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="owner"
                    name="owner"
                    autoComplete="name"
                    placeholder="Enter owner name"
                    required
                    aria-invalid={errors.owner ? true : undefined}
                    aria-describedby={errors.owner ? 'owner-error' : undefined}
                  />
                  {errors.owner && (
                    <p className="field-error show" id="owner-error">
                      {errors.owner}
                    </p>
                  )}
                </div>
              </div>

              <div className="frow">
                <div className="field">
                  <label htmlFor="phone">
                    Phone Number <span className="req" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="Enter phone number"
                    required
                    aria-invalid={errors.phone ? true : undefined}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && (
                    <p className="field-error show" id="phone-error">
                      {errors.phone}
                    </p>
                  )}
                </div>
                <div className="field">
                  <label htmlFor="city">City</label>
                  <input
                    id="city"
                    name="city"
                    autoComplete="address-level2"
                    placeholder="Enter city"
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="plan">Plan Interest</label>
                <select id="plan" name="plan">
                  <option value="">Select plan</option>
                  <option>Starter (₹999)</option>
                  <option>Pro (₹2,499)</option>
                  <option>Business (₹4,999)</option>
                </select>
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={submitting}
                style={submitting ? { opacity: 0.7 } : undefined}
              >
                <WhatsAppIcon aria-hidden="true" />
                Send on WhatsApp
              </button>

              <p
                className="form-note"
                style={
                  noteGreen
                    ? { color: 'var(--primary)', fontWeight: '600' }
                    : undefined
                }
              >
                {note}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
