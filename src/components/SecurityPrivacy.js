import "./SecurityPrivacy.css";

const SecurityPrivacy = ({
  icons,
  integrations,
  icons1,
  dedicatedAccountManager,
}) => {
  return (
    <div className="security-privacy3">
      <div className="icons-group">
        <img className="icons11" alt="" src={icons} />
        <div className="design-elements1">
          <div className="integrations1">{integrations}</div>
        </div>
      </div>
      <div className="icons-container">
        <img className="icons12" alt="" src={icons1} />
        <div className="dedicated-account-manager-wrapper">
          <div className="dedicated-account-manager">
            {dedicatedAccountManager}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityPrivacy;
