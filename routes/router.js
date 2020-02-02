const express = require("express");
const controller = require(".././controller");
const router = express.Router();

// Search food
router.route("/")
    .get(controller.getHome)
    
router.route("/api/search")
    .get(controller.getEntries);

router.route("/api/createEntry")
    .post(controller.newFoodPost);

module.exports = router;