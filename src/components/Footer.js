import LogoDefault from "./LogoDefault";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-l2">
        <LogoDefault
          logosaas="/logosaas-1@2x.png"
          socials="/socials.svg"
          socials1="/socials-1.svg"
          socials2="/socials-2.svg"
          socials3="/socials-3.svg"
          socials4="/socials-4.svg"
          socials5="/socials-5.svg"
          showLogoDefault
          showLogosaasRectangle
          showLogosaasIcon
          showSocialsIcon
          socialsIconVisible
          socialsIconVisible1
          socialsIconVisible2
        />
        <div className="menu-items-container">
          <div className="product1">
            <b className="product2">Product</b>
            <div className="features1">Features</div>
            <div className="integrations4">Integrations</div>
            <div className="updates1">Updates</div>
            <div className="faq">FAQ</div>
            <div className="pricing">Pricing</div>
          </div>
          <div className="company">
            <b className="company1">Company</b>
            <div className="about1">About</div>
            <div className="blog">Blog</div>
            <div className="careers">Careers</div>
            <div className="manifesto">Manifesto</div>
            <div className="press">Press</div>
            <div className="contact">Contact</div>
          </div>
          <div className="resources">
            <b className="resources1">Resources</b>
            <div className="examples">Examples</div>
            <div className="community">Community</div>
            <div className="guides">Guides</div>
            <div className="docs">Docs</div>
          </div>
          <div className="security">
            <b className="legal">Legal</b>
            <div className="privacy">Privacy</div>
            <div className="terms">Terms</div>
            <div className="security1">Security</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
