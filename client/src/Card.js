import React from "react"; 

function Card(props){
    return <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-md-4" style={{"width":"100%","padding":"2%"}}>
                    <img alt ="" style={{"borderRadius": "20px"}}src={props.image}></img>
                    <center>
                        <p style={{"paddingTop": "1%"}}>
                            <br></br>
        
                            <img alt = "" id="checkbox"style={{"width":"10%" ,"paddingBottom": "2%"}}
                            src="https://i.imgur.com/fywmJLQ.png" onMouseOver={e => (e.currentTarget.src="https://i.imgur.com/pG6NbsI.png")} 
                            onMouseOut={e => (e.currentTarget.src="https://i.imgur.com/fywmJLQ.png")}
                            className="likeImage"></img>
                                {props.likes} Likes
                        </p>
                    </center>
                </div> 
                <div className="col-md-8" style={{"padding":"1%"}}>
                <h1 style={{"color":"beige","paddingLeft":"1%"}}>{props.type} </h1>
                {/* <p style={{"paddingLeft":"1%","paddingRight":"1%" ,"wordWrap":"break-word"}}>{props.type}</p> */}
                    <h4 style={{"color":"beige","paddingLeft":"1%"}}><b>Location: </b>{props.location} </h4>
                    <h2 style={{"paddingLeft":"1%"}}>${props.price}</h2>
                    <p style={{"paddingLeft":"1%","paddingRight":"1%", "paddingTop":"4%", "wordWrap":"break-word"}}> <b>Type of food: </b>{props.name}</p>
                    <p style={{"paddingTop": "10px","color":"beige", "paddingLeft":"1%"}}><b>Description: </b>{props.description} </p>

            </div>
        </div>
    </div>
    <br></br>
    </React.Fragment>;
    
}

export default Card; 