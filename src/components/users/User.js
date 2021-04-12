import React, { Fragment, Component } from 'react'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login) //using the user from the url, getUser obtains the rest of the gitHub profile info
    }

    static propTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired
    }

    render() {
        const {
            name,
            avatar,
            url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = this.props.user

        const { loading } = this.props

        if (loading) return <Spinner/>

        return (
            <Fragment>
                <Link to='/' className='btn tbn-light'>
                    Back To Search
                </Link>
                Hireable: {' '}
                {hireable ? <i className="fas fa-check text-success" /> : <i className="fas fa-times-circle text-danger" /> }
            </Fragment>
        )
    }
}

export default User
