import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faRss, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Quote from '../Quote'

import { Navigation } from '.'
import config from '../../utils/siteConfig'

// Styles
import '../../styles/app.css'

/**
* Main layout component
*
* The Layout component wraps around each page and template.
* It also provides the header, footer as well as the main
* styles, and meta data for each page.
*
*/
const DefaultLayout = ({ data, children, bodyClass, isHome }) => {
    const site = data.allGhostSettings.edges[0].node
    const twitterUrl = `https://twitter.com/brittanyellich`
    const linkedInUrl = `https://linkedin.com/in/brittany-ellich`
    const githubUrl =  `https://github.com/b-marie`

    return (
    <>
        <Helmet>
            <html lang={site.lang} />
            <style type="text/css">{`${site.codeinjection_styles}`}</style>
            <body className={bodyClass} />
        </Helmet>

        <div className="viewport">

            <div className="viewport-top">
                {/* The main header section on top of the screen */}
                <header className="site-head">
                    <div className="container">
                        <div className="site-mast">
                            <div className="site-mast-left">
                                { isHome ?
                                    /* The navigation items as setup in Ghost */
                                    <Navigation data={site.navigation} navClass="site-nav-item" />
                                :
                                    <div>
                                        <Link to="/">
                                        {site.logo ?
                                            <img className="site-logo" src={site.logo} alt={site.title} />
                                            : <Img fixed={data.file.childImageSharp.fixed} alt={site.title} />
                                        }
                                        </Link> 
                                        <Navigation data={site.navigation} navClass="site-nav-item" />
                                    </div>
                                }
                            </div>
                            <div className="site-mast-right">
                                <a href="/contact" className="site-nav-item" title="Contact" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} /></a>
                                <a href={ linkedInUrl } className="site-nav-item" title="LinkedIn" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                <a href={ githubUrl } className="site-nav-item" title="GitHub" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                                { site.twitter && <a href={ twitterUrl } title="Twitter" className="site-nav-item" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>}
                                <a className="site-nav-item" title="RSS" href={ `https://feedly.com/i/subscription/feed/https://ghost.brittanyellich.com/rss/` } target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faRss} /></a>
                            </div>
                        </div>
                        { isHome ?
                            <div className="site-banner">
                                {site.logo ?
                                    <img className="site-logo site-banner-title" src={site.logo} alt={site.title} />
                                    : <Img fixed={data.file.childImageSharp.fixed} alt={site.title} />
                                }
                                <p className="site-banner-desc">Software Engineer </p>
                            </div> :
                            null}
                        <nav className="site-nav">
                            <div className="site-nav-left">
                            </div>
                        </nav>
                    </div>
                </header>

                <main className="site-main">
                    {/* All the main content gets inserted here, index.js, post.js */}
                    {children}
                </main>

            </div>

            <div className="viewport-bottom">
                {/* The footer at the very bottom of the screen */}
                <footer className="site-foot">
                    <Quote />
                    <div className="site-foot-nav container">
                        <div className="site-foot-nav-left">
                            <Link to="/">{site.title}</Link> © 2019
                        </div>
                        <div className="site-foot-nav-right">
                            <Navigation data={site.navigation} navClass="site-foot-nav-item" />
                            <Link className="site-foot-nav-item" to="/contact" key="Contact">CONTACT</Link>
                        </div>
                    </div>
                </footer>

            </div>
        </div>

    </>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
}

const DefaultLayoutSettingsQuery = props => (
    <StaticQuery
        query={graphql`
            query GhostSettings {
                allGhostSettings {
                    edges {
                        node {
                            ...GhostSettingsFields
                        }
                    }
                }
                file(relativePath: {eq: "ghost-icon.png"}) {
                    childImageSharp {
                        fixed(width: 30, height: 30) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `}
        render={data => <DefaultLayout data={data} {...props} />}
    />
)

export default DefaultLayoutSettingsQuery
