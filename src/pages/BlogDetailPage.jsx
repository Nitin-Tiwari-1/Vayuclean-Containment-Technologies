import { useParams, Link, Navigate } from 'react-router-dom';
import { blogs } from '../data/blogs';
import AnimSection from '../components/ui/AnimSection';
import Icon from '../components/ui/Icons';
import CtaSection from '../components/sections/CtaSection';
import './BlogsPage.css';
import './BlogDetailPage.css';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const blog = blogs.find(b => b.slug === slug);
  const related = blogs.filter(b => b.slug !== slug).slice(0, 3);

  if (!blog) return <Navigate to="/blogs" replace />;

  return (
    <main>
      {/* Article Hero */}
      <section className="blog-detail-hero">
        <div className="blog-detail-hero__bg"></div>
        <div className="blog-detail-hero__grid"></div>
        <div className="blog-detail-hero__glow"></div>
        <AnimSection as="div" className="container blog-detail-hero__inner">
          {/* Breadcrumb */}
          <div className="blog-detail-hero__breadcrumb" data-anim="fade-down">
            <Link to="/">Home</Link>
            <span> › </span>
            <Link to="/blogs">Blogs</Link>
            <span> › </span>
            <span>{blog.category}</span>
          </div>

          {/* Badge row */}
          <div className="blog-detail-hero__badges" data-anim="fade-up" data-delay="100">
            <span className="blog-detail-hero__cat">{blog.category}</span>
            <span className="blog-detail-hero__tag">{blog.tag}</span>
          </div>

          <h1 className="blog-detail-hero__title" data-anim="fade-up" data-delay="200">{blog.title}</h1>

          {/* Author + Meta */}
          <div className="blog-detail-hero__meta" data-anim="fade-up" data-delay="300">
            <div className="blog-card__avatar" style={{ width: 44, height: 44, fontSize: 14 }}>
              {blog.author.initial}
            </div>
            <div>
              <div className="blog-detail-hero__author-name">{blog.author.name}</div>
              <div className="blog-detail-hero__author-role">
                {blog.author.role} · {blog.date} · {blog.readTime}
              </div>
            </div>
          </div>
        </AnimSection>
      </section>

      {/* Article Body */}
      <section className="section">
        <AnimSection as="div" className="container blog-detail-layout">

          {/* Main Content */}
          <article className="blog-detail-article" data-anim="fade-right">
            {/* Excerpt as lead */}
            <p className="blog-detail-article__lead">{blog.excerpt}</p>

            {blog.content.map((block, i) => {
              if (block.type === 'intro') return (
                <div className="blog-detail-article__intro" key={i}>
                  {block.text}
                </div>
              );
              if (block.type === 'heading') return (
                <h2 className="blog-detail-article__h2" key={i}>{block.text}</h2>
              );
              if (block.type === 'text') return (
                <p className="blog-detail-article__p" key={i}>{block.text}</p>
              );
              return null;
            })}

            {/* Tags */}
            <div className="blog-detail-article__tags">
              <span className="blog-detail-article__tags-label">Tags:</span>
              {blog.tags.map(tag => (
                <span className="blog-detail-article__tag" key={tag}>{tag}</span>
              ))}
            </div>

            {/* Share / CTA strip */}
            <div className="blog-detail-article__cta-strip">
              <div>
                <div className="blog-detail-article__cta-title">Have a containment requirement?</div>
                <div className="blog-detail-article__cta-desc">Our engineers are ready to recommend the right solution for your facility.</div>
              </div>
              <Link to="/contact" className="btn btn-primary" style={{ fontSize: '14px', padding: '14px 28px', flexShrink: 0 }}>
                Request a Free Consultation ›
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="blog-detail-sidebar" data-anim="fade-left">

            {/* Author Card */}
            <div className="blog-sidebar-card">
              <div className="blog-sidebar-card__title">About the Author</div>
              <div className="blog-detail-hero__meta" style={{ marginTop: '12px', gap: '12px' }}>
                <div className="blog-card__avatar" style={{ width: 48, height: 48, fontSize: 15, flexShrink: 0 }}>
                  {blog.author.initial}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--navy)', fontSize: 14 }}>{blog.author.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 3 }}>{blog.author.role}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>Vayuclean Containment Technologies</div>
                </div>
              </div>
            </div>

            {/* Tags Card */}
            <div className="blog-sidebar-card">
              <div className="blog-sidebar-card__title">Topics</div>
              <div className="blog-sidebar-tags">
                {blog.tags.map(tag => (
                  <span className="blog-detail-article__tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="blog-sidebar-card">
              <div className="blog-sidebar-card__title">Quick Links</div>
              <ul className="blog-sidebar-links">
                <li><Link to="/products">Our Products</Link></li>
                <li><Link to="/compliance">Standards & Compliance</Link></li>
                <li><Link to="/contact">Request a Quote</Link></li>
                <li><Link to="/about">About Vayuclean</Link></li>
              </ul>
            </div>

          </aside>
        </AnimSection>
      </section>

      {/* Related Articles */}
      <section className="section section--gray">
        <AnimSection as="div" className="container">
          <div className="tag" data-anim="fade-up" style={{ marginBottom: '12px' }}>More Articles</div>
          <h2 className="section-title" data-anim="fade-up" data-delay="100" style={{ marginTop: 0, marginBottom: '40px' }}>Related Articles</h2>
          <div className="blogs-grid">
            {related.map((b, i) => (
              <Link to={`/blogs/${b.slug}`} className="blog-card" key={b.id} data-anim="fade-up" data-delay={String(i * 150)}>
                <div className="blog-card__visual">
                  <div className="blog-card__icon"><Icon name={b.icon} size={22} /></div>
                  <div className="blog-card__tag">{b.tag}</div>
                </div>
                <div className="blog-card__body">
                  <div className="blog-card__meta">
                    <span className="blog-card__cat">{b.category}</span>
                    <span className="blog-card__dot">·</span>
                    <span>{b.readTime}</span>
                  </div>
                  <div className="blog-card__title">{b.title}</div>
                  <div className="blog-card__excerpt">{b.excerpt}</div>
                  <div className="blog-card__footer">
                    <div className="blog-card__author-row">
                      <div className="blog-card__avatar">{b.author.initial}</div>
                      <div className="blog-card__author-name">{b.author.name}</div>
                    </div>
                    <span className="blog-card__date">{b.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </AnimSection>
      </section>

      <CtaSection />
    </main>
  );
}
