import React from 'react';

import SearchBar from './SearchBar.js';
import Card from './Card.js';
import Header from './Header.js'; 
import Form from './Form.js'; 

class App extends React.Component {
  
  constructor(props) {
    super(props)
      this.state = {
        entriesArray: [] ,
        menuState: 0
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

  assignMenuChoice = (menuChoice) => {
    this.setState({menuState: menuChoice})
  }

  renderPage = () => {
    if (this.state.menuState == 0 ){
      return <React.Fragment>
        <SearchBar assignEntriesArray ={this.assignEntriesArray}></SearchBar>
        { this.state.entriesArray.map((foodEntry,index) => 
          <Card name = {foodEntry.name} price = {foodEntry.price} 
          description = {foodEntry.description} locations = {foodEntry.locations} image = {foodEntry.image} key={index}>
          </Card>
        )
        }
      </React.Fragment>
    
    } else {
      return <React.Fragment>
        <Form></Form>
      </React.Fragment>
    } 
  }

    render(){
      return <React.Fragment>
        <Header menuChoice = {this.assignMenuChoice(menuChoice)}></Header>
        {this.renderPage()}
      </React.Fragment>
    }
}

export default App;
