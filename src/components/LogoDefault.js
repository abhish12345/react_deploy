import { useMemo } from "react";
import "./LogoDefault.css";

const LogoDefault = ({
  logosaas,
  socials,
  socials1,
  socials2,
  socials3,
  socials4,
  socials5,
  showLogoDefault,
  showLogosaasRectangle,
  showLogosaasIcon,
  showSocialsIcon,
  socialsIconVisible,
  socialsIconVisible1,
  socialsIconVisible2,
  propHeight,
  propMinWidth,
  propFlexDirection,
  propGap,
  propFlex,
  propAlignSelf,
  propFlex1,
  propWidth,
  propPadding,
}) => {
  const logoDefaultStyle = useMemo(() => {
    return {
      height: propHeight,
      minWidth: propMinWidth,
    };
  }, [propHeight, propMinWidth]);

  const ellipseShapeStyle = useMemo(() => {
    return {
      flexDirection: propFlexDirection,
      gap: propGap,
      flex: propFlex,
    };
  }, [propFlexDirection, propGap, propFlex]);

  const effortlesslyTurnYourStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex1,
    };
  }, [propAlignSelf, propFlex1]);

  const logoGroupStyle = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  return (
    <div className="logo-default2" style={logoDefaultStyle}>
      <div className="ellipse-shape" style={ellipseShapeStyle}>
        {showLogoDefault && (
          <div className="logodefault1">
            {showLogosaasRectangle && <div className="logosaas-rectangle" />}
            {showLogosaasIcon && (
              <img className="logosaas-icon1" alt="" src={logosaas} />
            )}
          </div>
        )}
        <div
          className="effortlessly-turn-your"
          style={effortlesslyTurnYourStyle}
        >
          Effortlessly turn your ideas into a fully functional, responsive,
          no-code SaaS website.
        </div>
      </div>
      <div className="logo-group" style={logoGroupStyle}>
        {showSocialsIcon && (
          <img className="socials-icon" alt="" src={socials} />
        )}
        <img className="socials-icon1" alt="" src={socials1} />
        {socialsIconVisible && (
          <img className="socials-icon2" alt="" src={socials2} />
        )}
        <img className="socials-icon3" alt="" src={socials3} />
        {socialsIconVisible1 && (
          <img className="socials-icon4" alt="" src={socials4} />
        )}
        {socialsIconVisible2 && (
          <img className="socials-icon5" alt="" src={socials5} />
        )}
      </div>
    </div>
  );
};

export default LogoDefault;
