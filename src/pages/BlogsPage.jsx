import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import PageHero from '../components/ui/PageHero';
import AnimSection from '../components/ui/AnimSection';
import Icon from '../components/ui/Icons';
import CtaSection from '../components/sections/CtaSection';
import './BlogsPage.css';

const categories = ['All', 'Education', 'Product Guide', 'Compliance', 'Technical', 'Industry Insight'];

export default function BlogsPage() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? blogs : blogs.filter(b => b.category === active);

  return (
    <main>
      <PageHero
        tag="Blogs & Articles"
        title={<>Containment Knowledge<br /><span className="highlight">Hub</span></>}
        subtitle="Expert insights on pharmaceutical containment, OEB classification, GMP compliance, and cleanroom engineering — from the Vayuclean team."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Blogs' }]}
      />

      <section className="section">
        <AnimSection as="div" className="container">

          {/* Category Filter */}
          <div className="blogs-filter" data-anim="fade-up">
            {categories.map(cat => (
              <button
                key={cat}
                className={`blogs-filter__btn ${active === cat ? 'active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Post — first blog */}
          {active === 'All' && (
            <Link to={`/blogs/${blogs[0].slug}`} className="blog-featured" data-anim="fade-up" data-delay="100">
              <div className="blog-featured__visual">
                <div className="blog-featured__icon"><Icon name={blogs[0].icon} size={28} /></div>
                <div className="blog-featured__badge">{blogs[0].tag}</div>
              </div>
              <div className="blog-featured__body">
                <div className="blog-featured__meta">
                  <span className="blog-card__cat">{blogs[0].category}</span>
                  <span className="blog-card__dot">·</span>
                  <span>{blogs[0].date}</span>
                  <span className="blog-card__dot">·</span>
                  <span>{blogs[0].readTime}</span>
                </div>
                <h2 className="blog-featured__title">{blogs[0].title}</h2>
                <p className="blog-featured__excerpt">{blogs[0].excerpt}</p>
                <div className="blog-featured__author">
                  <div className="blog-card__avatar">{blogs[0].author.initial}</div>
                  <div>
                    <div className="blog-card__author-name">{blogs[0].author.name}</div>
                    <div className="blog-card__author-role">{blogs[0].author.role}</div>
                  </div>
                </div>
                <span className="blog-featured__read">Read Article ›</span>
              </div>
            </Link>
          )}

          {/* Blog Grid */}
          <div className="blogs-grid">
            {(active === 'All' ? filtered.slice(1) : filtered).map((blog, i) => (
              <Link to={`/blogs/${blog.slug}`} className="blog-card" key={blog.id} data-anim="fade-up" data-delay={String((i % 3) * 150)}>
                <div className="blog-card__visual">
                  <div className="blog-card__icon"><Icon name={blog.icon} size={22} /></div>
                  <div className="blog-card__tag">{blog.tag}</div>
                </div>
                <div className="blog-card__body">
                  <div className="blog-card__meta">
                    <span className="blog-card__cat">{blog.category}</span>
                    <span className="blog-card__dot">·</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <div className="blog-card__title">{blog.title}</div>
                  <div className="blog-card__excerpt">{blog.excerpt}</div>
                  <div className="blog-card__footer">
                    <div className="blog-card__author-row">
                      <div className="blog-card__avatar">{blog.author.initial}</div>
                      <div className="blog-card__author-name">{blog.author.name}</div>
                    </div>
                    <span className="blog-card__date">{blog.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
              No articles in this category yet. Check back soon.
            </div>
          )}
        </AnimSection>
      </section>

      {/* Newsletter strip */}
      <section className="section section--navy">
        <div className="container">
          <div className="blog-newsletter">
            <div>
              <div className="tag" style={{ background: 'rgba(0,242,254,0.15)', color: 'var(--cyan)', marginBottom: '12px' }}>Stay Updated</div>
              <h2 style={{ color: '#fff', fontSize: '1.8rem', fontWeight: 800, margin: '0 0 8px' }}>
                Get Containment Insights in Your Inbox
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.55)', margin: 0, fontSize: '14px' }}>
                New articles on OEB classification, GMP compliance, and industry trends — straight to you.
              </p>
            </div>
            <form className="blog-newsletter__form" onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="Enter your work email" required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
