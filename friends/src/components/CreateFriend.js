import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';

class CreateFriend extends Component {
  constructor() {
    super();

    this.state = { 
      name: '',
      age: '',
      email: ''
    };
  }

  handleNameInput = (event) => {
    this.setState({ name: event.target.value });
  };

  handleAgeInput = (event) => {
    this.setState({ age: event.target.value });
  };

  handleEmailInput = (event) => {
    this.setState({ email: event.target.value });
  };

  submitFriend = (event) => {
    event.preventDefault();
    this.props.addFriend(this.state);
    this.setState({
      name: '',
      age: '',
      email: ''
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitFriend}>
          <input type="text" onChange={this.handleNameInput} placeholder="New Friend's Name" value={this.state.name} name="name" />
          <input type="text" onChange={this.handleAgeInput} placeholder="New Friend's Age" value={this.state.age} name="age" />
          <input type="text" onChange={this.handleEmailInput} placeholder="New Friend's Email" value={this.state.email} name="email" />
          <button>Add Friend</button>        
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    error: state.error,
    loading: state.loading,
  };
};

export default connect(mapStateToProps, { addFriend })(CreateFriend);