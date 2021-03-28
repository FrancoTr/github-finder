import React from 'react';
import './App.css';

class App extends React.Component {

  render() { //lifecycle method, it renders the app components
    const name = 'John Doe'
    return (  //with JSX, we must return only one parent element (adjacent JSX elements must be wrapped in an enclosing tag)
      <div className="App">
        <h1>Hello {name}</h1>
      </div>
    );
  }
}

export default App;
