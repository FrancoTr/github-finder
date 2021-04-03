import React, { Component } from 'react'

class UserItem extends Component {
    state = { 
        id: 'id',
        login: 'mojombo',
        avatarl_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo'
    }
    render() {
        const {login, avatarl_url, html_url} = this.state   //destructuring the state values, so we no longer repeat this.state
        return (
            <div classname= "card text-center">
                <img src={avatarl_url} alt="" className="round-img" style={{ width: '60px'}}/>
                <h3>{login}</h3>
                <div>
                    <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
                </div>
            </div>
        )
    }
}

export default UserItem
