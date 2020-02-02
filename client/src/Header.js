import React from "react";

class Header extends React.Component{

    toggleSidebar = () =>{
        document.getElementById("sidebar").classList.toggle('active');
       }

    render(){
        return <React.Fragment>
            <div id="sidebar">
                <div class="toggle-btn" onclick={this.toggleSideBar}>
                <a>
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
                </div>
    <ul>
       <li style={{"fontFamily": "\'Merriweather\', serif","backgroundColor": "#353b48","padding":"20px", "color":"white"}}><a style={{"color":"beige","textDecoration": "none"}} href="foodude.html">Home</a></li>
       <li style= {{"fontFamily": "\'Merriweather\', serif","backgroundColor": "#353b48","padding":"20px", "color":"white"}}><a  style={{"color":"beige","textDecoration": "none"}}href="foodude2.html">Upload</a></li>
       <li style={{"fontFamily": "\'Merriweather\', serif", "backgroundColor": "#353b48","padding":"20px", "color":"white"}}><a  style={{"color":"beige","textDecoration": "none"}}href="foodude3.html">About</a></li>
      </ul>
     </div>
      <container>
        <center> 
            <h1 style={{"fontFamily": "\'Merriweather\', serif","backgroundColor": "#353b48","padding":"20px", "color":"white"}}>
                FOODUDE 
                <img src="https://i.imgur.com/pkMF0BL.png" style="width:9vh"></img>
            </h1>
        </center>
      </container>
        </React.Fragment>
    }
}

export default Header; 