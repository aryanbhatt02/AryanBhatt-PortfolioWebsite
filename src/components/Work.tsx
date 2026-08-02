import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Project, projectsData } from "../data/projectsData";

gsap.registerPlugin(useGSAP);

interface WorkProps {
  onSelectProject?: (project: Project) => void;
}

const Work = ({ onSelectProject }: WorkProps) => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (!box.length) return;
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>PROJECTS</span>
        </h2>
        <div className="work-flex">
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
      </div>
    </div>
  );
};

export default Work;
