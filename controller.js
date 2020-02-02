const foodEntry = require('./models/foodEntryModel');
const path = require('path'); 
const dotenv = require('dotenv'); 

dotenv.config({path: './config.env'}); 

exports.getHome = async (req, res, next) => {
    // res.sendFile(path.join(__dirname, './src/test.html'));

    console.log("Home page activated!");
    res.status(200).json({
        status: "Home page: success"
    });
};

exports.getEntries = async (req, res, next) => {
    console.log("Search GET request activated!");
    
    console.log(req.body.search);
    
    // var entriesArray = await foodEntry
    //     .find({$text: {$search: req.body.search}}, function(err, data) {
    //         if (err) throw err;
    //     })  // Full text search
    //     .limit(10);
    
    var entriesArray = [1, 2];
    
    res.status(200).json({ entriesArray });
};

exports.newFoodPost = async (req, res, next) => {
    console.log("Create entry page POST activated");
    // res.sendFile(path.join(__dirname, './src/build/newFoodPost.html'));
    
    const newEntry = await foodEntry.create({
        name: req.body.food,
        price: req.body.price,
        description: req.body.description,
        locations: ["CA"],
        image: "img_url",
        tag1: req.body.tag1,
        tag2: req.body.tag2,
        tag3: req.body.tag3,
    });

    res.status(201).json({ newEntry });
};

exports.getEntryDisplay = async (req, res, next) => {
    console.log("Displaying entry");
    res.status(200).json({ status: "Success" });
}