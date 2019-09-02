import React from 'react'
import { Layout } from '../components/common'
import Experience from '../components/Experience'
import ResumeDownloadButton from '../components/ResumeDownloadButton'


const AboutPage = () => (
    <Layout>
        <div className="container">
            <article className="content" style={{ textAlign: `center` }}>
                <h1 className="content-title">About Me</h1>
                <section className="content-header">
                    My name is Brittany, and I like to make things. 
                </section>
                <img className="img-round-large" src="https://brittanyellichpublic.s3-us-west-2.amazonaws.com/Profile-Photo.jpg" />
                <section className="content-body">
                    I live in Portland, Oregon with my husband, dog, and two cats. I'm a Software Engineer, and particularly like building software using .NET Core and React.
                    When I'm not working or building something, I like to spend my time reading, writing, playing video games, or mountain biking.
                </section>
                <br />
                <ResumeDownloadButton />
                <br />
                <h5 className="content-title">Experience</h5>
            </article>
            <Experience />
        </div>
    </Layout>
)

export default AboutPage
