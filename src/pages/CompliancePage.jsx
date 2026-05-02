import { compliance, oebLevels } from '../data/compliance';
import PageHero from '../components/ui/PageHero';
import AnimSection from '../components/ui/AnimSection';
import Icon from '../components/ui/Icons';
import CtaSection from '../components/sections/CtaSection';
import './CompliancePage.css';

const documents = [
  { icon: 'file-alt', title: 'Design Qualification (DQ)', desc: 'Documented evidence that the proposed system design is suitable for the intended purpose.' },
  { icon: 'wrench', title: 'Installation Qualification (IQ)', desc: 'Verification that the system has been installed correctly and in accordance with approved design specifications.' },
  { icon: 'cog', title: 'Operational Qualification (OQ)', desc: 'Evidence that the system operates as intended throughout the anticipated operating ranges.' },
  { icon: 'check-circle', title: 'Performance Qualification (PQ)', desc: 'Documented evidence that the system performs consistently to produce a product meeting predetermined specifications.' },
  { icon: 'chart-bar', title: 'SMEPAC Report', desc: 'Standardised Measurement of Equipment Particulate Airborne Concentration — OEB verification test.' },
  { icon: 'file-edit', title: 'Risk Assessment', desc: 'Formal hazard identification and risk mitigation documentation per ICH Q9 guidelines.' },
];

export default function CompliancePage() {
  return (
    <main>
      <PageHero
        tag="Standards & Compliance"
        title={<>Designed to Meet<br /><span className="highlight">Global Regulatory Standards</span></>}
        subtitle="Every Vayuclean Containment system is engineered in accordance with internationally recognised pharmaceutical and cleanroom standards."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Compliance' }]}
      />

      {/* Standards Grid */}
      <section className="section section--navy">
        <AnimSection as="div" className="container" style={{ textAlign: 'center' }}>
          <div className="tag" data-anim="fade-up" style={{ background: 'rgba(0,242,254,0.15)', color: 'var(--cyan)' }}>
            Regulatory Standards
          </div>
          <h2 className="section-title" data-anim="fade-up" data-delay="100" style={{ color: 'white', marginTop: '12px', marginBottom: '48px' }}>
            Standards We Comply With
          </h2>
          <div className="compliance-grid">
            {compliance.map((c, i) => (
              <div className="compliance-card" key={c.name} data-anim="zoom" data-delay={String(i * 75)}>
              <div className="compliance-card__logo">
                  {c.logo.length <= 4
                    ? c.logo /* flag emoji — render as-is */
                    : <Icon name={c.logo} size={28} />}
                </div>
                <div className="compliance-card__name">{c.name}</div>
                <div className="compliance-card__desc">{c.desc}</div>
              </div>
            ))}
          </div>
        </AnimSection>
      </section>

      {/* OEB Levels */}
      <section className="section">
        <AnimSection as="div" className="container">
          <div className="compliance-oeb-grid">
            <div data-anim="fade-right">
              <div className="tag">OEB Classification</div>
              <h2 className="section-title" style={{ marginTop: '12px', marginBottom: '20px' }}>
                Understanding Occupational<br />Exposure Bands
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '32px' }}>
                OEB (Occupational Exposure Band) classification determines the level of containment
                required for safe handling of pharmaceutical compounds. We engineer solutions for the
                complete OEB 1–5 spectrum.
              </p>
              <a href="/products" className="btn btn-primary" style={{ fontSize: '14px', padding: '14px 30px' }}>
                Explore Products by OEB Level ›
              </a>
            </div>
            <div className="why__image-box" data-anim="fade-left">
              <div className="why__image-title">Understanding OEB Levels</div>
              <div className="why__oeb-levels">
                {oebLevels.map((oeb) => (
                  <div className="why__oeb-item" key={oeb.level}>
                    <div className={`why__oeb-badge ${oeb.cls}`}>OEB<br />{oeb.level}</div>
                    <div className="why__oeb-info">
                      <div className="why__oeb-name">{oeb.name}</div>
                      <div className="why__oeb-range">{oeb.range}</div>
                    </div>
                    <div className="why__oeb-bar">
                      <div className={`why__oeb-fill ${oeb.fill}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimSection>
      </section>

      {/* Validation Documents */}
      <section className="section section--gray">
        <AnimSection as="div" className="container" style={{ textAlign: 'center' }}>
          <div className="tag" data-anim="fade-up">Validation Support</div>
          <h2 className="section-title" data-anim="fade-up" data-delay="100" style={{ marginTop: '12px', marginBottom: '48px' }}>
            Complete Validation<br />Documentation Package
          </h2>
          <div className="divider" data-anim="fade" data-delay="200" style={{ margin: '0 auto 48px' }}></div>
          <div className="validation-grid">
            {documents.map((doc, i) => (
              <div className="validation-card" key={doc.title} data-anim="fade-up" data-delay={String(i * 100)}>
                <div className="validation-card__icon"><Icon name={doc.icon} size={24} /></div>
                <div className="validation-card__title">{doc.title}</div>
                <div className="validation-card__desc">{doc.desc}</div>
              </div>
            ))}
          </div>
        </AnimSection>
      </section>

      <CtaSection />
    </main>
  );
}
