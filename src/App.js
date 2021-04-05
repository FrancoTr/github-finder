import React from 'react'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import axios from 'axios'
import './App.css'

class App extends React.Component {
  state = {
    users: [],
    loading: false //when false, the UI shows the spinner
  }

  async componentDidMount() {
    this.setState({ loading: true })

    const res = await axios.get('https://api.github.com/users') //request to the github API
    
    this.setState({ users: res.data, loading: false})
  }

  render() { //lifecycle method, it renders the app components
    return (  //with JSX, we must return only one parent element (adjacent JSX elements must be wrapped in an enclosing tag)
      <div className='App'>
        <Navbar />
        <div className="container">
        <Users />
        </div>
      </div>
    )
  }
}

export default App;
