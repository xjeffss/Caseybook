import React, { Component } from 'react';

import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import './App.css';
import Profile from './components/Profile';
import FriendsPage from './components/FriendsPage';


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
  async componentDidMount() {
    // do an axios call to get top stories
    const friendOne = await axios.get('https://randomuser.me/api/');
    const friendTwo = await axios.get('https://randomuser.me/api/');
    const friendThree = await axios.get('https://randomuser.me/api/');
    const friendFour = await axios.get('https://randomuser.me/api/');
    const friendFive = await axios.get('https://randomuser.me/api/');

    const friends = [
      friendOne.data.results[0],
      friendTwo.data.results[0],
      friendThree.data.results[0],
      friendFour.data.results[0],
      friendFive.data.results[0]
      ]
      // update state with the response
    this.setState({
      potentialFriends: friends,
      apiDataLoaded: true
    })
  }
  render() {
  
      return (
    <div className="App">
      <nav>
        <Link to="/" >Profile</Link>
        <Link to="/users"> Users </Link>
      </nav>
      <h1>Caseybook</h1>
      <Route exact path="/" render={() => (
        <Profile user={this.state.user}/>
      )}
      />
      <Route path="/users" render= {()=> (
        <FriendsPage potentialFriends = {this.state.potentialFriends}/>
      )} />
    </div>
     );
    }
  }


export default App;
