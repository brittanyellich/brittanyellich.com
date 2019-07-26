import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/common'

const ContactPage = () => (
    <Layout>
        <div className="container">
            <article className="content" style={{ textAlign: `center` }}>
                <h1 className="content-title">Contact Me</h1>
                <section className="content-body">
                    The best way to get in touch with me is through email at <a href = "mailto: brittany@brittanyellich.com">brittany@brittanyellich.com</a>.
                </section>
            </article>
        </div>
    </Layout>
)

export default ContactPage
