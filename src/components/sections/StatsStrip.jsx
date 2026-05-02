import AnimSection from '../ui/AnimSection';
import './StatsStrip.css';

const stats = [
  { num: '500+',    label: 'Group Clients Across India' },
  { num: 'OEB 1–5', label: 'Full Containment Range' },
  { num: '5+ Yrs',  label: 'Cleanroom Engineering Experience' },
  { num: 'ISO',     label: '9001:2015 Certified' },
];

export default function StatsStrip() {
  return (
    <AnimSection as="div" className="stats-strip">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={s.label} data-anim="fade-up" data-delay={String(i * 100)}>
              <div className="stat__num">{s.num}</div>
              <div className="stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </AnimSection>
  );
}
