import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/common'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedinIn, faTwitch, faGithub } from '@fortawesome/free-brands-svg-icons'

const ContactPage = () => (
    <Layout>
        <div className="container">
            <article className="content" style={{ textAlign: `center` }}>
                <h1 className="content-title">Contact Me</h1>
                <section className="content-body">
                    I'm always open to new freelance projects and opportunities as my schedule permits. The best way to get in touch with me is through email 
                    at: <a href = "mailto: brittany@brittanyellich.com">brittany@brittanyellich.com</a>
                    I'm also available through the following:                    
                </section>
                <section className="content-body" style={{ textAlign: `center` }}>
                    <a href="https://twitter.com/brittanyellich">Twitter <FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="https://linkedin.com/in/brittany-ellich">LinkedIn <FontAwesomeIcon icon={faLinkedinIn} /></a>
                    <a href="https://github.com/b-marie">Github <FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.twitch.tv/jaquenetta">Twitch <FontAwesomeIcon icon={faTwitch} /></a>
                </section>
            </article>
        </div>
    </Layout>
)

export default ContactPage
