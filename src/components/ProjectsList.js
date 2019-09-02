import React from 'react'
import ProjectCard from '../components/common/ProjectCard'


export const ProjectsList = () => {
    const projects = require('../resources/projects.js');

    return (
        <div className="container">
            <section className="project-feed">
                {projects.map((node) => (
                    // The tag below includes the markup for each post - components/common/PostCard.js
                    <ProjectCard key={node.id} project={node} />
                ))}
            </section>
        </div>
    )
}

export default ProjectsList
