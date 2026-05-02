import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { productCategories, getCategoryProducts, getProductImages } from "../../data/products";
import AnimSection from "../ui/AnimSection";
import Icon from "../ui/Icons";
import "./Products.css";

// Build a flat list of all products across every category
const allSlides = productCategories.flatMap((cat) => {
  const products = getCategoryProducts(cat);
  const images = getProductImages(cat.slug);
  return products.map((prod, idx) => ({ prod, cat, img: images[idx % images.length] }));
});

function productUrl(cat, product) {
  if (cat.subcategories && cat.subcategories.length > 0) {
    for (const sub of cat.subcategories) {
      if (sub.products.find((p) => p.slug === product.slug)) {
        return `/products/${cat.slug}/${sub.slug}/${product.slug}`;
      }
    }
  }
  return `/products/${cat.slug}/${product.slug}`;
}

export default function Products() {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  function scroll(dir) {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: dir * 260, behavior: "smooth" });
    }
  }

  function resetInterval() {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      const el = sliderRef.current;
      if (!el) return;
      // If at the end, loop back to start
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 260, behavior: "smooth" });
      }
    }, 3000);
  }

  useEffect(() => {
    resetInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="hp-products" id="products">
      <AnimSection as="div" className="container">

        {/* ── Header ── */}
        <div className="hp-products__head">
          <div>
            <div className="tag" data-anim="fade-up">Our Products</div>
            <h2 className="section-title" data-anim="fade-up" data-delay="100" style={{ marginTop: "12px" }}>
              60+ Products. One Trusted<br />Manufacturer.
            </h2>
          </div>
          <div className="hp-products__head-right" data-anim="fade-left" data-delay="100">
            <p className="hp-products__subtitle">
              Containment isolators, aseptic systems, washing equipment, cleanroom furniture &amp; panel systems — all designed, built and validated in-house.
            </p>
            <Link to="/products" className="btn btn-primary" style={{ fontSize: "13px", padding: "12px 28px" }}>
              Browse All Products ›
            </Link>
          </div>
        </div>

        {/* ── All-Products Slider ── */}
        <div className="hp-prod-slider-wrap" data-anim="fade-up" data-delay="150"
          onMouseEnter={() => clearInterval(intervalRef.current)}
          onMouseLeave={() => resetInterval()}
        >
          <button className="hp-slider-arr hp-slider-arr--l" onClick={() => { scroll(-1); resetInterval(); }} aria-label="Scroll left">‹</button>
          <div className="hp-prod-slider" ref={sliderRef}>
            {allSlides.map(({ prod, cat, img }) => (
              <Link
                key={`${cat.slug}-${prod.slug}`}
                to={productUrl(cat, prod)}
                className="hp-prod-card"
              >
                <div className="hp-prod-card__img">
                  <img src={img} alt={prod.name} loading="lazy" />
                  {prod.oeb && <span className="hp-prod-card__oeb">{prod.oeb}</span>}
                  <span className="hp-prod-card__cat-badge"><Icon name={cat.icon} size={11} /> {cat.shortName}</span>
                </div>
                <div className="hp-prod-card__body">
                  <div className="hp-prod-card__name">{prod.name}</div>
                  <div className="hp-prod-card__desc">{prod.desc.slice(0, 80)}…</div>
                  <div className="hp-prod-card__feats">
                    {prod.features.slice(0, 2).map((f) => (
                      <span key={f} className="hp-prod-card__feat">✓ {f}</span>
                    ))}
                  </div>
                  <span className="hp-prod-card__cta">Get Quote →</span>
                </div>
              </Link>
            ))}
            {/* View-all end card */}
            <Link to="/products" className="hp-prod-card hp-prod-card--all">
              <span className="hp-prod-card--all__icon"><Icon name="boxes" size={32} /></span>
              <span className="hp-prod-card--all__text">View All<br />{allSlides.length} Products</span>
              <span className="hp-prod-card--all__arrow">→</span>
            </Link>
          </div>
          <button className="hp-slider-arr hp-slider-arr--r" onClick={() => { scroll(1); resetInterval(); }} aria-label="Scroll right">›</button>
        </div>

        {/* ── CTA Strip ── */}
        <div className="hp-products__cta-strip" data-anim="fade-up" data-delay="250">
          <div className="hp-products__cta-strip-left">
            <strong>Need help choosing the right product?</strong>
            <span>Our engineers will recommend the best containment system for your process.</span>
          </div>
          <div className="hp-products__cta-strip-right">
            <Link to="/contact" className="btn btn-primary" style={{ fontSize: "13px", padding: "12px 28px" }}>Request a Quote</Link>
            <Link to="/products" className="btn btn-outline-dark" style={{ fontSize: "13px", padding: "12px 28px" }}>All Products</Link>
          </div>
        </div>

      </AnimSection>
    </section>
  );
}
