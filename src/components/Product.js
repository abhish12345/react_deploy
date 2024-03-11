import EllipseAvatar from "./EllipseAvatar";
import "./Product.css";

const Product = () => {
  return (
    <section className="product">
      <div className="rectangle-group">
        <div className="frame-item" />
        <div className="product-features-integrations-wrapper">
          <div className="product-features-integrations">
            <div className="company-about-blog-careers-man">
              <div className="tag4">
                <div className="version-20-is3">Boost your productivity</div>
              </div>
            </div>
            <h1 className="h24">A more effective way to track progress</h1>
            <div className="footer-l">
              <h3 className="body5">
                Effortlessly turn your ideas into a fully functional,
                responsive, no-code SaaS website in just minutes with the set of
                free components for Framer.
              </h3>
            </div>
          </div>
        </div>
        <div className="wrapper-product-image">
          <img
            className="product-image-icon"
            alt=""
            src="/product-image@2x.png"
          />
        </div>
        <div className="grid">
          <EllipseAvatar
            icons="/icons-2.svg"
            integrationEcosystem="Integration ecosystem"
            trackYourProgressAndMotiv="Track your progress and motivate"
            yourEffortsEveryday="your efforts everyday."
          />
          <EllipseAvatar
            icons="/icons-4.svg"
            integrationEcosystem="Goal setting and tracking"
            trackYourProgressAndMotiv="Set and track goals with"
            yourEffortsEveryday="manageable task breakdowns."
            propAlignSelf="stretch"
          />
          <EllipseAvatar
            icons="/icons-6.svg"
            integrationEcosystem="Secure data encryption"
            trackYourProgressAndMotiv="Ensure your data’s safety with top-"
            yourEffortsEveryday="tier encryption."
            propAlignSelf="unset"
          />
          <EllipseAvatar
            icons="/icons-8.svg"
            integrationEcosystem="Customizable notifications"
            trackYourProgressAndMotiv="Get alerts on tasks and deadlines"
            yourEffortsEveryday="that matter most."
            propAlignSelf="stretch"
          />
        </div>
        <img className="torus-1-icon" alt="" src="/torus-1@2x.png" />
        <img
          className="pyramid-1-icon"
          loading="lazy"
          alt=""
          src="/pyramid-1@2x.png"
        />
      </div>
    </section>
  );
};

export default Product;
