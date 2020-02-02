import React from "react"; 

function Card(props){
    return <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-md-4" style={{"width":"100%","padding":"2%"}}>
                    <img alt ="" style={{"borderRadius": "20px"}}src="https://s3-media4.fl.yelpcdn.com/bphoto/rPopevlTEzAlyIYJSHiRWQ/o.jpg"></img>
                    <center>
                        <p style={{"paddingTop": "1%"}}>
                            <img alt = "" id="checkbox"style={{"width":"10%" ,"paddingBottom": "2%"}}src="https://i.imgur.com/fywmJLQ.png"></img>
                                Number of likes
                        </p>
                    </center>
                </div> 
                <div className="col-md-8" style={{"padding":"1%"}}>
                    <h4 style={{"paddingTop": "10px","color":"beige", "paddingLeft":"1%"}}> {props.name} </h4>
                    <h4 style={{"color":"beige","paddingLeft":"1%"}}> {props.locations} </h4>
                    <h2 style={{"paddingLeft":"1%"}}>{props.price}</h2>
                    <p style={{"paddingLeft":"1%","paddingRight":"1%" ,"wordWrap":"break-word"}}>{props.description}</p>

            </div>
        </div>
    </div>
    </React.Fragment>;
    
}

export default Card; 