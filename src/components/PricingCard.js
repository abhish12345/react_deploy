import { useMemo } from "react";
import "./PricingCard.css";

const PricingCard = ({
  icons,
  icons1,
  icons2,
  icons3,
  icons4,
  icons5,
  icons6,
  propFlex,
  propMinWidth,
  getForFreeDisplay,
}) => {
  const pricingCardStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  const getForFreeStyle = useMemo(() => {
    return {
      display: getForFreeDisplay,
    };
  }, [getForFreeDisplay]);

  return (
    <div className="pricing-card" style={pricingCardStyle}>
      <div className="company-logo">
        <div className="about-page">
          <div className="text-line-quote">
            <div className="frame-tag-version">
              <b className="subtitle">Pro</b>
            </div>
            <div className="tag5">
              <div className="version-20-is4">Most Popular</div>
            </div>
          </div>
        </div>
        <div className="community-guides">
          <b className="price">$9</b>
          <div className="emojistar-icon">
            <div className="helix-shape">
              <div className="footer-layout">
                <div className="spacer" />
              </div>
              <b className="monthly">/monthly</b>
            </div>
          </div>
        </div>
      </div>
      <button className="buttons4">
        <div className="get-for-free4" style={getForFreeStyle}>
          Sign up now
        </div>
      </button>
      <div className="frame-group1">
        <div className="testimonial-text">
          <img className="icons4" loading="lazy" alt="" src={icons} />
          <div className="tag-version">
            <div className="up-to-50">Up to 50 project members</div>
          </div>
        </div>
        <div className="security-privacy">
          <img className="icons5" loading="lazy" alt="" src={icons1} />
          <div className="unlimited-tasks-and-projects-wrapper">
            <div className="unlimited-tasks-and">
              Unlimited tasks and projects
            </div>
          </div>
        </div>
        <div className="testimonial-text1">
          <img className="icons6" loading="lazy" alt="" src={icons2} />
          <div className="gb-storage-wrapper">
            <div className="gb-storage">50GB storage</div>
          </div>
        </div>
        <div className="icons-parent">
          <img className="icons7" loading="lazy" alt="" src={icons3} />
          <div className="design-elements">
            <div className="integrations">Integrations</div>
          </div>
        </div>
        <div className="testimonial-text2">
          <img className="icons8" loading="lazy" alt="" src={icons4} />
          <div className="priority-support-wrapper">
            <div className="priority-support">Priority support</div>
          </div>
        </div>
        <div className="security-privacy1">
          <img className="icons9" alt="" src={icons5} />
          <div className="advanced-support-wrapper">
            <div className="advanced-support">Advanced support</div>
          </div>
        </div>
        <div className="security-privacy2">
          <img className="icons10" alt="" src={icons6} />
          <div className="export-support-wrapper">
            <div className="export-support">Export support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
