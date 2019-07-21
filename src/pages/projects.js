import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/common'

const ProjectsPage = () => (
    <Layout>
        <div className="container">
            <article className="content" style={{ textAlign: `center` }}>
                <h1 className="content-title">Projects</h1>
                <section className="content-body">
                    List of projects
                </section>
            </article>
        </div>
    </Layout>
)

export default ProjectsPage
