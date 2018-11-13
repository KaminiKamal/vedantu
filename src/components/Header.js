import React, { Component } from 'react'
import _ from 'lodash';

export default class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            menuItems: ["Pull requests", "Issues", "Marketplace", "Explore"]
        }
    }
    render() {
        //console.log("hedare", this.props.repoCount)
        return (
            <div className="header">
                <div className="header-content">
                    <div className="header-items">
                        <div className="item-element">
                            <input type="text" placeholder="search text..." className="search-box"></input>
                            {
                                _.map(this.state.menuItems, (mnu_itm, index) => (
                                    <span className="header-element">{mnu_itm}</span>
                                ))
                            }
                            
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        )
  }
}
