import React from 'react'
import { Layout } from '../../components/common'
import Button from '../../components/Button'

const QuoteGenerator = () => (
    <Layout>
        <div className="container">
            <article className="content" style={{ textAlign: `center` }}>
                <h1 className="content-title">The RGB Color Game</h1>
                <img src="https://brittanyellichpublic.s3-us-west-2.amazonaws.com/rgbcolorgameimage.PNG" alt="image of rgb color game project" />
                <a href="https://beemarie.org/portfolio/colorGame.html" target="_blank" rel="noopener noreferrer">
                    <Button buttonText="View project" />
                </a>
                <hr></hr>
                <p><span className="content-purpose">Purpose: </span>This project was really just a fun thing to put together after seeing something similar on another site.</p>
                <p><span className="content-purpose">Description: </span>A game to help you become more familiar with RGB colors.</p>
                <p><span className="content-purpose">Technologies Used: </span>Javascript, HTML, CSS</p>
            </article>
        </div>
    </Layout>
)

export default QuoteGenerator
