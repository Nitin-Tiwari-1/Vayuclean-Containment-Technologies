import './TrustStrip.css';

export default function TrustStrip() {
  const certs = ['ISO 9001:2015 Certified', 'MCA CIN Approved', 'WHO GMP Compliant', 'EU GMP Annex 1'];

  return (
    <div className="trust-strip">
      <div className="container">
        <div className="trust-strip__inner">
          {certs.map((cert, i) => (
            <span key={cert} className="trust-strip__item">
              <span className="trust-strip__cert">{cert}</span>
              {i < certs.length - 1 && <span className="trust-strip__sep">|</span>}
            </span>
          ))}
          <span className="trust-strip__sep">|</span>
          <span className="trust-strip__text">Vasai (East), Maharashtra, India</span>
        </div>
      </div>
    </div>
  );
}
