import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user:{
        name: "Casey Harding",
        username: "CRHarding",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Chris_Hemsworth_as_Thor.jpg/220px-Chris_Hemsworth_as_Thor.jpg",
        friendList: ["Julie"],
      },
      apiDataLoaded: false,
      potentialFriends: []
    }
  }
  render() {
      return (
    <div className="App">
      <h1>Caseybook</h1>
      <Profile user={this.state.user} />
    </div>
     );
    }
  }


export default App;
