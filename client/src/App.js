import React from 'react';

import SearchBar from './SearchBar.js';
import Card from './Card.js';


class App extends React.Component {
  
  constructor(props) {
    super(props)
      this.state = {
        foodEntries: []
      }
  }
  
  // state = {foodEntries: []}

  componentDidMount() {
    fetch('../../controller')
      .then(res => res.json())
      .then(foodEntries => this.setState({ foodEntries }));
  }

    render(){
      return <React.Fragment>
        <SearchBar></SearchBar>
        { this.state.foodEntries.map(foodEntry => 
          <Card name = {foodEntry.name} price = {foodEntry.price} 
          description = {foodEntry.description} locations = {foodEntry.locations} image = {foodEntry.image}>
          </Card>
        )
  
        }
      </React.Fragment>
    }
}

export default App;
