const express = require("express");
const controller = require(".././controller");
const router = express.Router();

// Search food
router.route("/")
    .get(controller.getHome)
    
router.route("/search")
    .get(controller.getEntries);

router.route("/createEntry")
    .post(controller.newFoodPost);

module.exports = router;