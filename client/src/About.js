import React from "react"; 

class About extends React.Component {

    render () {
        return <React.Fragment>
                <div className="row">
                    <div className="col-md-3">
                    <div className="card-wrapper">
                    <div className="card">
                        <img src="https://www.htmlcsscolor.com/preview/gallery/353B48.png" alt="card background" className="card-img"></img>
                        <img style={{"zIndex": "1"}} src="https://i.imgur.com/LcGfsL5.jpg" alt="profile image" className="profile-img"></img>
                        <h1>Jon Estrada</h1>
                        <p className="job-title">HackUCI Programmer</p>
                        <p className="about">jonatae2@uci.edu</p>
                        <p className="job-title">&nbsp;</p>
                    </div>
                    </div>
                    </div>
                <div className="col-md-3">
                    <div className="card-wrapper">
                    <div className="card">
                    <img src="https://www.htmlcsscolor.com/preview/gallery/353B48.png" alt="card background" className="card-img"></img>
                    <img style={{"zIndex": "1"}} src="https://i.imgur.com/4UAsDLf.jpg" alt="profile image" className="profile-img"></img>
                    <h1>Terry Nguyen</h1>
                    <p className="job-title">HackUCI Programmer</p>
                    <p className="about">terryhn1@uci.edu</p>
                    <p className="job-title">&nbsp;</p>
                    </div>
                    </div>
                    </div> 
                <div className="col-md-3">
                <div className="card-wrapper">
                <div className="card">
                    <img src="https://www.htmlcsscolor.com/preview/gallery/353B48.png" alt="card background" className="card-img"></img>
                    <img style={{"zIndex": "1"}} src="https://i.imgur.com/hbhdwdL.jpg" alt="profile image" className="profile-img"></img>
                    <h1>Caleb Bertumen</h1>
                    <p className="job-title">HackUCI Programmer</p>
                    <p className="about">cbertume@uci.edu</p>
                    <p className="job-title">&nbsp;</p>
                </div>
                </div>
                </div>
                <div className="col-md-3">
                <div className="card-wrapper">
                <div className="card">
                    <img src="https://www.htmlcsscolor.com/preview/gallery/353B48.png" alt="card background" className="card-img"></img>
                    <img style={{"zIndex": "1"}} src="https://i.imgur.com/a0K8JY1.jpg" alt="profile image" className="profile-img"></img>
                    <h1>Brian Liu</h1>
                    <p className="job-title">HackUCI Programmer</p>
                    <p className="about">liuba@uci.edu</p>
                    <p className="job-title">&nbsp;</p>
                </div>
                </div>
                </div>
            </div>
        <br></br>
    <center>
        <h1 style={{"fontFamily": "\'Merriweather\', serif","color":"#353b48"}}>About FooDude</h1>
        <hr style={{"borderWidth": "9px", "color":"#353b48","borderColor":"#353b48","backgroundColor":"#353b48","width":"30%","border-radius":"200px"}}></hr>
    </center>
    <h4 style={{"fontFamily": "\'Merriweather\', serif","color":"#353b48", "paddingLeft":"5%","paddingRight": "2%"}}>FooDude is a website application that was designed for users to post about their food experience at specific locations.  Unlike other food review applications, FooDude allows for users to post pictures alongside the exact price of their meal, allowing others to see if the food fits exactly within their price range. This application helps promote restaurants, while also allowing people to share their tasty adventures!</h4>
    <br></br>
    <br></br>
    </React.Fragment>
    }
}

export default About; 