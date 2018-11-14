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
       <div className="App">
        <div className="container">
          <div className="card-container">
            <div className="date-tag">
              <div className="date-month">
                AUG
              </div>
              <div className="date-date">
                27
              </div>
            </div>
            <div class="box-content">
              <div class="box-ribbon">
                <div className="time-tag">
                  <div>6-7 PM</div>
                </div>
                <div className="details-tag">
                    <span>Black Hole Geographies: A study in special reality and ther...</span>
                    <span className="inv-name">  By <u>Alfred Nobel</u></span>
                </div>
                <div className="display-btn">
                  <button type="button" className="reminder-btn">Set Reminder</button>
                </div>
              </div>
              <div class="box-ribbon-center">
                <div className="time-tag">
                  <div>7-8 PM</div>
                </div>
                <div className="details-tag">
                    <span>Black Hole Geographies: A study in special reality and there ...</span>
                    <span className="inv-name">  By <u>Alfred Nobel</u></span>
                </div>
                <div className="display-btn">
                  <button type="button" className="reminder-btn">Set Reminder</button>
                </div>
              </div>
              <div class="box-ribbon">
                <div className="time-tag">
                  <div>8-9 PM</div>
                </div>
                <div className="details-tag">
                    <span>Black Hole Geographies: A study in special reality and ther...</span>
                    <span className="inv-name">  By <u>Alfred Nobel</u></span>
                </div>
                <div className="display-btn">
                  <button type="button" className="reminder-btn">Set Reminder</button>
                </div>
              </div>
              {/* <div class="box-ribbon">
                <div className="time-tag">
                  <div>7-8 PM</div>
                </div>
                <div className="details-tag">
                    <span>Black Hole Geographies: A study in special reality and ther...</span>
                </div>
                <div className="display-btn">
                  <button type="button" className="reminder-btn">set reminder</button>
                </div>
                <div class="box-ribbon">
                <div className="time-tag">
                  <div>8-9 PM</div>
                </div>
                <div className="details-tag">
                    <span>Black Hole Geographies: A study in special reality and ther...</span>
                </div>
                <div className="display-btn">
                  <button type="button" className="reminder-btn">set reminder</button>
                </div>
              </div>
              </div>
                 */}
          
            </div>
          </div>
        </div>
        
        {/* <Header/>
        <div className="data-container">
          
          <UserBio followerCount={this.followerCount.bind(this)} />
          <UserDetails 
            followersShow={this.state.followers} 
            following={this.state.following}
            starred={this.state.starred}
          />

        </div> */}
      </div>
      </div>
    );
  }
}

export default App;
