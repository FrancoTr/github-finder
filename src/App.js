import React from 'react'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import axios from 'axios'
import './App.css'

class App extends React.Component {
  async componentDidMount() {
    const res = await axios.get('https://api.github.com/users') //request to the github API
    console.log(res.data)
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
