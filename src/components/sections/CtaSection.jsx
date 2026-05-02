import AnimSection from '../ui/AnimSection';
import './CtaSection.css';

export default function CtaSection() {
  return (
    <section className="cta-section">
      <AnimSection as="div" className="container">
        <div className="cta__inner">
          <div className="tag" data-anim="fade-up" style={{ background: 'rgba(212,168,32,0.15)', color: 'var(--cyan)', marginBottom: '20px' }}>
            Get Started
          </div>
          <h2 className="cta__title" data-anim="fade-up" data-delay="100">
            Need a Containment Audit<br />or Custom Quote?
          </h2>
          <p className="cta__desc" data-anim="fade-up" data-delay="200">
            Share your process details and our containment engineers will recommend
            the right solution — from OEB classification to system design and validation support.
          </p>
          <div className="cta__actions" data-anim="fade-up" data-delay="300">
            <a href="/contact" className="btn btn-primary" style={{ fontSize: '15px', padding: '16px 36px' }}>
              Request a Free Consultation
            </a>
            <a href="/contact" className="btn btn-outline" style={{ fontSize: '15px', padding: '16px 36px' }}>
              Download Product Catalogue
            </a>
          </div>
        </div>
      </AnimSection>
    </section>
  );
}
