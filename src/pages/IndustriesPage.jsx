import { industries } from '../data/industries';
import PageHero from '../components/ui/PageHero';
import AnimSection from '../components/ui/AnimSection';
import Icon from '../components/ui/Icons';
import StatsStrip from '../components/sections/StatsStrip';
import CtaSection from '../components/sections/CtaSection';
import './IndustriesPage.css';

const applications = [
  {
    industry: 'Pharmaceutical Manufacturing',
    icon: 'pills',
    products: ['Downflow Booths', 'Containment Isolators', 'Weighing & Dispensing Booths'],
    oeb: 'OEB 1–5',
    desc: 'From routine API weighing to high-potency compound handling — we cover every containment level required in pharma manufacturing.',
  },
  {
    industry: 'Oncology & HPAPI',
    icon: 'dna',
    products: ['OEB 5 Glove Box Isolators', 'Negative Pressure Rooms', 'SBV/RTP Valves'],
    oeb: 'OEB 4–5',
    desc: 'Ultra-high containment systems for cytotoxic, oncology, and HPAPI compounds requiring < 1 µg/m³ occupational exposure limits.',
  },
  {
    industry: 'Biotech & Sterile Manufacturing',
    icon: 'microscope',
    products: ['Open RABS', 'Closed RABS', 'Containment Isolators'],
    oeb: 'OEB 2–5',
    desc: 'Aseptic isolators and RABS systems compliant with EU Annex 1, USP, and FDA guidelines for biologics and sterile drug products.',
  },
  {
    industry: 'Hospital Pharmacy',
    icon: 'hospital',
    products: ['Cytotoxic Preparation Isolators', 'Laminar Airflow Units', 'Bio-Safety Cabinets'],
    oeb: 'OEB 3–5',
    desc: 'Safe chemotherapy drug preparation environments for hospital oncology units, compounding pharmacies, and clinical settings.',
  },
];

export default function IndustriesPage() {
  return (
    <main>
      <PageHero
        tag="Industries We Serve"
        title={<>Built for the Most<br /><span className="highlight">Demanding Environments</span></>}
        subtitle="Our containment systems are deployed across high-risk pharmaceutical, oncology, biotech, and research environments where operator safety is non-negotiable."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Industries' }]}
      />

      {/* Industry Cards Grid */}
      <section className="section">
        <AnimSection as="div" className="container" style={{ textAlign: 'center' }}>
          <div className="tag" data-anim="fade-up">All Industries</div>
          <h2 className="section-title" data-anim="fade-up" data-delay="100" style={{ marginTop: '12px', marginBottom: '48px' }}>
            Containment Solutions for<br />Every Sector
          </h2>
          <div className="divider" data-anim="fade" data-delay="200" style={{ margin: '0 auto 48px' }}></div>
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

      {/* Detailed Applications */}
      <section className="section section--gray">
        <AnimSection as="div" className="container">
          <div className="tag" data-anim="fade-up" style={{ display: 'block', textAlign: 'center', marginBottom: '12px' }}>Application Details</div>
          <h2 className="section-title" data-anim="fade-up" data-delay="100" style={{ marginTop: '12px', textAlign: 'center', marginBottom: '48px' }}>
            How We Serve Each Industry
          </h2>
          <div className="divider" data-anim="fade" data-delay="200" style={{ margin: '0 auto 48px' }}></div>
          <div className="industries-detail-grid">
            {applications.map((app, i) => (
              <div className="industries-detail-card" key={app.industry} data-anim="fade-up" data-delay={String(i * 150)}>
                <div className="industries-detail-card__header">
                  <div className="industries-detail-card__icon"><Icon name={app.icon} size={28} /></div>
                  <div>
                    <div className="industries-detail-card__name">{app.industry}</div>
                    <div className="industries-detail-card__oeb">{app.oeb}</div>
                  </div>
                </div>
                <p className="industries-detail-card__desc">{app.desc}</p>
                <div className="industries-detail-card__products-label">Recommended Products:</div>
                <ul className="industries-detail-card__products">
                  {app.products.map(p => <li key={p}>{p}</li>)}
                </ul>
                <a href="/contact" className="btn btn-outline-dark" style={{ fontSize: '13px', padding: '10px 20px', marginTop: '16px', display: 'inline-block' }}>
                  Request a Quote ›
                </a>
              </div>
            ))}
          </div>
        </AnimSection>
      </section>

      <StatsStrip />
      <CtaSection />
    </main>
  );
}
