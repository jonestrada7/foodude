import React from "react";

class Header extends React.Component{

    constructor(props)
    {
        super(props)
        this.state = {
            menuIndexClick: 0
        }
    }
    toggleSideBar = () =>{
        document.getElementById("sidebar").classList.toggle('active');
       }
    
    menuClick = (position) => {
        this.state.menuIndexClick = position;  
    }

    render(){
        return <React.Fragment>
            <div id="sidebar">
                <div className="toggle-btn" onClick={this.toggleSideBar}>
                <a>
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
                </div>
                <ul id = "menuList">
                    <li id = "0" onClick = {this.menuClick(this.id)} style={{"fontFamily": "\'Merriweather\', serif","backgroundColor": "#353b48","padding":"20px", "color":"white"}}><a style={{"color":"beige","textDecoration": "none"}} href="foodude.html">Home</a></li>
                    <li id = "1" onClick = {this.menuClick(this.id)} style= {{"fontFamily": "\'Merriweather\', serif","backgroundColor": "#353b48","padding":"20px", "color":"white"}}><a  style={{"color":"beige","textDecoration": "none"}}href="foodude2.html">Upload</a></li>
                    <li id = "2" onClick = {this.menuClick(this.id)} style={{"fontFamily": "\'Merriweather\', serif", "backgroundColor": "#353b48","padding":"20px", "color":"white"}}><a  style={{"color":"beige","textDecoration": "none"}}href="foodude3.html">About</a></li>
                </ul>
            </div>
                <center> 
                    <h1 style={{"fontFamily": "\'Merriweather\', serif","backgroundColor": "#353b48","padding":"20px", "color":"white"}}>
                        FOODUDE 
                        <img src="https://i.imgur.com/pkMF0BL.png" style={{"width":"9vh"}}></img>
                    </h1>
                </center>
        </React.Fragment>
    }
}

export default Header; 