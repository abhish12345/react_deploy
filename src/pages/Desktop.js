import GroupComponent from "../components/GroupComponent";
import LogoTicker from "../components/LogoTicker";
import Product from "../components/Product";
import FrameComponent from "../components/FrameComponent";
import TagFrame from "../components/TagFrame";
import FooterFooterLProductFeatur from "../components/FooterFooterLProductFeatur";
import SignUp from "../components/SignUp";
import Footer from "../components/Footer";
import "./Desktop.css";

const Desktop = () => {
  return (
    <div className="desktop">
      <section className="bar-parent">
        <div className="bar">
          <div className="tag-frame">
            <div className="this-page-is">
              This page is included in a free SaaS Website Kit.
            </div>
            <div className="ellipse-frame">
              <div className="view-the-complete">View the complete Kit</div>
              <img className="icons" loading="lazy" alt="" src="/icons.svg" />
            </div>
          </div>
        </div>
        <header className="nav-bar-desktop">
          <div className="logo">
            <div className="logodefault">
              <div className="logo-default" />
              <img
                className="logosaas-icon"
                loading="lazy"
                alt=""
                src="/logosaas@2x.png"
              />
            </div>
            <div className="made-by">made by</div>
            <img
              className="black-horizontal-1-icon"
              loading="lazy"
              alt=""
              src="/blackhorizontal-1.svg"
            />
          </div>
          <div className="stack">
            <div className="about">About</div>
            <div className="features">Features</div>
            <div className="customers">Customers</div>
            <div className="updates">Updates</div>
            <div className="help">Help</div>
            <button className="buttons">
              <div className="get-for-free">Get for free</div>
            </button>
          </div>
        </header>
      </section>
      <GroupComponent />
      <LogoTicker />
      <Product />
      <section className="desktop-inner">
        <div className="frame-parent">
          <div className="tag-parent">
            <div className="tag">
              <div className="version-20-is">Everything you need</div>
            </div>
            <div className="h2-parent">
              <h1 className="h2">Streamlined for easy management</h1>
              <h3 className="body">
                Enjoy customizable lists, team work tools, and smart tracking
                all in one place. Set tasks, get reminders, and see your
                progress simply and quickly.
              </h3>
            </div>
          </div>
          <div className="alex-rivera">
            <div className="footer-ssocialscard">
              <img
                className="cube-helix-1-icon"
                loading="lazy"
                alt=""
                src="/cubehelix-1@2x.png"
              />
              <div className="signup-button-group">
                <h2 className="h21">Integration ecosystem</h2>
                <div className="body1">
                  <p className="enhance-your-productivity">
                    Enhance your productivity by connecting with your favorite
                    tools, keeping all your
                  </p>
                  <p className="essentials-in-one"> essentials in one place.</p>
                </div>
              </div>
            </div>
            <div className="footer-ssocialscard1">
              <img
                className="cube-helix-1-icon1"
                loading="lazy"
                alt=""
                src="/cubehelix-1-1@2x.png"
              />
              <div className="h2-group">
                <h2 className="h22">Goal setting and tracking</h2>
                <div className="body2">
                  Define and track your goals, breaking down objectives into
                  achievable tasks to keep your targets in sight.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent />
      <section className="testimonial-section">
        <div className="tag-group">
          <div className="tag1">
            <div className="tag2">
              <div className="version-20-is1">Testimonials</div>
            </div>
          </div>
          <h1 className="h23">What our users say</h1>
        </div>
      </section>
      <section className="frame-group">
        <TagFrame />
        <FooterFooterLProductFeatur />
        <div className="signup" />
      </section>
      <SignUp />
      <Footer />
    </div>
  );
};

export default Desktop;
