import React, { useEffect } from "react";
import { Project } from "../data/projectsData";
import "./styles/ProjectModal.css";
import { FaGithub, } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="project-modal-backdrop" onClick={onClose}>
      <div
        className="project-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="project-modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <MdClose />
        </button>

        <div className="project-modal-header">
          <span className="project-modal-category">{project.category}</span>
          <h2 className="project-modal-title">{project.title}</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <span className="project-modal-date">
              Released: {project.date}
            </span>

            <a
              href={project.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn project-btn-secondary"
            >
              ▶ Watch on YouTube
            </a>
          </div>
        </div>

        <div className="project-modal-media">
          {project.videoUrl ? (
            <div className="project-video-wrapper">
              <iframe
                src={project.videoUrl}
                title={`${project.title} Gameplay Video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <>
              <img
                src={project.image}
                alt={project.title}
                className="project-modal-banner-img"
              />
              {/* <div className="project-modal-badge">
                <FaPlay style={{ color: "#646cff" }} /> Gameplay Preview & Showcase
              </div> */}
            </>
          )}
        </div>

        <div className="project-modal-section">
          <h3>🎮 Game Overview</h3>
          <p>{project.overview}</p>
        </div>

        <div className="project-modal-section">
          <h3>⚡ Key Features & Mechanics</h3>
          <ul className="project-modal-list">
            {project.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="project-modal-section">
          <h3>⚙️ Software & Game Architecture</h3>
          <ul className="project-modal-list">
            {project.architecture.map((arch, idx) => (
              <li key={idx}>{arch}</li>
            ))}
          </ul>
        </div>

        <div className="project-modal-section">
          <h3>🛠️ Tools & Tech Stack</h3>
          <div className="project-modal-tags">
            {project.tools.map((tool, idx) => (
              <span key={idx} className="project-tag">
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="project-modal-actions">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn project-btn-primary"
          >
            <FaGithub /> View Source on GitHub
          </a>
          <button
            onClick={onClose}
            className="project-btn project-btn-secondary"
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
