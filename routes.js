const express = require("express");
const { allAirbnbs, oneAirbnb, removeAirbnb } = require("./controllers");

const router = express.Router();

router.route("/airbnbs")
    .get(allAirbnbs)

router.route("/airbnbs/:airbnbId")
    .get(oneAirbnb)
    .delete(removeAirbnb);


module.exports = router;