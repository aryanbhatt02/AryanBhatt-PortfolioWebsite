import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Computer Science (AI & ML)</h4>
                <h5>Lloyd Institute Of Engineering And Technology</h5>
              </div>
              <h3>2022 - 2026</h3>
            </div>
            <p>
              Pursuing Bachelor's degree in Computer Science with Artificial
              Intelligence and Machine Learning, mastering software engineering,
              data structures, and AI fundamentals.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Game Programmer (Unity C#)</h4>
                <h5>Independent / Personal Projects</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Designed and programmed 2D &3D games using Unity & C#. Implemented complex
              gameplay mechanics, enemy AI, weapon shops, vehicle controls, and
              optimized game state management across multiple published titles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
