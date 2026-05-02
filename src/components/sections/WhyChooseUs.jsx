import { oebLevels, whyPoints } from '../../data/compliance';
import AnimSection from '../ui/AnimSection';
import Icon from '../ui/Icons';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
  return (
    <section className="section section--gray" id="about">
      <AnimSection as="div" className="container">
        <div className="why-grid">
          <div className="why__left" data-anim="fade-right">
            <div className="why__image-box">
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
          <div>
            <div className="tag" data-anim="fade-up">Why Choose Us</div>
            <h2 className="section-title" data-anim="fade-up" data-delay="100" style={{ marginTop: '12px' }}>
              Engineering Containment<br />You Can Trust
            </h2>
            <p className="section-subtitle" data-anim="fade-up" data-delay="200">
              With 5+ years of dedicated expertise in containment engineering, we design and manufacture
              precision containment systems — with every product built to comply with international GMP,
              WHO, and FDA standards.
            </p>
            <div className="why__points">
              {whyPoints.map((pt, i) => (
                <div className="why__point" key={pt.title} data-anim="fade-up" data-delay={String(300 + i * 100)}>
                  <div className="why__point-icon"><Icon name={pt.icon} size={22} /></div>
                  <div>
                    <div className="why__point-title">{pt.title}</div>
                    <div className="why__point-desc">{pt.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimSection>
    </section>
  );
}
