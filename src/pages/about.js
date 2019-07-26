import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/common'

const AboutPage = () => (
    <Layout>
        <div className="container">
            <article className="content" style={{ textAlign: `center` }}>
                <h1 className="content-title">About Me</h1>
                <section className="content-body">
                    My name is Brittany, and I like to make things. I live in Portland, Oregon with my husband, dog, and two cats.
                </section>
            </article>
        </div>
    </Layout>
)

export default AboutPage
