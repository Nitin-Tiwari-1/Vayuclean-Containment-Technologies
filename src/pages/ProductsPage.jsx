import { Link } from "react-router-dom";
import { productCategories, getCategoryProducts } from "../data/products";
import PageHero from "../components/ui/PageHero";
import AnimSection from "../components/ui/AnimSection";
import Icon from "../components/ui/Icons";
import CtaSection from "../components/sections/CtaSection";
import "./ProductsPage.css";

export default function ProductsPage() {
  return (
    <main>
      <PageHero
        tag="Our Products"
        title={<>Complete Pharmaceutical<br /><span className="highlight">Cleanroom Solutions</span></>}
        subtitle="From containment isolators and washing systems to clean room equipment, furniture, and modular panel systems — everything your facility needs, under one roof."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Products" }]}
      />

      <section className="section">
        <AnimSection as="div" className="container">
          <div className="prod-intro" data-anim="fade-up">
            <div className="tag">5 Product Categories</div>
            <h2 className="section-title" style={{ marginTop: "12px" }}>
              Select a Category to<br />Explore Our Full Range
            </h2>
            <p className="section-subtitle">
              60+ products across 5 specialised categories — designed, manufactured, and validated in our
              ISO 9001:2015 certified facility in Vasai, Maharashtra.
            </p>
          </div>

          <div className="cat-grid">
            {productCategories.map((cat, i) => {
              const count = getCategoryProducts(cat).length;
              return (
                <Link
                  to={`/products/${cat.slug}`}
                  className={`cat-card cat-card--${cat.slug}`}
                  key={cat.slug}
                  data-anim="fade-up"
                  data-delay={String(i * 100)}
                >
                  {cat.image && (
                    <div className="cat-card__img">
                      <img src={cat.image} alt={cat.name} loading="lazy" />
                      <div className="cat-card__img-overlay" />
                    </div>
                  )}
                  <div className="cat-card__icon"><Icon name={cat.icon} size={28} /></div>
                  <div className="cat-card__body">
                    <div className="cat-card__name">{cat.name}</div>
                    <div className="cat-card__desc">{cat.desc}</div>
                    <div className="cat-card__highlights">
                      {cat.highlights.map(h => (
                        <span key={h} className="cat-card__hl">{h}</span>
                      ))}
                    </div>
                    <div className="cat-card__footer">
                      <span className="cat-card__count">{count} Products</span>
                      <span className="cat-card__cta">Explore →</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </AnimSection>
      </section>

      <CtaSection />
    </main>
  );
}
