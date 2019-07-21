import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'

const ProjectCard = (project) => {
    console.log(project)
    const url = `projects/${project.slug}/`

    return (
        <Link to={url} className="post-card">
            <header className="post-card-header">
                {project.imgUrl &&
                    <div className="post-card-image" style={{
                        backgroundImage: `url(${project.imgUrl})` ,
                    }}></div>}
                {project.technologiesUsed && <div className="post-card-tags"> <Tags project={project} visibility="public" autolink={false} /></div>}
                {project.featured && <span>Featured</span>}
                <h2 className="post-card-title">{project.title}</h2>
            </header>
            <section className="post-card-excerpt">{project.description}</section>
            <footer className="post-card-footer">
                <div className="post-card-footer-left">
                </div>
                <div className="post-card-footer-right">
                </div>
            </footer>
        </Link>
    )
}

ProjectCard.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        imgUrl: PropTypes.string,
        featured: PropTypes.bool,
        technologiesUsed: PropTypes.arrayOf(PropTypes.string),
        description: PropTypes.string.isRequired,
    }).isRequired,
}

export default ProjectCard
