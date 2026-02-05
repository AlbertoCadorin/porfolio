import { useParams } from "react-router-dom";
import { projects } from "../../data/project";
import { Link } from "react-router-dom";
import "./ProjectDetail.css";

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));
    if (!project) {
        return <div>Progetto non trovato</div>;
    }
    return (
        <section className="project-detail">
            <div className="project-hero">
                <div className="project-image-wrap">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="project-detail-image"
                    />
                </div>
            </div>

            <div className="project-info">
                <h1 className="project-title">{project.title}</h1>
                <div className="project-divider" />

                <div className="project-meta">
                    <div className="project-meta-label">TECNOLOGIE</div>
                    <div className="project-meta-value">{project.tech.join(", ")}</div>

                    <div className="project-meta-label">GITHUB</div>
                    <a
                        className="project-github"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Vai al repository
                    </a>
                </div>

                <p className="project-description">
                    {project.description || "Descrizione non disponibile."}
                </p>

                <Link to="/projects" className="project-back">
                    ← Torna ai progetti
                </Link>
            </div>
        </section>
    );
}

export default ProjectDetail;