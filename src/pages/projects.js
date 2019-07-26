import React from 'react'

import { Layout } from '../components/common'
import ProjectCard from '../components/common/ProjectCard'
import { MetaData } from '../components/common/meta'


export const Projects = () => {
    const projects = require('../../projects.js');
    console.log(projects)

    return (
        <>
            <Layout>
                <article className="content" style={{ textAlign: `center` }}>
                    <h1 className="content-title">Projects</h1>
                    Under Construction, come back soon!
                    <div className="container">
                        <section className="post-feed">
                            {projects.map((node) => (
                                // The tag below includes the markup for each post - components/common/PostCard.js
                                <ProjectCard key={node.id} project={node} />
                            ))}
                        </section>
                    </div>
                </article>
            </Layout>
        </>
    )
}

export default Projects
