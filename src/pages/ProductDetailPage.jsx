import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  findCategory,
  getCategorySpecs,
  getCategoryHighlights,
  getCategoryStandards,
  getCategoryProducts,
  getProductImages,
} from "../data/products";
import AnimSection from "../components/ui/AnimSection";
import Icon from "../components/ui/Icons";
import CtaSection from "../components/sections/CtaSection";
import "./ProductDetailPage.css";
import "./ProductCategoryPage.css";

/* ── Image Slider ──────────────────────────────────────────────── */
function ImageSlider({ images, name }) {
  const [idx, setIdx] = useState(0);
  if (!images.length) return null;
  const prev = () => setIdx(i => (i + images.length - 1) % images.length);
  const next = () => setIdx(i => (i + 1) % images.length);
  return (
    <div className="img-slider">
      <div className="img-slider__viewport">
        <div
          className="img-slider__track"
          style={{ transform: `translateX(-${idx * 100}%)` }}
        >
          {images.map((src, i) => (
            <div key={i} className="img-slider__slide">
              <img src={src} alt={`${name} — view ${i + 1}`} loading={i === 0 ? "eager" : "lazy"} />
            </div>
          ))}
        </div>
        {images.length > 1 && (
          <>
            <button className="img-slider__arrow img-slider__arrow--l" onClick={prev} aria-label="Previous">‹</button>
            <button className="img-slider__arrow img-slider__arrow--r" onClick={next} aria-label="Next">›</button>
          </>
        )}
        <div className="img-slider__counter">{idx + 1} / {images.length}</div>
      </div>
      {images.length > 1 && (
        <div className="img-slider__thumbs">
          {images.map((src, i) => (
            <button
              key={i}
              className={`img-slider__thumb ${i === idx ? "active" : ""}`}
              onClick={() => setIdx(i)}
              aria-label={`View ${i + 1}`}
            >
              <img src={src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Main component (3-level: category / subcategory / product) ── */
export default function ProductDetailPage() {
  const { categorySlug, subcatSlug, productSlug } = useParams();

  const category = findCategory(categorySlug);
  if (!category) return <Navigate to="/products" replace />;

  const subcategory = category.subcategories?.find(s => s.slug === subcatSlug);
  if (!subcategory) return <Navigate to={`/products/${categorySlug}`} replace />;

  const product = subcategory.products?.find(p => p.slug === productSlug);
  if (!product) return <Navigate to={`/products/${categorySlug}/${subcatSlug}`} replace />;

  const specs      = product.specs      || getCategorySpecs(categorySlug);
  const highlights = product.highlights || getCategoryHighlights(categorySlug);
  const standards  = product.standards  || getCategoryStandards(categorySlug);
  const validation = product.validation || ["DQ", "IQ", "OQ", "PQ"];
  const fullDesc   = product.fullDesc   || product.desc;
  const images     = getProductImages(categorySlug);

  // Related: up to 3 others from same subcategory
  const related = subcategory.products
    .filter(p => p.slug !== productSlug)
    .slice(0, 3);

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="pd-hero">
        <div className="pd-hero__bg"></div>
        <div className="pd-hero__grid"></div>
        <div className="pd-hero__glow"></div>

        <AnimSection as="div" className="container pd-hero__inner">
          <div className="pd-hero__breadcrumb" data-anim="fade-down">
            <Link to="/">Home</Link>
            <span> › </span>
            <Link to="/products">Products</Link>
            <span> › </span>
            <Link to={`/products/${categorySlug}`}>{category.shortName}</Link>
            <span> › </span>
            <Link to={`/products/${categorySlug}/${subcatSlug}`}>{subcategory.name}</Link>
            <span> › </span>
            <span>{product.name}</span>
          </div>

          <div className="pd-hero__content">
            {/* Left text */}
            <div className="pd-hero__left" data-anim="fade-up" data-delay="100">
              <div className="pd-hero__badge-row">
                <span className="pd-hero__cat">{subcategory.name}</span>
                {product.oeb && <span className="pd-hero__oeb">{product.oeb}</span>}
              </div>
              <h1 className="pd-hero__title">{product.name}</h1>
              <p className="pd-hero__desc">{fullDesc}</p>
              <div className="pd-hero__feats">
                {product.features.map(f => (
                  <span className="pd-feat-pill" key={f}>{f}</span>
                ))}
              </div>
              <div className="pd-hero__actions">
                <Link to="/contact" className="btn btn-primary" style={{ fontSize: "14px", padding: "14px 32px" }}>
                  Request a Quote ›
                </Link>
                <Link to="/contact" className="btn btn-outline" style={{ fontSize: "14px", padding: "14px 32px" }}>
                  Download Datasheet
                </Link>
              </div>
            </div>

            {/* Right – image slider */}
            <div className="pd-hero__right" data-anim="fade-left" data-delay="200">
              <ImageSlider images={images} name={product.name} />
              <div className="pd-hero__quick-specs">
                {specs.slice(0, 4).map(s => (
                  <div className="pd-quick-spec" key={s.label}>
                    <div className="pd-quick-spec__label">{s.label}</div>
                    <div className="pd-quick-spec__value">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimSection>
      </section>

      {/* ── Key Highlights ────────────────────────────────────── */}
      <section className="section">
        <AnimSection as="div" className="container">
          <div className="tag" data-anim="fade-up">Key Features</div>
          <h2 className="section-title" data-anim="fade-up" data-delay="100"
            style={{ marginTop: "12px", marginBottom: "40px" }}>
            What Makes This System<br />Stand Out
          </h2>
          <div className="pd-highlights-grid">
            {highlights.map((h, i) => (
              <div className="pd-highlight-card" key={h.title} data-anim="fade-up" data-delay={String(i * 100)}>
                <div className="pd-highlight-card__icon"><Icon name={h.icon} size={22} /></div>
                <div className="pd-highlight-card__title">{h.title}</div>
                <div className="pd-highlight-card__desc">{h.desc}</div>
              </div>
            ))}
          </div>
        </AnimSection>
      </section>

      {/* ── Specifications ────────────────────────────────────── */}
      <section className="section section--gray">
        <AnimSection as="div" className="container">
          <div className="pd-specs-layout">
            <div data-anim="fade-right">
              <div className="tag">Technical Data</div>
              <h2 className="section-title" style={{ marginTop: "12px", marginBottom: "32px" }}>
                Typical Specifications
              </h2>
              <div className="pd-spec-table">
                {specs.map((s, i) => (
                  <div className={`pd-spec-row ${i % 2 === 0 ? "pd-spec-row--alt" : ""}`} key={s.label}>
                    <div className="pd-spec-row__label">{s.label}</div>
                    <div className="pd-spec-row__value">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pd-specs-side" data-anim="fade-left">
              <div className="pd-side-card">
                <div className="pd-side-card__title">Applications</div>
                <ul className="pd-side-list">
                  {product.applications.map(a => <li key={a}>{a}</li>)}
                </ul>
              </div>
              <div className="pd-side-card">
                <div className="pd-side-card__title">Regulatory Standards</div>
                <ul className="pd-side-list">
                  {standards.map(s => <li key={s}>{s}</li>)}
                </ul>
              </div>
              <div className="pd-side-card">
                <div className="pd-side-card__title">Validation Support</div>
                <ul className="pd-side-list">
                  {validation.map(v => <li key={v}>{v}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </AnimSection>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────── */}
      <section className="pd-enquiry-banner">
        <div className="pd-enquiry-banner__bg"></div>
        <div className="container pd-enquiry-banner__inner">
          <div>
            <div className="tag" style={{ background: "rgba(0,242,254,0.15)", color: "var(--cyan)", marginBottom: "12px" }}>
              Get a Quote
            </div>
            <h2 className="pd-enquiry-banner__title">
              Ready to specify the {product.name}?
            </h2>
            <p className="pd-enquiry-banner__desc">
              Share your process details and our engineers will prepare a detailed technical proposal and quote.
            </p>
          </div>
          <div className="pd-enquiry-banner__actions">
            <Link to="/contact" className="btn btn-primary" style={{ fontSize: "15px", padding: "16px 36px" }}>
              Request a Quote ›
            </Link>
            <Link to="/contact" className="btn btn-outline" style={{ fontSize: "15px", padding: "16px 36px" }}>
              Talk to an Engineer
            </Link>
          </div>
        </div>
      </section>

      {/* ── Related Products ──────────────────────────────────── */}
      {related.length > 0 && (
        <section className="section">
          <AnimSection as="div" className="container">
            <div className="tag" data-anim="fade-up">More from {subcategory.name}</div>
            <h2 className="section-title" data-anim="fade-up" data-delay="100"
              style={{ marginTop: "12px", marginBottom: "40px" }}>
              Related Products
            </h2>
            <div className="pcat-grid">
              {related.map((rp, i) => (
                <Link
                  key={rp.slug}
                  to={`/products/${categorySlug}/${subcatSlug}/${rp.slug}`}
                  className="pcat-card"
                  data-anim="fade-up"
                  data-delay={String(i * 100)}
                >
                  <div className="pcat-card__thumb">
                    {(subcategory.image || category.image) && (
                      <img src={subcategory.image || category.image} alt={rp.name} loading="lazy" />
                    )}
                    <div className="pcat-card__thumb-icon"><Icon name={rp.icon} size={24} /></div>
                    {rp.oeb && <span className="pcat-card__oeb">{rp.oeb}</span>}
                  </div>
                  <div className="pcat-card__body">
                    <div className="pcat-card__name">{rp.name}</div>
                    <div className="pcat-card__desc">{rp.desc}</div>
                    <div className="pcat-card__feats">
                      {rp.features.slice(0, 2).map(f => (
                        <span key={f} className="pcat-card__feat">{f}</span>
                      ))}
                    </div>
                    <div className="pcat-card__link">View Details →</div>
                  </div>
                </Link>
              ))}
            </div>
          </AnimSection>
        </section>
      )}

      <CtaSection />
    </main>
  );
}
