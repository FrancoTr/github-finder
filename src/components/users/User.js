import React, { Component } from 'react'

export class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login) //using the user from the url, getUser obtains the rest of the gitHub profile info
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
        return (
            <div>
                {name}
            </div>
        )
    }
}

export default User
