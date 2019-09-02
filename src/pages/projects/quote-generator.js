import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../../components/common'
import Quote from '../../components/Quote'

const QuoteGenerator = () => (
    <Layout>
        <div className="container">
            <article className="content" style={{ textAlign: `center` }}>
                <h1 className="content-title">Quote Generator</h1>
                <Quote />
            </article>
        </div>
    </Layout>
)

export default QuoteGenerator
