import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SearchBar from './SearchBar.js';
import Card from './Card.js';
import Header from './Header.js'; 
import Form from './Form.js'; 

class App extends React.Component {
  
  constructor(props) {
    super(props)
      this.state = {
        entriesArray: [] ,
        menuChoice: 0
      }
  }
  
  componentDidMount() {
    fetch('/')    
      // .then(res => res.json())
      // .then(foodEntries => this.setState({ foodEntries }));
      .then(res => res.json())
      .then(text => console.log(text));
  };
  
  assignEntriesArray = (entriesArray) => {
    this.setState({entriesArray: entriesArray});
  }
  
  toggleSideBar = () =>{
    document.getElementById("sidebar").classList.toggle('active');
   }

  // assignMenuChoice = (menuChoice) => {
  //   this.setState({menuChoice: menuChoice});
  // }
   
  renderPage = () => {
    if (this.state.menuChoice == 0 ){
      // return <React.Fragment>
      //   <SearchBar assignEntriesArray ={this.assignEntriesArray}></SearchBar>
      //   { this.state.entriesArray.map((foodEntry,index) => 
      //     <Card name = {foodEntry.name} price = {foodEntry.price} 
      //     description = {foodEntry.description} locations = {foodEntry.locations} image = {foodEntry.image} key={index}>
      //     </Card>
      //   )
      //   }
      // </React.Fragment>
    
    } else {
      return <React.Fragment>
        <Form></Form>
      </React.Fragment>
    } 
  }

    render(){
      return <React.Fragment>
        <Router>
        <div id="sidebar">
          <div className="toggle-btn" onClick={this.toggleSideBar}>
            <a>
              <span></span>
              <span></span>
              <span></span>
            </a>
              </div>
                <ul id = "menuList">
                  {/* onClick = {this.menuClick(this.id)} */}
                  <li id = "0"  style={{"fontFamily": "\'Merriweather\', serif","backgroundColor": "#353b48","padding":"20px", "color":"white"}}><Link to="/"style={{"color":"beige","textDecoration": "none"}} >Home</Link></li>
                  <li id = "1" style= {{"fontFamily": "\'Merriweather\', serif","backgroundColor": "#353b48","padding":"20px", "color":"white"}}><Link to="/create" style={{"color":"beige","textDecoration": "none"}} >Upload</Link></li>
                  <li id = "2" style={{"fontFamily": "\'Merriweather\', serif", "backgroundColor": "#353b48","padding":"20px", "color":"white"}}><Link to="/about" style={{"color":"beige","textDecoration": "none"}} >About</Link></li>
                </ul>
              </div>
              <center> 
                <h1 style={{"fontFamily": "\'Merriweather\', serif","backgroundColor": "#353b48","padding":"20px", "color":"white"}}>
                  FOODUDE 
                  <img src="https://i.imgur.com/pkMF0BL.png" style={{"width":"9vh"}}></img>
                </h1>
                  </center>
            <Switch>
              <Route exact path="/">
                  <SearchBar assignEntriesArray ={this.assignEntriesArray}></SearchBar>
                  { this.state.entriesArray.map((foodEntry,index) => 
                    <Card name = {foodEntry.name} price = {foodEntry.price} 
                    description = {foodEntry.description} locations = {foodEntry.locations} image = {foodEntry.image} key={index}>
                    </Card>
                  )}
              </Route>
              <Route path="/create">
                <Form></Form>
              </Route>
            </Switch>
          {this.renderPage()}
        </Router>
      </React.Fragment>
    }
}

export default App;
