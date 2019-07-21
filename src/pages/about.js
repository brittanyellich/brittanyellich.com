import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/common'

const AboutPage = () => (
    <Layout>
        <div className="container">
            <article className="content" style={{ textAlign: `center` }}>
                <h1 className="content-title">About Me</h1>
                <section className="content-body">
                    My name is Brittany, and I like to make things. I live in Portland, Oregon with my husband, dog, and two awesome cats.
                </section>
                <section className="content-body">
                    I began my career in Environmental Health and Safety, and got to see some really cool things! It's a little bit like 
                    being on that show How It's Made, as you get to learn where everything comes from (for better or worse). In grad school 
                    I spent some time as a Research Assistant where I had the opportunity to work on several projects and teach myself some 
                    tech skills, like how to maintain websites, work with databases, and develop e-learning content. I enjoyed this so much 
                    that I kept doing it once I joined the work force!
                </section>
                <section className="content-body">
                After a while, I discovered that many of the issues that are present in both environmental and occupational health have technology 
                solutions, and realized that those are the problems I would like to one day work on, so I worked my way towards becoming a 
                Software Developer. Through a mixture of online education, a degree from Western Governor's University, and a whole lot of 
                Googling I ended up here! 
                </section>
            </article>
        </div>
    </Layout>
)

export default AboutPage
