import React, {useContext} from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import GithubContext from '../../context/github/githubContext'

const Users = () => {
    const githubContext = useContext(GithubContext)

    const { loading, users } = githubContext
    if(loading) {
        return <Spinner />
    } else {
        return (
            <div style={userStyle}>
                {users.map(user => ( //maps through each user and sends the user object to UserItem as a prop
                    <UserItem key={user.id} user={user}/>
                ))}
            </div>
        );
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
