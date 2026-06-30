import { MousePointerClick, Check } from 'lucide-react'
import WhatsAppIcon from './icons/WhatsAppIcon'

export default function HowItWorks() {
  return (
    <section className="how" id="how">
      <div className="wrap">
        <div className="head">
          <h2 className="h-sec reveal">Simple. Fast. Automated.</h2>
        </div>

        <div className="steps">
          <div className="step reveal">
            <div className="circle">
              <MousePointerClick aria-hidden="true" />
            </div>
            <div className="num">01</div>
            <h3>Player clicks &quot;Book Now&quot;</h3>
            <p>Player clicks &quot;Book Now&quot; on your turf page.</p>
          </div>

          <div className="step reveal d1">
            <div className="circle">
              <WhatsAppIcon aria-hidden="true" />
            </div>
            <div className="num">02</div>
            <h3>WhatsApp opens and books the slot</h3>
            <p>
              WhatsApp opens with a ready-to-send message, then the booking runs
              itself: slot, confirmation and payment.
            </p>
          </div>

          <div className="step reveal d2">
            <div className="circle">
              <Check aria-hidden="true" />
            </div>
            <div className="num">03</div>
            <h3>Booking confirmed + payment link sent</h3>
            <p>
              Booking is confirmed and a UPI payment link is sent automatically.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
