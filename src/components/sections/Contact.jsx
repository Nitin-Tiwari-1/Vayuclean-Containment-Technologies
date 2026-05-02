import AnimSection from '../ui/AnimSection';
import Icon from '../ui/Icons';
import './Contact.css';

const productOptions = [
  'Downflow Booth',
  'Containment Isolator',
  'Weighing & Dispensing Booth',
  'Split Butterfly Valve (SBV/RTP)',
  'RABS System',
  'Glove Box Isolator',
  'Negative Pressure Room',
  'Other / Custom Requirement',
];

export default function Contact() {
  return (
    <section className="section section--gray" id="contact">
      <AnimSection as="div" className="container">
        <div className="tag" data-anim="fade-up">Contact Us</div>
        <h2 className="section-title" data-anim="fade-up" data-delay="100" style={{ marginTop: '12px', marginBottom: '48px' }}>Get in Touch</h2>
        <div className="contact-grid">

          {/* Contact Info */}
          <div data-anim="fade-right">
            <div className="contact-info__item">
              <div className="contact-info__icon"><Icon name="map-marker" size={20} /></div>
              <div>
                <div className="contact-info__label">Address</div>
                <div className="contact-info__value">
                  Unit No 22, Phase-1, Parmar Techno Centre,<br />
                  Nr Western Express Highway, Vasai (East),<br />
                  Maharashtra – 401208, India
                </div>
              </div>
            </div>
            <div className="contact-info__item">
              <div className="contact-info__icon"><Icon name="phone" size={20} /></div>
              <div>
                <div className="contact-info__label">Phone</div>
                <div className="contact-info__value">+91 9967696475 &nbsp;|&nbsp; +91 9967640553</div>
              </div>
            </div>
            <div className="contact-info__item">
              <div className="contact-info__icon"><Icon name="envelope" size={20} /></div>
              <div>
                <div className="contact-info__label">Email</div>
                <div className="contact-info__value">info@vayucleancontainment.com</div>
              </div>
            </div>
            <div className="contact-info__item">
              <div className="contact-info__icon"><Icon name="globe" size={20} /></div>
              <div>
                <div className="contact-info__label">Website</div>
                <div className="contact-info__value">
                  <a href="https://www.vayucleancontainment.com" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)' }}>
                    www.vayucleancontainment.com ↗
                  </a>
                </div>
              </div>
            </div>
            <div className="contact__reg-box">
              <div className="contact__reg-label">REGISTERED COMPANY</div>
              <div className="contact__reg-text">
                <strong>Vayuclean Containment Technologies Private Limited</strong><br />
                MCA Approval Ref: AC3168920<br />
                Approved by CRC, Ministry of Corporate Affairs<br />
                CIN: (Pending allocation post MOA filing)
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="contact-form" data-anim="fade-left">
            <h3 className="contact-form__title">Send Us an Enquiry</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name <span>*</span></label>
                  <input type="text" placeholder="Rajesh" required />
                </div>
                <div className="form-group">
                  <label>Last Name <span>*</span></label>
                  <input type="text" placeholder="Mehta" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email <span>*</span></label>
                  <input type="email" placeholder="rajesh@company.com" required />
                </div>
                <div className="form-group">
                  <label>Mobile <span>*</span></label>
                  <input type="tel" placeholder="+91 99999 00000" required />
                </div>
              </div>
              <div className="form-group">
                <label>Company Name <span>*</span></label>
                <input type="text" placeholder="Your Pharma Company" required />
              </div>
              <div className="form-group">
                <label>Product / Requirement <span>*</span></label>
                <select required defaultValue="">
                  <option value="" disabled>Select a product category...</option>
                  {productOptions.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>OEB Level Required</label>
                <select defaultValue="">
                  <option value="">Not sure / Please advise</option>
                  {['OEB 1','OEB 2','OEB 3','OEB 4','OEB 5'].map(o => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Message / Project Details</label>
                <textarea placeholder="Describe your project, quantity needed, installation site, compliance requirements..."></textarea>
              </div>
              <button type="submit" className="form-submit">Submit Enquiry →</button>
            </form>
          </div>

        </div>
      </AnimSection>
    </section>
  );
}
