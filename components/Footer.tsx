import WhatsAppIcon from './icons/WhatsAppIcon'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <div>
            <div className="logo">
              <WhatsAppIcon aria-hidden="true" />
              TurfBook
            </div>
            <p className="desc">Automated WhatsApp booking system for turfs.</p>
          </div>
          <a href="#contact" className="foot-wa">
            <WhatsAppIcon aria-hidden="true" />
            <span>
              Chat on WhatsApp
              <small>+91 XXXXX XXXXX</small>
            </span>
          </a>
        </div>
        <p className="copy">© 2026 TurfBook. All rights reserved.</p>
      </div>
    </footer>
  )
}
