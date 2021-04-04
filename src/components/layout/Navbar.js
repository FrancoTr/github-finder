import React from 'react'
import PropTypes from 'prop-types'

const Navbar = ({icon, title}) => {
    return (
        <nav className='navbar bg-primary'>
            <h1>
                <i className={icon}/> {title}
            </h1>
        </nav>
    )
}

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
}

Navbar.propTypes = {    //displays a console warning if the prop sent through the app does not match the specified data type
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar
