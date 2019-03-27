'use strict';

const Boom = require("boom");
const HealthCheck = {};

//handles checkin requests
HealthCheck.callBackEndpoint = function (req, h) {
    const response = h.response({ "health_check": true })
    response.type("application/json")
    return response;
}

module.exports = HealthCheck