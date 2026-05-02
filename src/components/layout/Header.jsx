import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

const navItems = [
  { label: 'Home',       to: '/' },
  { label: 'About',      to: '/about' },
  { label: 'Products',   to: '/products' },
  { label: 'Industries', to: '/industries' },
  { label: 'Compliance', to: '/compliance' },
  { label: 'Gallery',    to: '/gallery' },
  { label: 'Blogs',      to: '/blogs' },
  { label: 'Contact',    to: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header__inner container">
        {/* Logo */}
        <Link to="/" className="logo">
          <div className="logo__icon">VCT</div>
          <div className="logo__text">
            <div className="logo__name">Vayuclean <span>Containment</span></div>
            <div className="logo__sub">Technologies Pvt. Ltd.</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="nav-links">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) => isActive ? 'nav-active' : ''}
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="header__cta">
          <Link to="/contact" className="btn btn-outline-dark" style={{ fontSize: '13px', padding: '10px 20px' }}>
            Download Catalogue
          </Link>
          <Link to="/contact" className="btn btn-primary" style={{ fontSize: '13px', padding: '10px 20px' }}>
            Request Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <div className="mobile-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) => isActive ? 'nav-active' : ''}
              end={item.to === '/'}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-primary mobile-nav__cta" onClick={() => setMobileOpen(false)}>
            Request Quote
          </Link>
        </div>
      )}
    </header>
  );
}
