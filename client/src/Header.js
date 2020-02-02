import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import App from "./App";
import Form from "./Form";

class Header extends React.Component{

    constructor(props)
    {
        super(props)
        this.state = {
            
        }
    }
    // toggleSideBar = () =>{
    //     document.getElementById("sidebar").classList.toggle('active');
    //    }
    
    // menuClick = (position) => {
    //     this.props.assignMenuChoice(position);   
    // }

    // render(){
    //     return <React.Fragment>
    //         <div id="sidebar">
    //             <div className="toggle-btn" onClick={this.toggleSideBar}>
    //             <a>
    //                 <span></span>
    //                 <span></span>
    //                 <span></span>
    //             </a>
    //             </div>
    //             <ul id = "menuList">
    //               {/* onClick = {this.menuClick(this.id)} */}
    //                 <li id = "0"  style={{"fontFamily": "\'Merriweather\', serif","backgroundColor": "#353b48","padding":"20px", "color":"white"}}><Link to="/" style={{"color":"beige","textDecoration": "none"}} >Home</Link></li>
    //                 <li id = "1" style= {{"fontFamily": "\'Merriweather\', serif","backgroundColor": "#353b48","padding":"20px", "color":"white"}}><Link to="/create" style={{"color":"beige","textDecoration": "none"}} >Upload</Link></li>
    //                 <li id = "2" style={{"fontFamily": "\'Merriweather\', serif", "backgroundColor": "#353b48","padding":"20px", "color":"white"}}><Link to="/about" style={{"color":"beige","textDecoration": "none"}} >About</Link></li>
    //             </ul>
    //         </div>
    //             <center> 
    //                 <h1 style={{"fontFamily": "\'Merriweather\', serif","backgroundColor": "#353b48","padding":"20px", "color":"white"}}>
    //                     FOODUDE 
    //                     <img src="https://i.imgur.com/pkMF0BL.png" style={{"width":"9vh"}}></img>
    //                 </h1>
    //             </center>
    //     </React.Fragment>
    // }
}

export default Header; 