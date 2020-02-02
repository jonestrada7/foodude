import React from "react";

function SearchBar(props){
    
    return <React.Fragment>
            <div className="d-flex h-100" style={{"paddingLeft": "10vw","paddingTop": "10px"}}>
                <div className="searchbar">
                    <input className="search_input" type="text" name="" placeholder="Search..."></input>
                    <a href="#" className="search_icon"><i className="fas fa-search"></i></a>
                </div>
            </div>
            <br>
            </br>
        </React.Fragment>
    ;
}

export default SearchBar; 