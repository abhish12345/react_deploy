import "./SignUp.css";

const SignUp = () => {
  return (
    <section className="sign-up">
      <div className="helix1">
        <div className="frame-container1">
          <div className="header-text-get-button">
            <h1 className="h26">Sign up for free today</h1>
            <div className="body7">
              Celebrate the joy of accomplishment with an app designed to track
              your progress and motivate your efforts.
            </div>
          </div>
          <div className="footer-l1">
            <button className="buttons7">
              <div className="get-for-free7">Get for free</div>
            </button>
            <div className="buttons8">
              <div className="get-for-free8">Learn more</div>
              <img className="icons24" alt="" src="/icons-1.svg" />
            </div>
          </div>
        </div>
      </div>
      <img
        className="emojistar-1-icon"
        loading="lazy"
        alt=""
        src="/emojistar-1@2x.png"
      />
      <img
        className="helix2-1-icon"
        loading="lazy"
        alt=""
        src="/helix2-1@2x.png"
      />
    </section>
  );
};

export default SignUp;
