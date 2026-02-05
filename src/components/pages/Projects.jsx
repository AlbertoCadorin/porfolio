import { useState } from "react";
import { projects } from "../../data/project";
import { Link } from "react-router-dom";
import './Projects.css';



const Projects = () => {
    const [activeProject, setActiveProject] = useState(null);

    return (
        <div className="projects-container">
            {/* Image Section */}
            <div className="img-section">
                {activeProject && <img src={activeProject.image} alt={activeProject.title} className="project-image" />}
            </div>

            {/* Projects List Section */}
            <div className="projects-list">
                <h1 className="projects-title">LAVORO</h1>
                {projects.map(p => (
                    <div
                        key={p.id}
                        className="project-item"
                        onMouseEnter={() => setActiveProject(p)}
                    >
                        <span className="project-name">{p.title}</span>
                        <span className="project-type">{p.tech.join(', ')}</span>
                    </div>
                ))}
                <Link to="/" className="proj-link">
                    ← torna alla home
                </Link>
            </div>
        </div>

    )

}

export default Projects;


