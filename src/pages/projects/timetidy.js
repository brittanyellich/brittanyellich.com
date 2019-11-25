import React from 'react'
import { Layout } from '../../components/common'
import Button from '../../components/Button'

const QuoteGenerator = () => (
    <Layout>
        <div className="container">
            <article className="content" style={{ textAlign: `center` }}>
                <h1 className="content-title">Time Tidy</h1>
                <img src="https://brittanyellichpublic.s3-us-west-2.amazonaws.com/timetidyimage.PNG" alt="image of timetidy project" />
                <a href="https://github.com/b-marie/TimeTidy2" target="_blank" rel="noopener noreferrer">
                    <Button buttonText="View project" />
                </a>
                <hr></hr>
                <p><span className="content-purpose">Purpose: </span>This was a project I built for school without using any external libraries, which was a bit tricky (particularly for building the calendar). It was another desktop Java application that was fun to put together in the end.</p>
                <p><span className="content-purpose">Description: </span>Application with a calendar, appointment, and customer information tracking system.</p>
                <p><span className="content-purpose">Technologies Used: </span>Java, JavaFx</p>
            </article>
        </div>
    </Layout>
)

export default QuoteGenerator
