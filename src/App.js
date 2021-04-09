import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import axios from 'axios'
import './App.css'

class App extends React.Component {
  state = {
    users: [],
    loading: false,  //when false, the UI shows the spinner
    alert: null
  }

  // Search Github users
  searchUsers = async text => {
    this.setState({ loading: true })
    const res = await axios.get(`https:api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`) //request to the github API
    
    this.setState({ users: res.data.items, loading: false})
  }

  // Clear users from state
  clearUsers = () => this.setState({ users: [], loading: false})

  // Set Alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } })

    setTimeout(() => this.setState({ alert: null}), 5000)
  }

  render() { //lifecycle method, it renders the app components
    const { users, loading } = this.state

    return (  //with JSX, we must return only one parent element (adjacent JSX elements must be wrapped in an enclosing tag)
      <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Switch>
            <Route exact path='/' render={props => (
              <Fragment>
                <Search 
                  searchUsers={this.searchUsers}
                  clearUsers={this.clearUsers}
                  showClear={users.length > 0 ? true : false}
                  setAlert={this.setAlert}
                  />
                  <Users loading={loading} users={users} />
              </Fragment>
            )} />
          </Switch>
        </div>
      </div>
      </Router>
    )
  }
}

export default App;
