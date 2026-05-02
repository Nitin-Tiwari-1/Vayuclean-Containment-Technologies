import { Link } from 'react-router-dom';
import Icon from '../ui/Icons';
import './Footer.css';

const quickLinks = [
  { label: 'Home',         to: '/' },
  { label: 'About Us',     to: '/about' },
  { label: 'Products',     to: '/products' },
  { label: 'Industries',   to: '/industries' },
  { label: 'Compliance',   to: '/compliance' },
  { label: 'Gallery',      to: '/gallery' },
  { label: 'Blogs',        to: '/blogs' },
  { label: 'Contact',      to: '/contact' },
];

const productLinks = [
  { label: 'Containment Solutions',  to: '/products/containment-solutions' },
  { label: 'Washing Systems',        to: '/products/washing-systems' },
  { label: 'Clean Room Equipments',  to: '/products/cleanroom-equipment' },
  { label: 'Clean Room Furnitures',  to: '/products/cleanroom-furniture' },
  { label: 'Panel and Doors',        to: '/products/cleanroom-panels' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <Link to="/" className="footer__brand-name" style={{ textDecoration: 'none' }}>
              Vayuclean <span>Containment</span>
            </Link>
            <div className="footer__brand-sub">Technologies Pvt. Ltd.</div>
            <p className="footer__desc">
              Specialised containment engineering for pharmaceutical, biotech, oncology,
              and research industries — from OEB 1 standard booths to OEB 5 glove box isolators.
            </p>
            <div className="footer__badges">
              <span className="topbar__pill">ISO 9001:2015</span>
              <span className="topbar__pill topbar__pill--gold">GMP Certified</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="footer__col-title">Quick Links</div>
            <ul className="footer__links">
              {quickLinks.map(link => (
                <li key={link.label}><Link to={link.to}>{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <div className="footer__col-title">Products</div>
            <ul className="footer__links">
              {productLinks.map(p => (
                <li key={p.label}><Link to={p.to}>{p.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="footer__col-title">Contact</div>
            <div className="footer__contact-item">
              <span className="footer__contact-icon"><Icon name="map-marker" size={14} /></span>
              <span className="footer__contact-text">Unit 22, Phase-1, Parmar Techno Centre, Vasai (E), MH – 401208</span>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-icon"><Icon name="phone" size={14} /></span>
              <span className="footer__contact-text">+91 9967696475<br/>+91 9967640553</span>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-icon"><Icon name="envelope" size={14} /></span>
              <span className="footer__contact-text">info@vayucleancontainment.com</span>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-icon"><Icon name="clock" size={14} /></span>
              <span className="footer__contact-text">Mon–Sat: 9:00 AM – 6:00 PM</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <div className="footer__copy">
            © 2026 <strong>Vayuclean Containment Technologies Pvt. Ltd.</strong> All rights reserved.
          </div>
          <div className="footer__mca">MCA Ref: AC3168920 | CRC Approved</div>
          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
