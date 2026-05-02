import { testimonials } from '../../data/testimonials';
import AnimSection from '../ui/AnimSection';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <section className="section" id="gallery">
      <AnimSection as="div" className="container">
        <div className="tag" data-anim="fade-up">Client Testimonials</div>
        <h2 className="section-title" data-anim="fade-up" data-delay="100" style={{ marginTop: '12px' }}>What Our Clients Say</h2>
        <p className="section-subtitle" data-anim="fade-up" data-delay="200">
          Trusted by pharmaceutical companies, biotech labs, and research organisations across India.
        </p>
        <div className="divider" data-anim="fade" data-delay="250"></div>
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
  );
}
