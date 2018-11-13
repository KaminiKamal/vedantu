import React, {Component} from 'react';
import _ from 'lodash';

export default class UserBio extends Component{
    constructor(props){
        super(props);
        this.state = {
            avatar_url: null,
            name: null,
            login: null,
            bio: null,
            company: null,
            location: null,
            email: null,
            followers: 0,
            following: 0,
            public_repos: 0
        }
    }
    componentWillMount(){
        fetch('https://api.github.com/users/supreetsingh247')
        .then(res => (res.json()))
        .then(res => {
            
            this.setState({
                avatar_url: res.avatar_url,
                name: res.name,
                login: res.login,
                bio: res.bio,
                company: res.company,
                location: res.location,
                email: res.email,
                followers: res.followers,
                following: res.following,
                public_repos:  res.public_repos
            });
            this.props.followerCount(res.followers, res.following, res.public_repos);
            console.log("res", res, this.state);
        })
        .catch(err => {
            console.log("err", err);
        })
    }

    render(){
        return(
            <div className="user-bio">
                <div>
                    <img src={this.state.avatar_url} />
                    <div className='name'>{this.state.name}</div>
                    <div className="login-name">{this.state.login}</div>
                    <div className="bio">{this.state.bio}</div>
                    <button type="button" className="bio-button">
                        Edit Bio
                    </button>
                </div>
                <div>
                    <div className="company-name">
                        <i className="fa fa-user"></i>
                        {this.state.company}
                    </div>
                    <div className="company-name">
                        <i className="fas fa-map-marker-alt"></i>
                        
                        {this.state.location}
                    </div>
                    <div className="company-name">
                        {
                            (this.state.email !== null)
                                ?
                            <i className="fa fa-envelope"></i>
                                :
                            null
                        }
                        
                        {this.state.email}
                    </div>
                </div>
            </div>
        )
    }
}