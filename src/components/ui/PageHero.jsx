import './PageHero.css';

export default function PageHero({ tag, title, subtitle, breadcrumb }) {
  return (
    <section className="page-hero">
      <div className="page-hero__bg"></div>
      <div className="page-hero__grid-overlay"></div>
      <div className="page-hero__glow"></div>
      <div className="page-hero__inner container">
        {tag && <div className="page-hero__tag">{tag}</div>}
        <h1 className="page-hero__title">{title}</h1>
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
        {breadcrumb && (
          <div className="page-hero__breadcrumb">
            {breadcrumb.map((crumb, i) => (
              <span key={i}>
                {i > 0 && <span className="page-hero__sep"> › </span>}
                {crumb.href ? (
                  <a href={crumb.href}>{crumb.label}</a>
                ) : (
                  <span className="page-hero__current">{crumb.label}</span>
                )}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
