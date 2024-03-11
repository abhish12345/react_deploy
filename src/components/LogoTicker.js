import "./LogoTicker.css";

const LogoTicker = () => {
  return (
    <section className="logo-ticker">
      <div className="logo-ticker1">
        <img
          className="quantum-1-icon"
          loading="lazy"
          alt=""
          src="/quantum-1@2x.png"
        />
        <img className="pulse-1-icon" alt="" src="/pulse-1@2x.png" />
        <img
          className="echo-1-icon"
          loading="lazy"
          alt=""
          src="/echo-1@2x.png"
        />
        <img
          className="celestia-1-icon"
          loading="lazy"
          alt=""
          src="/celestia-1@2x.png"
        />
        <img
          className="apex-1-icon"
          loading="lazy"
          alt=""
          src="/apex-1@2x.png"
        />
        <img
          className="acme-1-icon"
          loading="lazy"
          alt=""
          src="/acme-1@2x.png"
        />
        <div className="logo-ticker-child" />
      </div>
    </section>
  );
};

export default LogoTicker;
