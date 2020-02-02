import React from "react";

class SearchBar extends React.Component{

    constructor(props)
    { 
        super(props);
        this.state = {searchQuery: ""};
    }
    
    handleSearch = (e) => {
        if (e.key === 'Enter') {
            console.log("Sumbit! with value " + this.state.searchQuery);
            fetch(`/search?food=${this.state.searchQuery}`)
            .then(response => {
                response.json().then( json =>{
                    console.log("Success! Received Json: " + JSON.stringify(json));
                    this.props.assignEntriesArray(json.entriesArray);
                });
            });
        }
    }
    
    handleTyping = (e) => {
        console.log("Typing: ", e.target.value);
        this.setState({searchQuery: e.target.value});
      }
    
    render(){
        return (<React.Fragment>
            <div className="d-flex h-100" style={{"paddingLeft": "10vw","paddingTop": "10px"}}>
                <div className="searchbar">
                    <input className="search_input" type="text" name="search" placeholder="Search..." onKeyDown={this.handleSearch} onChange={this.handleTyping} value={this.state.searchQuery}>         
                    </input>
                    <a href="#" className="search_icon"><i className="fas fa-search"></i></a>
                </div>
            </div>
            <br>
            </br>
        </React.Fragment>);
    }
}

export default SearchBar; 