import React, { Component } from 'react'
import UserItem from './UserItem'

const Users = ({ users, loading }) => {
    return (
        <div style={userStyle}>
            {users.map(user => ( //maps through each user and sends the user object to UserItem as a prop
                <UserItem key={user.id} user={user}/>
            ))}
        </div>
    );
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
