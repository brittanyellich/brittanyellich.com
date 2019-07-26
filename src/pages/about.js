import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/common'

const AboutPage = () => (
    <Layout>
        <div className="container">
            <article className="content" style={{ textAlign: `center` }}>
                <h1 className="content-title">About Me</h1>
                <section className="content-header">
                    My name is Brittany, and I like to make things. 
                </section>
                <img className="img-round-large" src="./images/Profile-Photo.jpg" />
                <section className="content-body">
                    I live in Portland, Oregon with my husband, dog, and two cats. I'm a Software Engineer, and particularly like building software using .NET core and React.
                    When I'm not working or building something, I like to spend my time reading, writing, playing video games, or hiking.
                </section>
            </article>
        </div>
    </Layout>
)

export default AboutPage
