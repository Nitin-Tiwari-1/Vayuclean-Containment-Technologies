import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Icon from "../ui/Icons";
import "./Hero.css";

const SLIDES = [
  {
    bg: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=85",
    badge: "OEB 1–5 Containment · SMEPAC Certified",
    tag: "Containment Isolators",
    title: <>Advanced<br /><span className="highlight">Containment</span><br />Solutions for Pharma</>,
    desc: "Precision-engineered glove-port isolators and downflow booths protecting operators, products, and the environment — fully GMP, WHO, and FDA compliant.",
    cta1: { label: "Explore Products ›", to: "/products" },
    cta2: { label: "Request a Quote", to: "/contact" },
    specs: [
      { key: "OEB Level", val: "4 / 5" },
      { key: "Containment", val: "< 1 µg/m³" },
      { key: "Filter", val: "HEPA H14" },
      { key: "Material", val: "SS 316L" },
    ],
  },
  {
    bg: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1600&q=85",
    badge: "EU Annex 1 · ISO 5 / Grade A",
    tag: "Aseptic Isolators",
    title: <>Sterile Fill-Finish<br /><span className="highlight">Aseptic</span><br />Isolators &amp; RABS</>,
    desc: "Positive-pressure aseptic isolators and cRABS/oRABS systems for vial, ampoule, and syringe filling — designed to EU Annex 1 and USP requirements.",
    cta1: { label: "View Aseptic Range ›", to: "/products/containment-solutions" },
    cta2: { label: "Talk to an Engineer", to: "/contact" },
    specs: [
      { key: "Grade", val: "ISO Class 5 / A" },
      { key: "VHP Cycle", val: "6-Log Reduction" },
      { key: "Compliance", val: "EU Annex 1" },
      { key: "Material", val: "SS 316L" },
    ],
  },
  {
    bg: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1600&q=85",
    badge: "ISO 14644 · GMP Certified",
    tag: "Cleanroom Solutions",
    title: <>Complete<br /><span className="highlight">Cleanroom</span><br />Equipment &amp; Panels</>,
    desc: "Laminar airflow units, biological safety cabinets, pass boxes, air showers, modular panels, and GMP stainless steel furniture — all under one roof.",
    cta1: { label: "Cleanroom Range ›", to: "/products/cleanroom-equipment" },
    cta2: { label: "Get a Proposal", to: "/contact" },
    specs: [
      { key: "ISO Class", val: "3 – 8" },
      { key: "Filtration", val: "HEPA H14" },
      { key: "Standard", val: "ISO 14644" },
      { key: "Material", val: "SS 304 / 316L" },
    ],
  },
];

const AUTO_PLAY_MS = 5500;

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((next) => {
    setFading(true);
    setTimeout(() => {
      setIdx(next);
      setFading(false);
    }, 420);
  }, []);

  const prev = () => goTo((idx + SLIDES.length - 1) % SLIDES.length);
  const next = useCallback(() => goTo((idx + 1) % SLIDES.length), [idx, goTo]);

  useEffect(() => {
    const t = setTimeout(next, AUTO_PLAY_MS);
    return () => clearTimeout(t);
  }, [idx, next]);

  const slide = SLIDES[idx];

  return (
    <section className="hero">
      {/* Background images (cross-fade) */}
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className={`hero__bg-slide ${i === idx ? "hero__bg-slide--active" : ""}`}
          style={{ backgroundImage: `url(${s.bg})` }}
        />
      ))}
      <div className="hero__bg-overlay" />
      <div className="hero__grid-overlay" />
      <div className="hero__glow" />

      {/* Content */}
      <div className={`hero__inner container ${fading ? "hero__inner--fade" : ""}`}>
        {/* Left */}
        <div className="hero__content">
          <div className="hero__badge">
            <div className="hero__badge-dot" />
            <span className="hero__badge-text">{slide.badge}</span>
          </div>
          <div className="hero__tag">{slide.tag}</div>
          <h1 className="hero__title">{slide.title}</h1>
          <p className="hero__desc">{slide.desc}</p>
          <div className="hero__actions">
            <Link to={slide.cta1.to} className="btn btn-primary">{slide.cta1.label}</Link>
            <Link to={slide.cta2.to} className="btn btn-outline">{slide.cta2.label}</Link>
          </div>

          {/* Slide controls */}
          <div className="hero__controls">
            <button className="hero__arr" onClick={prev} aria-label="Previous">‹</button>
            <div className="hero__dots">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  className={`hero__dot ${i === idx ? "active" : ""}`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button className="hero__arr" onClick={next} aria-label="Next">›</button>
            <div className="hero__progress">
              <div
                className="hero__progress-bar"
                key={idx}
                style={{ animationDuration: `${AUTO_PLAY_MS}ms` }}
              />
            </div>
          </div>

          <div className="hero__stats">
            <div><div className="hero__stat-num">OEB <span>1–5</span></div><div className="hero__stat-label">Containment Levels</div></div>
            <div><div className="hero__stat-num"><span>500+</span></div><div className="hero__stat-label">Group Clients</div></div>
            <div><div className="hero__stat-num"><span>GMP</span></div><div className="hero__stat-label">Compliant Design</div></div>
          </div>
        </div>

        {/* Right – spec card */}
        <div className="hero__visual">
          <div className="hero__card-main">
            <div className="hero__card-label">{slide.tag}</div>
            <div className="hero__card-title">{slide.title}</div>
            <p className="hero__card-desc">{slide.desc}</p>
            <div className="hero__spec-grid">
              {slide.specs.map(({ key, val }) => (
                <div className="hero__spec" key={key}>
                  <div className="hero__spec-key">{key}</div>
                  <div className="hero__spec-val">{val}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero__card-mini-grid">
            {[
              { icon: "industry", name: "Downflow Booths" },
              { icon: "flask", name: "Glove Box Isolators" },
              { icon: "microscope", name: "RABS Systems" },
              { icon: "shield", name: "OEB Containment" },
            ].map(({ icon, name }) => (
              <div className="hero__mini-card" key={name}>
                <div className="hero__mini-icon"><Icon name={icon} size={20} /></div>
                <div className="hero__mini-name">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide number */}
      <div className="hero__slide-num">
        <span className="hero__slide-cur">{String(idx + 1).padStart(2, "0")}</span>
        <span className="hero__slide-sep">/</span>
        <span className="hero__slide-total">{String(SLIDES.length).padStart(2, "0")}</span>
      </div>
    </section>
  );
}
