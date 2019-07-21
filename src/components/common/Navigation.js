import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

/**
* Navigation component
*
* The Navigation component takes an array of your Ghost
* navigation property that is fetched from the settings.
* It differentiates between absolute (external) and relative link (internal).
* You can pass it a custom class for your own styles, but it will always fallback
* to a `site-nav-item` class.
*
*/
const Navigation = ({ navClass }) => (
    <>
        {
            <>
            <Link className={navClass} to="/" key="Home">Home</Link>
            <a className={navClass} href="https://ghost.brittanyellich.com/" key="Blog" rel="noopener noreferrer">Blog</a>
            <Link className={navClass} to="/projects" key="Projects">Projects</Link>
            <Link className={navClass} to="/about" key="About">About</Link>
            </>
        }
    </>
)

Navigation.defaultProps = {
    navClass: `site-nav-item`,
}

Navigation.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
    navClass: PropTypes.string,
}

export default Navigation
