import { ChevronDown } from 'lucide-react'
import WhatsAppIcon from './icons/WhatsAppIcon'

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-bg" id="heroBg" />
      <div className="hero-overlay" />
      <div className="wrap">
        <div className="hero-content">
          <h1 className="reveal">
            Your turf, booked on{' '}
            <span className="accent">WhatsApp</span> Automatically
          </h1>
          <p className="sub reveal d1">
            Confirmations, UPI payments and reminders run themselves, so you
            stop losing slots to missed calls and a full voicemail.
          </p>
          <div className="hero-btns reveal d2">
            <a href="#contact" className="btn btn-primary">
              <WhatsAppIcon aria-hidden="true" />
              Chat on WhatsApp
            </a>
            <a href="#pricing" className="btn btn-ghost">
              See pricing
              <ChevronDown aria-hidden="true" />
            </a>
          </div>
          <ul className="hero-trust reveal d3">
            <li>Live in 24 hours</li>
            <li>Players need no app</li>
            <li>From ₹999/mo</li>
          </ul>
        </div>
      </div>

      <div className="scroll-indicator" aria-hidden="true">
        <ChevronDown />
      </div>
    </header>
  )
}
