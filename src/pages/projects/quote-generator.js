import React from 'react'
import { Layout } from '../../components/common'
import Quote from '../../components/Quote'

const QuoteGenerator = () => (
    <Layout>
        <div className="container">
            <article className="content" style={{ textAlign: `center` }}>
                <h1 className="content-title">Quote Generator</h1>
                <Quote />
                <p><span className="content-purpose">Purpose: </span>The purpose of this project was really to get something to put on this new site. It really isn't the most spectacular thing I've ever made, but I'm very fond of quotes and found this to be a good way to get the project list started.</p>
            </article>
        </div>
    </Layout>
)

export default QuoteGenerator
