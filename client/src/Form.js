import React from "react";
import  "./Form.css"; 

class Form extends React.Component{
  
  render(){
    return <React.Fragment>
       <div className="box"style={{"paddingLeft":"10%","paddingBottom":"2%"}}>
        <form action="/action_page.php">
            <div className = "form-group">
              <label for="food">Food</label>
              <input id="food" className = "form-control" type="text" name="food" placeholder = "Enter Food" required></input>
            </div>
            <div className = "form-group">
              <label for="price">Price</label>
              <input id="price"type="text" className = "form-control" name="price" placeholder = "Enter Price" required></input>
            </div>

            <div className = "form-group">
              <label for="description">Description</label>
              <textarea name = "description" className = "form-control" rows = "3" id = "description" placeholder = "Enter Description of your Experience"></textarea>
            </div>

            <div className = "form-group">
              <label for="tag1">Tag1</label>
              <input id="tag1"type="text" name="tag1" className = "form-control" placeholder = "Enter Tag1" required></input>
            </div>

            <div className = "form-group">
              <label for="tag2">Tag2</label>
              <input id = "tag2" type = "text" name = "tag2" className = "form-control" placeholder = "Enter Tag2"></input>
            </div>

            <div className = "form-group">
              <label for ="tag3">Tag3</label>
              <input id = "tag3" type = "text" name = "tag3" className = "form-control" placeholder = "Enter Tag3"></input>
            </div>

            <div className = "form-group">
              <label for = "location">Location</label>
              <input id="location" type="text" name="location" className = "form-control" placeholder = "Enter Location" required></input>
            </div>

            <div className = "form-group">
              <label for = "imageURL">Image URL</label>
              <input id = "location" type = "text" name = "imageURL" className = "form-control"></input>
            </div>

            <button id="sub" type="submit" className = "btn btn-secondary btn-large">Post!!</button>
      </form> 
    </div>
    <br></br>
    </React.Fragment>

  }
}

export default Form;