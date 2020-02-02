import React from "react";
import  "./Form.css"; 

class Form extends React.Component{
  constructor() {
    super();
    this.state = {
      food: '',
      type: '',
      price: 0,
      description: '',
      location: '',
      image: ''
    };
      
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event){
    if (event.target.name == "food") {
      this.setState({ food: event.target.value });
    } 
    else if (event.target.name == "type") {
      this.setState({ type: event.target.value });
    }
    else if (event.target.name == "price") {
      this.setState({ price: event.target.value });
    }
    else if (event.target.name == "description") {
      this.setState({ description: event.target.value });
    }
    else if (event.target.name == "location") {
      this.setState({ location: event.target.value });
    }
    else if (event.target.name == "image") {
      this.setState({ image: event.target.value });
    }
  }
  
  handleSubmit(event){
    // console.log(this.state);
    alert("Thank you for your submission! :)");
    event.preventDefault();
    
    fetch('/api/createEntry', { 
      method: 'POST',
      headers:{'content-type': 'application/json'},
      body: JSON.stringify(this.state)
    });
  }
  
  render(){
    return <React.Fragment>
       <div className="box"style={{"paddingLeft":"10%","paddingBottom":"2%"}}>
        <form onSubmit={this.handleSubmit}>
            <div className = "form-group">
              <label for="food">Menu Item</label>
              <input id="food" className = "form-control" type="text" name="food" value={this.state.food} onChange={this.handleChange} placeholder = "Enter Food" required></input>
            </div>
            
            <div className = "form-group">
              <label for="type">Type Of Food</label>
              <input id="type"type="text" className = "form-control" name="type" value={this.state.type} onChange={this.handleChange} placeholder = "Enter Type of Food (e.g. pizza, boba, pasta)" required></input>
            </div>
            
            <div className = "form-group">
              <label for="price">Price</label>
              <input id="price"type="text" className = "form-control" name="price" value={this.state.price} onChange={this.handleChange} placeholder = "Enter Price" required></input>
            </div>
          
            <div className = "form-group">
              <label for="description">Description</label>
              <textarea name = "description" className = "form-control" rows = "3" id = "description" value={this.state.description} onChange={this.handleChange} placeholder = "Enter your experience!"></textarea>
            </div>

            <div className = "form-group">
              <label for = "location">Location</label>
              <input id="location" type="text" name="location" className = "form-control" value={this.state.location} onChange={this.handleChange} placeholder = "Enter Location" required></input>
            </div>

            <div className = "form-group">
              <label for = "image">Image URL</label>
              <input id = "location" type = "text" name = "image" className = "form-control" value={this.state.image} onChange={this.handleChange}placeholder = "Image URL"></input>
            </div>

            <button id="sub" type="submit" className = "btn btn-secondary btn-large">Post!!</button>
      </form> 
    </div>
    <br></br>
    </React.Fragment>

  }
}

export default Form;