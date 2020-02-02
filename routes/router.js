const express = require("express");
const controller = require(".././controller");
const router = express.Router();

// Search food
router.route("/")
    .get(controller.getHome)
    .post(controller.searchEntries);

router.route("/createEntry")
    .post(controller.newFoodPost);

module.exports = router;