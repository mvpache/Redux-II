import React, { Component } from 'react';
import './App.css';

class Friend extends Component {
  render() {
    return (
      <div className='friendCard'>
        <h1>{this.props.name}</h1>
        <p>{this.props.age}</p>
        <p>{this.props.email}</p>
      </div>
    );
  }
}

export default Friend;