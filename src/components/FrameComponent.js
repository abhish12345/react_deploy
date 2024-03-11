import PricingCard from "./PricingCard";
import SecurityPrivacy from "./SecurityPrivacy";
import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <section className="desktop-child">
      <div className="frame-container">
        <div className="frame-wrapper">
          <div className="frame-div">
            <div className="tag-wrapper">
              <div className="tag6">
                <div className="version-20-is5">Boost your productivity</div>
              </div>
            </div>
            <h1 className="h25">A more effective way to track progress</h1>
            <div className="body-wrapper">
              <h3 className="body6">
                Effortlessly turn your ideas into a fully functional,
                responsive, no-code SaaS website in just minutes with the set of
                free components for Framer.
              </h3>
            </div>
          </div>
        </div>
        <div className="icons-collection">
          <div className="frame-logo">
            <div className="pricing-card1">
              <div className="text-ellipse">
                <b className="subtitle1">Free</b>
              </div>
              <div className="body-content">
                <div className="buttons-group">
                  <b className="price1">$0</b>
                  <div className="emojistar-icon1">
                    <div className="footer-frame">
                      <div className="logo-default1">
                        <div className="spacer1" />
                      </div>
                      <b className="monthly1">/monthly</b>
                    </div>
                  </div>
                </div>
                <button className="buttons5">
                  <div className="get-for-free5">Get started for free</div>
                </button>
              </div>
              <div className="resources-group">
                <div className="security-part">
                  <img
                    className="icons13"
                    loading="lazy"
                    alt=""
                    src="/icons-10.svg"
                  />
                  <img
                    className="icons14"
                    loading="lazy"
                    alt=""
                    src="/icons-10.svg"
                  />
                  <img
                    className="icons15"
                    loading="lazy"
                    alt=""
                    src="/icons-10.svg"
                  />
                  <img
                    className="icons16"
                    loading="lazy"
                    alt=""
                    src="/icons-10.svg"
                  />
                </div>
                <div className="legal-notice">
                  <div className="footer-l-container">
                    <div className="up-to-5">Up to 5 project members</div>
                    <div className="unlimited-tasks-and1">
                      Unlimited tasks and projects
                    </div>
                    <div className="gb-storage1">2GB storage</div>
                    <div className="integrations2">Integrations</div>
                  </div>
                </div>
              </div>
              <div className="testimonial-text3">
                <img
                  className="icons17"
                  loading="lazy"
                  alt=""
                  src="/icons-10.svg"
                />
                <div className="updates-tab">
                  <div className="basic-support">Basic support</div>
                </div>
              </div>
            </div>
          </div>
          <PricingCard
            icons="/icons-15.svg"
            icons1="/icons-15.svg"
            icons2="/icons-15.svg"
            icons3="/icons-15.svg"
            icons4="/icons-15.svg"
            icons5="/icons-15.svg"
            icons6="/icons-15.svg"
          />
          <div className="pricing-card2">
            <b className="subtitle2">Business</b>
            <div className="rectangle-shape">
              <b className="price2">$19</b>
              <div className="emojistar-icon2">
                <div className="helix-shape1">
                  <div className="footer-layout1">
                    <div className="spacer2" />
                  </div>
                  <b className="monthly2">/monthly</b>
                </div>
              </div>
            </div>
            <button className="buttons6">
              <div className="get-for-free6">Sign up now</div>
            </button>
            <div className="resources-examples-guides-docs">
              <div className="security-privacy4">
                <img className="icons18" alt="" src="/icons-10.svg" />
                <div className="up-to-5-project-members-wrapper">
                  <div className="up-to-51">Up to 5 project members</div>
                </div>
              </div>
              <div className="security-privacy5">
                <img className="icons19" alt="" src="/icons-10.svg" />
                <div className="unlimited-tasks-and-projects-container">
                  <div className="unlimited-tasks-and2">
                    Unlimited tasks and projects
                  </div>
                </div>
              </div>
              <div className="security-privacy6">
                <img className="icons20" alt="" src="/icons-10.svg" />
                <div className="gb-storage-container">
                  <div className="gb-storage2">200GB storage</div>
                </div>
              </div>
              <SecurityPrivacy
                icons="/icons-10.svg"
                integrations="Integrations"
                icons1="/icons-10.svg"
                dedicatedAccountManager="Dedicated account manager"
              />
              <div className="security-privacy7">
                <img className="icons21" alt="" src="/icons-10.svg" />
                <div className="custom-fields-wrapper">
                  <div className="custom-fields">Custom fields</div>
                </div>
              </div>
              <div className="security-privacy8">
                <img className="icons22" alt="" src="/icons-10.svg" />
                <div className="advanced-analytics-wrapper">
                  <div className="advanced-analytics">Advanced analytics</div>
                </div>
              </div>
              <div className="security-privacy9">
                <img className="icons23" alt="" src="/icons-10.svg" />
                <div className="export-capabilities-wrapper">
                  <div className="export-capabilities">Export capabilities</div>
                </div>
              </div>
              <SecurityPrivacy
                icons="/icons-10.svg"
                integrations="API access"
                icons1="/icons-10.svg"
                dedicatedAccountManager="Advanced security features"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
