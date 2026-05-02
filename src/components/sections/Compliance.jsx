import { compliance } from '../../data/compliance';
import AnimSection from '../ui/AnimSection';
import './Compliance.css';

export default function Compliance() {
  return (
    <section className="section section--navy" id="compliance">
      <AnimSection as="div" className="container" style={{ textAlign: 'center' }}>
        <div className="tag" data-anim="fade-up" style={{ background: 'rgba(0,242,254,0.15)', color: 'var(--cyan)' }}>
          Standards &amp; Compliance
        </div>
        <h2 className="section-title" data-anim="fade-up" data-delay="100" style={{ color: 'white', marginTop: '12px' }}>
          Designed to Meet<br />Global Regulatory Standards
        </h2>
        <p className="section-subtitle" data-anim="fade-up" data-delay="200" style={{ color: 'rgba(255,255,255,0.6)', margin: '0 auto 48px' }}>
          Every Vayuclean Containment system is engineered in accordance with
          internationally recognised pharmaceutical and cleanroom standards.
        </p>
        <div className="compliance-grid">
          {compliance.map((c, i) => (
            <div className="compliance-card" key={c.name} data-anim="zoom" data-delay={String(i * 75)}>
              <div className="compliance-card__logo">{c.logo}</div>
              <div className="compliance-card__name">{c.name}</div>
              <div className="compliance-card__desc">{c.desc}</div>
            </div>
          ))}
        </div>
      </AnimSection>
    </section>
  );
}
