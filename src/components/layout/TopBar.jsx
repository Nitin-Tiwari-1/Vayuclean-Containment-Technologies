import './TopBar.css';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container">
        <div className="topbar__inner">
          <div className="topbar__left">
            <span className="topbar__pill">ISO 9001:2015</span>
            &nbsp;
            <span className="topbar__pill topbar__pill--gold">MCA Approved</span>
            &nbsp;
            <span className="topbar__pill topbar__pill--gold">GMP Compliant</span>
          </div>
          <div className="topbar__right">
            <a href="tel:+919967696475">📞 +91 9967696475</a>
            <a href="mailto:info@vayucleancontainment.com">✉ info@vayucleancontainment.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}
