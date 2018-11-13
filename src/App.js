import React, { Component } from 'react';
import Header from './components/Header';
import UserDetails from './components/UserDetails';
import UserBio from './components/UserBio';

// import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

class App extends Component { 
  constructor(props){
    super(props);
    this.state = {
      repos_count: 0,
      followers: 0,
      following: 0,
      starred: 0,
    }
  }

  followerCount(count, follow, data){
    this.setState({followers: count, following:follow, starred: data});
    console.log("count", count)
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <div className="data-container">
          
          <UserBio followerCount={this.followerCount.bind(this)} />
          <UserDetails 
            followersShow={this.state.followers} 
            following={this.state.following}
            starred={this.state.starred}
          />

        </div>
      </div>
    );
  }
}

export default App;
