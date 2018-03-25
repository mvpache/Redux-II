import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import Friend from './Friend';
import CreateFriend from './CreateFriend';
import { getFriends } from '../actions';

class App extends Component {

  componentDidMount(){
    this.props.getFriends();
  }
  //call it in CDM

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Friends App</h1>
        </header>
        {this.props.friends.map((friend) =>
          <div className='friend' key={friend.id}>
            <Friend name={friend.name} age={friend.age} email={friend.email} />
          </div>
        )}
        <CreateFriend />
      </div>
    );
  }
}

const mapstateToProps = state => {
  return {
    friends: state.friends,
    error: state.error,
    loading: state.loading,
  };
};

export default connect(mapstateToProps, { getFriends })(App);
