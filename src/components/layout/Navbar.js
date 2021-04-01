import React, { Component } from 'react'
import PropTypes from 'prop-types'
export class Navbar extends Component {
    static defaultProps = {
        title: 'Github Finder',
        icon: 'fab fa-github'
    }

    static PropTypes = {    //displays a console warning if the prop sent through the app does not match the specified data type
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }

    render() {
        return (
            <nav className='navbar bg-primary'>
                <h1>
                    <i className={this.props.icon}/> {this.props.title}
                </h1>
            </nav>
        )
    }
}

export default Navbar
