import { industries } from '../../data/industries';
import AnimSection from '../ui/AnimSection';
import Icon from '../ui/Icons';
import './Industries.css';

export default function Industries() {
  return (
    <section className="section" id="industries">
      <AnimSection as="div" className="container" style={{ textAlign: 'center' }}>
        <div className="tag" data-anim="fade-up">Industries We Serve</div>
        <h2 className="section-title" data-anim="fade-up" data-delay="100" style={{ marginTop: '12px' }}>
          Built for the Most<br />Demanding Environments
        </h2>
        <p className="section-subtitle" data-anim="fade-up" data-delay="200" style={{ margin: '0 auto 48px' }}>
          Our containment systems are deployed across high-risk pharmaceutical,
          oncology, biotech, and research environments where operator safety
          and product integrity are non-negotiable.
        </p>
        <div className="divider" data-anim="fade" data-delay="250" style={{ margin: '0 auto 48px' }}></div>
        <div className="industries-grid">
          {industries.map((ind, i) => (
            <div className="industry-card" key={ind.name} data-anim="zoom" data-delay={String(i * 75)}>
              <div className="industry-card__icon"><Icon name={ind.icon} size={28} /></div>
              <div className="industry-card__name">{ind.name}</div>
              <div className="industry-card__desc">{ind.desc}</div>
            </div>
          ))}
        </div>
      </AnimSection>
    </section>
  );
}
