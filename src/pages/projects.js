import React from 'react'
import { Layout } from '../components/common'
import ProjectsList from '../components/ProjectsList'


export const Projects = () => {
    return (
        <>
            <Layout>
                <article className="content" style={{ textAlign: `center` }}>
                    <h1 className="content-title">Projects</h1>
                    <ProjectsList />
                </article>
            </Layout>
        </>
    )
}

export default Projects
