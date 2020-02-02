import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Card.js';
import "./Form.js";


class App extends React.Component {
  state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
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
