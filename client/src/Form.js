import React from "react";
import  "./Form.css"; 

class Form extends React.Component{
  
  render(){
    return <React.Component>
       <div className="box"style={{"paddingLeft":"10%","paddingBottom":"2%"}}>
        <form action="/action_page.php">
            <div style={{"paddingTop": "10px"}} className="container">
                <div className="row">
                    <div style={{"paddingRight":"40px","paddingTop": "10px"}}className="span6">
                         Food:<br></br>
                        <input id="food"type="text" name="food" required></input>
                    </div>
                    <div style={{"paddingRight":"40px", "paddingTop": "10px"}} className="span6">
                        <div style={{"paddingLeft": "6.5%"}}>Price:<br></br></div>
                     
                        <p style={{"paddingLeft": "-20%"}}>$ <input id="price"type="text" name="price" required></input></p>
                    </div>
                </div>
            <br></br>
            </div>
        <div style={{"paddingRight": "20%"}} className="span12">
           Description:<br></br>
            <textarea style="padding:1%;" id="descrip" type="text" name="description"placeholder="Type a brief description"></textarea>
           
       </div>
       <br></br>
        <div className="row">
            <div style={{"padding-right":"1px","paddingTop": "10px","paddingLeft":"2%"}}className="span2">
                 Tag1:<br></br>
                <input id="tag1"type="text" name="tag1" required></input>
            </div>
            <div style={{"paddingRight":"1px","paddingTop": "10px"}}className="span2">
                Tag2:<br></br>
               <input id="tag2"type="text" name="tag2" required></input>
           </div>
           <div style={{"paddingTop": "10px"}}className="span2">
                Tag3:<br></br>
                <input id="tag3"type="text" name="tag3" required></input>
            </div>
        </div>
        <br></br>

        Location Name:<br></br>
        <form autocomplete="off" action="/action_page.php">
            <div className="autocomplete" style={{"paddingRight": "10%","padding-bottom": "2%"}}>
              <input style={{"width":"100%"}}id="myInput" type="text" name="myCountry" placeholder="Location" required></input>
            </div>
          </form>
          
        
        Image:<br></br>
        <input id="browse" type="file" id="myFile" required></input>
        <br></br>
        <br></br>
        

        <input id="sub" type="submit" value="Post"></input>
      </form> 
    </div>
    <br></br>
    </React.Component>

  }
}

export default Form;