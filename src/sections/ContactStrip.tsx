import { ArrowRight } from 'lucide-react'
import { CONTACT_VIDEO } from '../media/videos'
import { sectionCopy } from '../data/profile'
import { getContactEmail } from '../config'

export function ContactStrip() {
  const contactEmail = getContactEmail()
  return (
    <section className="rt-contact" id="contact">
      <div className="rt-contact-video" aria-hidden>
        <video autoPlay muted loop playsInline preload="none" className="rt-contact-video__vid">
          <source src={CONTACT_VIDEO} type="video/mp4" />
        </video>
        <div className="rt-contact-video__overlay" />
      </div>
      <div className="container rt-contact-cta" data-reveal>
        <p className="eyebrow eyebrow--light">{sectionCopy.contact.eyebrow}</p>
        <h2>{sectionCopy.contact.title}</h2>
        <p>{sectionCopy.contact.body}</p>
        <div className="rt-contact-actions">
          <a href={`mailto:${contactEmail}`} className="btn btn-cta">
            {contactEmail} <ArrowRight size={16} />
          </a>
          <a href="#about" className="btn btn-secondary">
            Read my story
          </a>
        </div>
      </div>
    </section>
  )
}
