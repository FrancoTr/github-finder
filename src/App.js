import React from 'react';
import './App.css';

class App extends React.Component {

  render() { //lifecycle method, it renders the app components
    const name = 'John Doe'
    const loading = false
    const showName = true
    return (  //with JSX, we must return only one parent element (adjacent JSX elements must be wrapped in an enclosing tag)
      <div className="App">
        <h1>Github Finder App</h1>
        {loading ? <h4>Loading...</h4> : <h1>Hello {showName ? name : null}</h1>}
      </div>
    );
  }
}

export default App;
