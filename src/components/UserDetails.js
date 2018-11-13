import React, {Component} from 'react';
import _ from 'lodash';
import moment from 'moment';

export default class UserDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            key_selected: 0,
            repos_count: 0,
            search: '',
            copy_data: [],
            type_filter: ["Type: All", "Public", "Private", "Sources", "Forks", "Archived","Mirrors"],
            type_language: ["Type: All", "Javascript", "HTML", "Shell"],
            toolbar_data: ["Overview", "Repositories", "Stars", "Followers", "Following"]
        }
    }
    componentWillMount(){
        fetch('https://api.github.com/users/supreetsingh247/repos')
        .then(res => (res.json()))
        .then(res => {
            this.setState({data: res, copy_data: res, repos_count: res.length})
            console.log("res", res.length, this.state);
            //this.props.setReposCount(res.length);followersShow

        })
        .catch(err => {
            console.log("err", err)
        })
    }
    selectItem(event, data){
        this.setState({key_selected: event})
        //console.log("selce", event, data)
    }

    findRepository(e){
        this.setState({search: e.target.value});
        if(e.target.value !== ''){
            let filtered_repo = _.filter(this.state.copy_data, (repo, index) => (
                repo.name.toUpperCase().search(e.target.value.toUpperCase())>-1
            ));
            
            this.setState({data: filtered_repo})
        }
        else{
            this.setState({data: this.state.copy_data})
        }
        
    }
    

    selectType(e){
        console.log("select type", e.target.value)
        let search_data = e.target.value;
        switch(search_data){
            case "Type: All":
                this.setState({data: this.state.copy_data});
                break;

            case "Public":
                let x = _.filter(this.state.copy_data, (el, i) => (
                    el.private === false
                ));
                //console.log("Public", x)
                this.setState({data: x});
                break;

            case "Private":
                let y = _.filter(this.state.copy_data, (el, i) => (
                    el.private === true
                ));
                this.setState({data: y});
                break;

            case "Forks":
            let a = _.filter(this.state.copy_data, (el, i) => (
                el.fork === true
            ));
            this.setState({data: a});
            break;

            case "Mirrors":
            let b = _.filter(this.state.copy_data, (el, i) => (
                el.mirror_url !== null
            ));
            this.setState({data: b});
            break;

            case "Archived":
            let c = _.filter(this.state.copy_data, (el, i) => (
                el.archived === true
            ));
            this.setState({data: c});
            break;

            case "Javascript":
            let d = _.filter(this.state.copy_data, (el, i) => (
                el.language==="JavaScript"
            ))
            this.setState({data: d});
            break;

            case "HTML":
            let f = _.filter(this.state.copy_data, (el, i) => (
                el.language==="HTML"
            ))
            this.setState({data: f});
            break;

            case "Shell":
            let e = _.filter(this.state.copy_data, (el, i) => (
                el.language==="Shell"
            ))
            this.setState({data: e});
            break;
        }
        // let filtered_repo = _.filter(this.state.data, (repo, index) => (
        //     repo.private === //mirror_url//archived
        // ))
    }

    render(){
        return(
            <div className="user-details">
                <div className="details-toolbar">
                    {
                        _.map(this.state.toolbar_data, (data, index)=>{
                            if(index === this.state.key_selected){
                                return(
                                    <div key={data} className="individual-repo selected" onClick={this.selectItem.bind(this, index)}>
                                        {data}
                                        {
                                            (data === "Repositories")
                                                ?
                                            <span className="badge">{this.state.repos_count}</span>
                                                :
                                            null
                                        }
                                        {
                                            (data === "Followers")
                                                ?
                                            <span className="badge">{this.props.followersShow}</span>
                                                :
                                            null
                                        }
                                        {
                                            (data === "Following")
                                                ?
                                            <span className="badge">{this.props.following}</span>
                                                :
                                            null
                                        }
                                        {
                                            (data === "Stars")
                                                ?
                                            <span className="badge">{this.props.starred}</span>
                                                :
                                            null
                                        }
                                        
                                    </div>
                                )
                            }
                            else{
                                return(
                                    <div key={data} className="individual-repo" onClick={this.selectItem.bind(this, index)}>
                                        {data}
                                        {
                                            (data === "Repositories")
                                                ?
                                            <span className="badge">{this.state.repos_count}</span>
                                                :
                                            null
                                        }
                                        {
                                            (data === "Followers")
                                                ?
                                            <span className="badge">{this.props.followersShow}</span>
                                                :
                                            null
                                        }
                                        {
                                            (data === "Following")
                                                ?
                                            <span className="badge">{this.props.following}</span>
                                                :
                                            null
                                        }
                                        {
                                            (data === "Stars")
                                                ?
                                            <span className="badge">{this.props.starred}</span>
                                                :
                                            null
                                        }
                                        
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                <div className="details-searchbar">
                    <input type="text" className="search-bar" value={this.state.search} placeholder="Find a repository ..." onChange={this.findRepository.bind(this)} />
                    <div className="btn-row">
                        <select onChange={this.selectType.bind(this)}>
                            {
                                _.map(this.state.type_filter, (data, index) => (
                                    <option value={data}>{data}</option>
                                ))
                            }
                            {/* <option className="option-dropdown">Type: All</option>
                            <option className="option-dropdown">Basic</option>
                            <option className="option-dropdown">Public</option>
                            <option className="option-dropdown">Private</option> */}
                        </select>
                        <select onChange={this.selectType.bind(this)}>
                            {/* <option>Type: Languages</option>
                            <option>Basic</option>
                            <option>Public</option>
                            <option>Private</option> */}
                            {
                                _.map(this.state.type_language, (data, index) => (
                                    <option value={data}>{data}</option>
                                ))
                            }
                        </select>
                        <button type="button">
                            <i className="fa fa-book"></i>
                            New
                        </button>
                    </div>
                </div>
                <div className="repo-container">
                    {
                        _.map(this.state.data, (doc, index) => (
                            <div key={index} className="user-repo">
                                <h3>{doc.name}</h3>
                                
                                {
                                    (doc.language!==null)
                                        ?
                                    <span className="line-language"></span>
                                        :
                                    null
                                }
                                {
                                    (doc.language!==null)
                                        ?
                                    <span className="doc-language">{doc.language}</span>
                                        :
                                    null
                                }
                                
                                <span className="doc-language">Updated {moment(doc.created_at).fromNow()}</span>
                                {
                                    (doc.forks>0)
                                        ?
                                    <span className="doc-language">
                                        <i className="fa fa-code-fork"></i>
                                        {doc.forks}
                                    </span>
                                        :
                                    null
                                }
                                
                                {
                                    (doc.license!==null)
                                        ?
                                    <span className="doc-language">
                                        <i className="fa fa-balance-scale"></i>
                                        {doc.license.spdx_id}
                                    </span>
                                        :
                                    null
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}