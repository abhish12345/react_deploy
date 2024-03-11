import "./GroupComponent.css";

const GroupComponent = () => {
  return (
    <section className="rectangle-parent">
      <div className="frame-child" />
      <div className="tag3">
        <div className="version-20-is2">Version 2.0 is here</div>
      </div>
      <h1 className="h1">Pathway to productivity</h1>
      <h3 className="body3">
        Celebrate the joy of accomplishment with an app designed to track your
        progress, motivate your efforts, and celebrate your successes.
      </h3>
      <button className="buttons1">
        <div className="get-for-free1">Get for free</div>
      </button>
      <div className="buttons2">
        <div className="get-for-free2">Learn more</div>
        <img className="icons1" loading="lazy" alt="" src="/icons-1.svg" />
      </div>
      <div className="cylinder-1-parent">
        <img className="cylinder-1-icon" alt="" src="/cylinder-1@2x.png" />
        <img className="visual-icon" alt="" src="/visual@2x.png" />
      </div>
      <img className="half-torus-1-icon" alt="" src="/halftorus-1@2x.png" />
    </section>
  );
};

export default GroupComponent;
