const mongoose = require("mongoose");
const Airbnb = mongoose.model("Airbnb");

const oneAirbnb =  function(request, response) {
    const airbnbId = request.params.airbnbId;

    if (!mongoose.isValidObjectId(airbnbId)) {
        response.status(400).json({message: "Invalid airbnb ID"})
        return;
    }

    const responseCollection = _createResponseCollection();

    Airbnb.findById(airbnbId).exec()
        .then(airbnb => {
            if(!airbnb) {
                responseCollection.status = 404;
                responseCollection.message = "Airbnb ID not found";
                return;
            }

            responseCollection.status = 200;
            responseCollection.message = airbnb
        }).catch(error => {

        }).finally(() => {
            _sendResponse(response, responseCollection)
        })



}
const removeAirbnb =  function(request, response) {
    const airbnbId = request.params.airbnbId;

    if (!mongoose.isValidObjectId(airbnbId)) {
        response.status(400).json({message: "Invalid airbnb ID"})
        return;
    }

    const responseCollection = _createResponseCollection();

    Airbnb.findByIdAndDelete(airbnbId).exec()
        .then(airbnb => {
            if(!airbnb) {
                responseCollection.status = 404;
                responseCollection.message = "Airbnb ID not found";
                return;
            }

            responseCollection.status = 200;
            responseCollection.message = {message: "Deleted successfully"}
        }).catch(error => {

        }).finally(() => {
            _sendResponse(response, responseCollection)
        })



}
const allAirbnbs =  function(request, response) {
    let count = 5;
    let offset = 0;
    const maxCount = 10;

    if (request.query && request.query.count) {
        count = parseInt(request.query.count, 10)
    }
    if (request.query && request.query.offset) {
        offset = parseInt(request.query.offset, 10)
    }
    if (isNaN(count) || isNaN(offset)) {
        response.status(400).json({message: "Invalid count or offset"})
        return;
    }
    if (count > maxCount) {
        response.status(400).json({message: "Count should be less or equal to 10"})
        return;
    }

    const responseCollection = _createResponseCollection();

    Airbnb.find().limit(count).skip(offset).exec()
        .then(airbnbs => {
            if(!airbnbs) {
                responseCollection.status = 404;
                responseCollection.message = "Airbnbs not found";
                return;
            }

            responseCollection.status = 200;
            responseCollection.message = airbnbs
        }).catch(error => {

        }).finally(() => {
            _sendResponse(response, responseCollection)
        })



}

const _createResponseCollection = function() {
    return {
        status: 201,
        message: ""
    }
}

const _sendResponse = function(response, responseCollection) {
    response.status(responseCollection.status).json(responseCollection.message);
}

module.exports = {
    allAirbnbs,
    oneAirbnb,
    removeAirbnb
}