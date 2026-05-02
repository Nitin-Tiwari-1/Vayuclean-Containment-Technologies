import { useParams, Link, Navigate } from "react-router-dom";
import { findCategory, getCategoryProducts } from "../data/products";
import AnimSection from "../components/ui/AnimSection";
import Icon from "../components/ui/Icons";
import CtaSection from "../components/sections/CtaSection";
import "./ProductCategoryPage.css";

function ProductCard({ product, to, image, delay }) {
  return (
    <Link to={to} className="pcat-card" data-anim="fade-up" data-delay={String(delay)}>
      <div className="pcat-card__thumb">
        {image && (
          <img src={image} alt={product.name} loading="lazy"
            onError={e => { e.target.style.display = "none"; }} />
        )}
        <div className="pcat-card__thumb-icon"><Icon name={product.icon} size={24} /></div>
        {product.oeb && <span className="pcat-card__oeb">{product.oeb}</span>}
      </div>
      <div className="pcat-card__body">
        <div className="pcat-card__name">{product.name}</div>
        <div className="pcat-card__desc">{product.desc}</div>
        <div className="pcat-card__feats">
          {product.features.slice(0, 3).map(f => (
            <span key={f} className="pcat-card__feat">{f}</span>
          ))}
        </div>
        <div className="pcat-card__link">View Details →</div>
      </div>
    </Link>
  );
}

export default function ProductCategoryPage() {
  const { categorySlug } = useParams();
  const category = findCategory(categorySlug);
  if (!category) return <Navigate to="/products" replace />;

  const hasSubs = category.subcategories?.length > 0;
  const flatProducts = getCategoryProducts(category);

  return (
    <main>
      {/* ── Category Hero Banner ─────────────────────────────── */}
      <div className="cat-hero">
        {category.image && (
          <div className="cat-hero__img-wrap">
            <img src={category.image} alt={category.name} className="cat-hero__img" />
            <div className="cat-hero__overlay" />
          </div>
        )}
        <div className="container cat-hero__content">
          <nav className="cat-hero__breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to="/products">Products</Link>
            <span>›</span>
            <span>{category.name}</span>
          </nav>
          <div className="cat-hero__icon"><Icon name={category.icon} size={36} /></div>
          <h1 className="cat-hero__title">{category.name}</h1>
          <p className="cat-hero__desc">{category.desc}</p>
          <div className="cat-hero__pills">
            {category.highlights.map(h => (
              <span key={h} className="cat-hero__pill">{h}</span>
            ))}
          </div>
          <div className="cat-hero__stat">
            {hasSubs
              ? <><strong>{category.subcategories.length}</strong> Subcategories &nbsp;·&nbsp; <strong>{flatProducts.length}+</strong> Products</>
              : <><strong>{flatProducts.length}</strong> Products Available</>
            }
          </div>
        </div>
      </div>

      {hasSubs ? (
        /* ── Subcategory card grid ─────────────────────────── */
        <section className="section">
          <AnimSection as="div" className="container">
            <div className="cat-section-head" data-anim="fade-up">
              <div className="tag">Browse by Type</div>
              <h2 className="section-title" style={{ marginTop: "12px" }}>
                Select a Subcategory
              </h2>
              <p className="section-subtitle">
                Choose the product type that fits your process requirements.
              </p>
            </div>

            <div className="subcat-card-grid">
              {category.subcategories.map((sub, i) => (
                <Link
                  key={sub.slug}
                  to={`/products/${categorySlug}/${sub.slug}`}
                  className="subcat-card"
                  data-anim="fade-up"
                  data-delay={String(i * 80)}
                >
                  <div className="subcat-card__img-wrap">
                    <img
                      src={sub.image || category.image}
                      alt={sub.name}
                      loading="lazy"
                      onError={e => { e.target.style.display = "none"; }}
                    />
                    <div className="subcat-card__img-overlay" />
                    <div className="subcat-card__count-badge">{sub.products.length} Products</div>
                  </div>
                  <div className="subcat-card__body">
                    <div className="subcat-card__top">
                      <span className="subcat-card__icon"><Icon name={sub.icon} size={22} /></span>
                      <span className="subcat-card__name">{sub.name}</span>
                    </div>
                    <p className="subcat-card__desc">{sub.desc}</p>
                    <div className="subcat-card__cta">Browse Products →</div>
                  </div>
                </Link>
              ))}
            </div>
          </AnimSection>
        </section>
      ) : (
        /* ── Flat product grid ─────────────────────────────── */
        <section className="section">
          <AnimSection as="div" className="container">
            <div className="cat-section-head" data-anim="fade-up">
              <div className="tag">All Products</div>
              <h2 className="section-title" style={{ marginTop: "12px" }}>
                {category.name}
              </h2>
            </div>
            <div className="pcat-grid">
              {flatProducts.map((product, pi) => (
                <ProductCard
                  key={product.slug}
                  product={product}
                  to={`/products/${categorySlug}/${product.slug}`}
                  image={category.image}
                  delay={(pi % 3) * 100}
                />
              ))}
            </div>
          </AnimSection>
        </section>
      )}

      <CtaSection />
    </main>
  );
}
