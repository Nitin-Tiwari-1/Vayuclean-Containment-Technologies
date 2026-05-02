import { testimonials } from '../data/testimonials';
import PageHero from '../components/ui/PageHero';
import AnimSection from '../components/ui/AnimSection';
import Icon from '../components/ui/Icons';
import CtaSection from '../components/sections/CtaSection';
import './GalleryPage.css';

const galleryItems = [
  { id: 1, icon: 'industry', title: 'Downflow Booth — OEB 2/3', category: 'Containment Booths', caption: 'SS 316L downflow booth with HEPA H14 filtration installed at a leading API manufacturer in Pune.' },
  { id: 2, icon: 'flask', title: 'Containment Isolator — OEB 4/5', category: 'Isolation Systems', caption: 'Glove-port isolator with SBV/RTP port and HEPA/ULPA dual-filter stage for HPAPI handling.' },
  { id: 3, icon: 'ruler', title: 'Weighing & Dispensing Booth', category: 'Dispensing Systems', caption: 'Integrated balance platform booth for precision API and excipient dispensing in Mumbai.' },
  { id: 4, icon: 'sync', title: 'Split Butterfly Valve (RTP)', category: 'Transfer Systems', caption: 'Zero-leakage contained transfer port installed between isolator and drum unloading station.' },
  { id: 5, icon: 'shield', title: 'Closed RABS System', category: 'Barrier Systems', caption: 'EU Annex 1 compliant Closed RABS for sterile vial filling line at biotech facility in Hyderabad.' },
  { id: 6, icon: 'microscope', title: 'Glove Box Isolator — OEB 5', category: 'Laboratory Systems', caption: 'Negative-pressure glove box for handling oncology compounds at < 1 µg/m³ OEL.' },
  { id: 7, icon: 'wind', title: 'Negative Pressure Room', category: 'Containment Rooms', caption: 'Full-room negative pressure containment suite with cascading pressure differentials for potent compound handling.' },
  { id: 8, icon: 'cog', title: 'Custom OEB 3 System', category: 'Custom Solutions', caption: 'Bespoke engineered containment system designed to customer\'s specific process requirements and space constraints.' },
  { id: 9, icon: '🏅', title: 'ISO Certified Workshop', category: 'Manufacturing', caption: 'ISO 9001:2015 certified manufacturing facility at Vasai, Maharashtra — where every system is built.' },
];

export default function GalleryPage() {
  return (
    <main>
      <PageHero
        tag="Gallery"
        title={<>Our Work &amp; <span className="highlight">Installations</span></>}
        subtitle="A visual showcase of our containment systems installed at pharmaceutical, biotech, and research facilities across India."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Gallery' }]}
      />

      {/* Photo Gallery */}
      <section className="section">
        <AnimSection as="div" className="container">
          <div className="gallery-grid">
            {galleryItems.map((item, i) => (
              <div className="gallery-card" key={item.id} data-anim="fade-up" data-delay={String((i % 3) * 100)}>
                <div className="gallery-card__visual">
                  <div className="gallery-card__icon"><Icon name={item.icon} size={26} /></div>
                  <div className="gallery-card__category">{item.category}</div>
                </div>
                <div className="gallery-card__body">
                  <div className="gallery-card__title">{item.title}</div>
                  <div className="gallery-card__caption">{item.caption}</div>
                </div>
              </div>
            ))}
          </div>
        </AnimSection>
      </section>

      {/* Testimonials */}
      <section className="section section--gray">
        <AnimSection as="div" className="container" style={{ textAlign: 'center' }}>
          <div className="tag" data-anim="fade-up">Client Testimonials</div>
          <h2 className="section-title" data-anim="fade-up" data-delay="100" style={{ marginTop: '12px', marginBottom: '16px' }}>What Our Clients Say</h2>
          <p className="section-subtitle" data-anim="fade-up" data-delay="200" style={{ marginBottom: '48px' }}>
            Trusted by pharmaceutical companies, biotech labs, and research organisations across India.
          </p>
          <div className="divider" data-anim="fade" data-delay="250" style={{ margin: '0 auto 48px' }}></div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={t.id} data-anim="fade-up" data-delay={String(i * 150)}>
                <div className="testimonial-card__quote">&ldquo;</div>
                <div className="testimonial-card__stars">{'★'.repeat(t.stars)}</div>
                <div className="testimonial-card__text">{t.text}</div>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">{t.initial}</div>
                  <div>
                    <div className="testimonial-card__name">{t.name}</div>
                    <div className="testimonial-card__role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimSection>
      </section>

      <CtaSection />
    </main>
  );
}
