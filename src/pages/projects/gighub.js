import React from 'react'
import { Layout } from '../../components/common'
import Button from '../../components/Button'

const QuoteGenerator = () => (
    <Layout>
        <div className="container">
            <article className="content" style={{ textAlign: `center` }}>
                <h1 className="content-title">GigHub</h1>
                <img src="https://brittanyellichpublic.s3-us-west-2.amazonaws.com/gighubimage.PNG" alt="image of gighub project" />
                <a href="https://github.com/b-marie/GigHub" target="_blank" rel="noopener noreferrer">
                    <Button buttonText="View project" />
                </a>
                <hr></hr>
                <p><span className="content-purpose">Purpose: </span>The purpose of this project was to get familiar with C#, .NET, and Entity Framework for my new position with Allata in 2018.</p>
                <p><span className="content-purpose">Description: </span>Social media project to share upcoming concerts.</p>
                <p><span className="content-purpose">Technologies Used: </span>C#, .NET, Entity Framework</p>
            </article>
        </div>
    </Layout>
)

export default QuoteGenerator
