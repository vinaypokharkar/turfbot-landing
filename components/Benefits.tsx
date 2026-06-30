import { Check, Zap, IndianRupee } from 'lucide-react'

export default function Benefits() {
  return (
    <section className="benefits" id="benefits">
      <div className="wrap">
        <div className="head">
          <h2 className="h-sec reveal">
            Everything you need.
            <br />
            <span className="g">Automated.</span>
          </h2>
        </div>

        <div className="b-grid">
          <article className="b-feature reveal">
            <div className="ic">
              <Zap aria-hidden="true" />
            </div>
            <h3>Instant slot confirmation</h3>
            <p>Players get confirmed in seconds. No back-and-forth phone calls.</p>
          </article>

          <article className="b-feature reveal d1">
            <div className="ic">
              <IndianRupee aria-hidden="true" />
            </div>
            <h3>UPI payment links</h3>
            <p>Sent automatically in chat. The money lands before players arrive.</p>
          </article>

          <ul className="b-list reveal d2">
            <li>
              <Check aria-hidden="true" />
              <div>
                <h4>Booking reminders</h4>
                <p>An auto reminder one hour before the slot cuts no-shows.</p>
              </div>
            </li>
            <li>
              <Check aria-hidden="true" />
              <div>
                <h4>Works on every phone</h4>
                <p>It runs in WhatsApp, so players install nothing.</p>
              </div>
            </li>
            <li>
              <Check aria-hidden="true" />
              <div>
                <h4>Real-time availability</h4>
                <p>Players see which slots are open before they book.</p>
              </div>
            </li>
            <li>
              <Check aria-hidden="true" />
              <div>
                <h4>Monthly reports</h4>
                <p>See bookings, revenue and busy hours, every month.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
