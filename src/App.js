import React from 'react'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import './App.css'

class App extends React.Component {

  render() { //lifecycle method, it renders the app components
    return (  //with JSX, we must return only one parent element (adjacent JSX elements must be wrapped in an enclosing tag)
      <div className='App'>
        <Navbar />
        <Users />
      </div>
    )
  }
}

export default App;
