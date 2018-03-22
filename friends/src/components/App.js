import React, { Component } from 'react';
import './App.css';

import Friends from './Friends'
import CreateFriend from './CreateFriend'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Friends App</h1>
        </header>
        <Friends />
        <CreateFriend />
      </div>
    );
  }
}

export default App;
