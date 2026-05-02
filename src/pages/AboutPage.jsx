import PageHero from '../components/ui/PageHero';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import StatsStrip from '../components/sections/StatsStrip';
import AnimSection from '../components/ui/AnimSection';
import Icon from '../components/ui/Icons';
import './AboutPage.css';

const milestones = [
  { year: '2019', title: 'Company Founded', desc: 'Vayuclean Containment Technologies was established in Vasai, Maharashtra with a vision to deliver world-class containment engineering to India\'s pharma sector.' },
  { year: '2020', title: 'First GMP Isolator Delivered', desc: 'Delivered our first OEB 4 containment isolator to a leading pharmaceutical manufacturer in Mumbai, setting the quality benchmark.' },
  { year: '2021', title: 'ISO 9001:2015 Certified', desc: 'Achieved ISO 9001:2015 certification, affirming our commitment to quality management systems and continuous improvement.' },
  { year: '2022', title: '100+ Installations', desc: 'Crossed 100 containment system installations across India including downflow booths, isolators, and RABS systems.' },
  { year: '2023', title: 'MCA Registration', desc: 'Formally incorporated as Vayuclean Containment Technologies Private Limited under the Ministry of Corporate Affairs (CIN: AC3168920).' },
  { year: '2024', title: '500+ Group Clients', desc: 'Expanded our client portfolio to 500+ group clients, serving pharmaceutical, oncology, biotech, and research organisations.' },
];

const team = [
  { name: 'Sachin Tiwari', role: 'Founder & CEO', icon: 'user-tie', desc: 'Cleanroom & containment engineering expert with 10+ years of experience in pharmaceutical manufacturing environments.' },
  { name: 'Engineering Team', role: 'Design & R&D', icon: 'cog', desc: 'In-house team of mechanical and process engineers specialising in GMP-compliant containment system design and validation.' },
  { name: 'Quality Assurance', role: 'QA & Compliance', icon: 'check-circle', desc: 'Dedicated QA team ensuring every system meets WHO, FDA, ISPE, and ISO standards before delivery.' },
  { name: 'Service Team', role: 'Installation & AMC', icon: 'wrench', desc: 'Field engineers providing on-site commissioning, qualification support, and annual maintenance contracts.' },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        tag="About Us"
        title={<>Who We Are &amp; <span className="highlight">What We Do</span></>}
        subtitle="Vayuclean Containment Technologies — India's trusted partner for precision pharmaceutical containment engineering since 2019."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
      />

      {/* Company Overview */}
      <section className="section">
        <AnimSection as="div" className="container">
          <div className="about-overview-grid" data-anim="fade-up">
            <div className="about-overview__visual">
              <div className="about-overview__card">
                <div className="about-overview__card-logo">VCT</div>
                <div className="about-overview__card-name">Vayuclean Containment Technologies</div>
                <div className="about-overview__card-sub">Private Limited</div>
                <div className="about-overview__card-stats">
                  <div><span>500+</span> Clients</div>
                  <div><span>5+</span> Years</div>
                  <div><span>OEB 1–5</span> Range</div>
                </div>
                <div className="about-overview__card-badges">
                  <span className="topbar__pill">ISO 9001:2015</span>
                  <span className="topbar__pill topbar__pill--gold">GMP Certified</span>
                  <span className="topbar__pill">MCA Registered</span>
                </div>
              </div>
            </div>
            <div className="about-overview__content">
              <div className="tag" data-anim="fade-up">Our Story</div>
              <h2 className="section-title" data-anim="fade-up" data-delay="100" style={{ marginTop: '12px' }}>
                Engineering Containment<br />You Can Trust
              </h2>
              <p className="section-subtitle" style={{ marginBottom: '24px' }}>
                Vayuclean Containment Technologies Pvt. Ltd. is a specialised manufacturer of pharmaceutical
                containment systems — downflow booths, containment isolators, RABS systems, and OEB-classified
                enclosures for the most demanding cleanroom environments.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '20px' }}>
                Founded in 2019 and headquartered in Vasai, Maharashtra, we have grown from a focused
                engineering start-up into a trusted containment partner for pharmaceutical, oncology,
                biotech, nutraceutical, and research organisations across India.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                Every system we design and manufacture is built to comply with GMP, WHO, FDA, ISPE,
                and ISO standards — combining precision engineering with stringent quality control at every stage.
              </p>
            </div>
          </div>
        </AnimSection>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Stats */}
      <StatsStrip />

      {/* Timeline */}
      <section className="section">
        <AnimSection as="div" className="container" style={{ textAlign: 'center' }}>
          <div className="tag" data-anim="fade-up">Our Journey</div>
          <h2 className="section-title" data-anim="fade-up" data-delay="100" style={{ marginTop: '12px', marginBottom: '48px' }}>
            Milestones &amp; Growth
          </h2>
          <div className="divider" data-anim="fade" data-delay="200" style={{ margin: '0 auto 56px' }}></div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div className={`timeline__item ${i % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`} key={m.year}
                data-anim={i % 2 === 0 ? 'fade-right' : 'fade-left'} data-delay={String(i * 100)}>
                <div className="timeline__year">{m.year}</div>
                <div className="timeline__dot"></div>
                <div className="timeline__card">
                  <div className="timeline__card-title">{m.title}</div>
                  <div className="timeline__card-desc">{m.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </AnimSection>
      </section>

      {/* Team */}
      <section className="section section--gray">
        <AnimSection as="div" className="container" style={{ textAlign: 'center' }}>
          <div className="tag" data-anim="fade-up">Our Team</div>
          <h2 className="section-title" data-anim="fade-up" data-delay="100" style={{ marginTop: '12px', marginBottom: '48px' }}>
            The People Behind<br />Every System
          </h2>
          <div className="divider" data-anim="fade" data-delay="200" style={{ margin: '0 auto 48px' }}></div>
          <div className="team-grid">
            {team.map((member, i) => (
              <div className="team-card" key={member.name} data-anim="fade-up" data-delay={String(i * 100)}>
                <div className="team-card__icon"><Icon name={member.icon} size={28} /></div>
                <div className="team-card__name">{member.name}</div>
                <div className="team-card__role">{member.role}</div>
                <div className="team-card__desc">{member.desc}</div>
              </div>
            ))}
          </div>
        </AnimSection>
      </section>
    </main>
  );
}
