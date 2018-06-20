import * as React from 'react';
import './App.css';
import logo from './logo.svg';

import Home from './pages/Home';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Home />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}

export default App;
