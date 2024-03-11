import { useMemo } from "react";
import "./EllipseAvatar.css";

const EllipseAvatar = ({
  icons,
  integrationEcosystem,
  trackYourProgressAndMotiv,
  yourEffortsEveryday,
  propAlignSelf,
}) => {
  const bodyStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div className="ellipse-avatar">
      <img className="icons2" loading="lazy" alt="" src={icons} />
      <b className="integration-ecosystem">{integrationEcosystem}</b>
      <div className="buttons-sign-up">
        <div className="body4" style={bodyStyle}>
          <p className="track-your-progress">{trackYourProgressAndMotiv}</p>
          <p className="your-efforts-everyday">{yourEffortsEveryday}</p>
        </div>
        <div className="buttons3">
          <div className="get-for-free3">Learn more</div>
          <img className="icons3" loading="lazy" alt="" src="/icons-3.svg" />
        </div>
      </div>
    </div>
  );
};

export default EllipseAvatar;
