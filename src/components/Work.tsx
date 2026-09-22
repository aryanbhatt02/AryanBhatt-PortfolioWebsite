import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { Project, projectsData } from "../data/projectsData";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface WorkProps {
  onSelectProject?: (project: Project) => void;
}

const Work = ({ onSelectProject }: WorkProps) => {
  const workFlexRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (workFlexRef.current) {
      const container = workFlexRef.current;
      const box = container.querySelector(".work-box");
      const scrollAmount = box ? (box as HTMLElement).offsetWidth + 24 : 400;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (workFlexRef.current) {
      const container = workFlexRef.current;
      const box = container.querySelector(".work-box");
      const scrollAmount = box ? (box as HTMLElement).offsetWidth + 24 : 400;
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          MY <span>PROJECTS</span>
        </h2>

        <div className="work-carousel-wrapper">
          <button
            className="work-nav-btn work-nav-prev"
            onClick={handlePrev}
            aria-label="Previous Project"
            title="Previous Project"
          >
            <FaChevronLeft />
          </button>

          <div className="work-flex" ref={workFlexRef}>
            {projectsData.map((project, index) => (
              <div
                className="work-box"
                key={project.id}
                onClick={() => onSelectProject && onSelectProject(project)}
                style={{ cursor: "pointer" }}
              >
                <div className="work-info">
                  <div className="work-title">
                    <h3>0{index + 1}</h3>

                    <div>
                      <h4>{project.title}</h4>
                      <p>{project.category}</p>
                    </div>
                  </div>
                  <h4>Tools and features</h4>
                  <p>{project.tools.slice(0, 4).join(", ")}</p>
                  <p
                    style={{
                      marginTop: "0.5rem",
                      fontSize: "0.9rem",
                      opacity: 0.8,
                    }}
                  >
                    {project.shortDescription}
                  </p>
                  <div
                    style={{
                      marginTop: "0.8rem",
                      display: "inline-block",
                      padding: "0.35rem 0.8rem",
                      background: "rgba(100, 108, 255, 0.2)",
                      border: "1px solid rgba(100, 108, 255, 0.4)",
                      borderRadius: "6px",
                      fontSize: "0.8rem",
                      color: "#fff",
                      fontWeight: 600,
                    }}
                  >
                    Click for Game Details & Videos ➔
                  </div>
                </div>
                <WorkImage image={project.image} alt={project.title} />
              </div>
            ))}
          </div>

          <button
            className="work-nav-btn work-nav-next"
            onClick={handleNext}
            aria-label="Next Project"
            title="Next Project"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
