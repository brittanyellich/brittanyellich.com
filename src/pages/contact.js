import React from 'react'
import { Layout } from '../components/common'
import Button from '../components/Button'

const ContactPage = () => (
    <Layout>
        <div className="container">
            <article className="content" style={{ textAlign: `center` }}>
                <h1 className="content-title">Contact Me</h1>
                <section className="content-body">
                    I'm always open to new freelance projects and opportunities as my schedule permits. The best way to get in touch with me is through email 
                    at: <a href = "mailto: brittany@brittanyellich.com">brittany@brittanyellich.com</a>
                    <hr />
                    I'm also available through the following:                    
                </section>
                <br />
                <section className="content-body" style={{ textAlign: `center` }}>
                    <a href="https://twitter.com/brittanyellich"><Button buttonText="Twitter" /></a>
                    <a href="https://linkedin.com/in/brittany-ellich"><Button buttonText="LinkedIn" /></a>
                    <a href="https://github.com/b-marie"><Button buttonText="GitHub" /></a>
                    <a href="https://www.twitch.tv/jaquenetta"><Button buttonText="Twitch" /></a>
                </section>
            </article>
        </div>
    </Layout>
)

export default ContactPage
