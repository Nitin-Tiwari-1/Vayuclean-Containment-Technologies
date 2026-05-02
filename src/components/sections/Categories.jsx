import { Link } from "react-router-dom";
import { productCategories, getCategoryProducts } from "../../data/products";
import AnimSection from "../ui/AnimSection";
import Icon from "../ui/Icons";
import "./Categories.css";

export default function Categories() {
  return (
    <section className="hp-categories section section--gray">
      <AnimSection as="div" className="container">

        <div style={{ textAlign: "center" }}>
          <div className="tag" data-anim="fade-up">Browse by Category</div>
          <h2 className="section-title" data-anim="fade-up" data-delay="100" style={{ marginTop: "12px" }}>
            Find the Right Solution<br />for Your Process
          </h2>
          <p className="section-subtitle" data-anim="fade-up" data-delay="150">
            5 specialised product categories — each engineered for a specific pharmaceutical cleanroom application.
          </p>
          <div className="divider" data-anim="fade" data-delay="200" style={{ margin: "0 auto 48px" }}></div>
        </div>

        <div className="hp-cat-grid">
          {productCategories.map((cat, i) => (
            <Link
              key={cat.slug}
              to={`/products/${cat.slug}`}
              className="hp-cat-card"
              data-anim="fade-up"
              data-delay={String(i * 80)}
            >
              <div className="hp-cat-card__img">
                <img src={cat.image} alt={cat.name} loading="lazy" />
                <div className="hp-cat-card__img-overlay" />
                <span className="hp-cat-card__count">{getCategoryProducts(cat).length} Products</span>
              </div>
              <div className="hp-cat-card__body">
                <span className="hp-cat-card__icon"><Icon name={cat.icon} size={26} /></span>
                <div className="hp-cat-card__name">{cat.name}</div>
                <div className="hp-cat-card__desc">{cat.desc.slice(0, 90)}…</div>
                <div className="hp-cat-card__pills">
                  {cat.highlights.slice(0, 2).map(h => (
                    <span key={h} className="hp-cat-card__pill">{h}</span>
                  ))}
                </div>
                <span className="hp-cat-card__cta">Explore Category →</span>
              </div>
            </Link>
          ))}
        </div>

      </AnimSection>
    </section>
  );
}
