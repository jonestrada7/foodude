import React from 'react';

import SearchBar from './SearchBar.js';
import Card from './Card.js';
import Header from './Header.js'; 

class App extends React.Component {
  
  constructor(props) {
    super(props)
      this.state = {
        entriesArray: [] ,
        addPostState: false,
        homeState: true
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

    render(){
      return <React.Fragment>
        <Header></Header>
        <SearchBar assignEntriesArray={this.assignEntriesArray}></SearchBar>
        { this.state.entriesArray.map((foodEntry,index) => 
          <Card name = {foodEntry.name} price = {foodEntry.price} 
          description = {foodEntry.description} locations = {foodEntry.locations} image = {foodEntry.image} key={index}>
          </Card>
        )
        }
      </React.Fragment>
    }
}

export default App;
