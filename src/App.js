import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user:{
        name: "Casey Harding",
        username: "CRHarding",
        image: "...",
        friendList: [],
      },
      apiDataLoaded: false,
      potentialFriends: []
    }
  }
  render() {
      return (
    <div className="App">
      <h1>Caseybook</h1>
    </div>
     );
    }
  }


export default App;
