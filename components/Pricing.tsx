import { Check } from 'lucide-react'
import WhatsAppIcon from './icons/WhatsAppIcon'

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="wrap pricing-grid">
        <div className="head">
          <h2 className="h-sec reveal">
            Choose the plan
            <br />
            <span className="g">that fits you.</span>
          </h2>
        </div>

        <div className="plans">
          {/* Starter */}
          <div className="plan reveal">
            <h3>Starter</h3>
            <div className="price">
              ₹999<span>/month</span>
            </div>
            <ul>
              <li>
                <Check aria-hidden="true" />
                WhatsApp redirect
              </li>
              <li>
                <Check aria-hidden="true" />
                Manual slot sheet
              </li>
              <li>
                <Check aria-hidden="true" />
                Up to 20 bookings/day
              </li>
            </ul>
            <a href="#contact" className="plan-cta">
              <WhatsAppIcon aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Pro */}
          <div className="plan popular reveal d1">
            <span className="badge">MOST POPULAR</span>
            <h3>Pro</h3>
            <div className="price">
              ₹2,499<span>/month</span>
            </div>
            <ul>
              <li>
                <Check aria-hidden="true" />
                Full WhatsApp bot
              </li>
              <li>
                <Check aria-hidden="true" />
                Auto confirmations
              </li>
              <li>
                <Check aria-hidden="true" />
                UPI payment links
              </li>
              <li>
                <Check aria-hidden="true" />
                Monthly booking reports
              </li>
            </ul>
            <a href="#contact" className="plan-cta">
              <WhatsAppIcon aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Business */}
          <div className="plan reveal d2">
            <h3>Business</h3>
            <div className="price">
              ₹4,999<span>/month</span>
            </div>
            <ul>
              <li>
                <Check aria-hidden="true" />
                Multi-turf management
              </li>
              <li>
                <Check aria-hidden="true" />
                Priority support
              </li>
              <li>
                <Check aria-hidden="true" />
                Tournament management
              </li>
              <li>
                <Check aria-hidden="true" />
                Custom branding
              </li>
            </ul>
            <a href="#contact" className="plan-cta">
              <WhatsAppIcon aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
