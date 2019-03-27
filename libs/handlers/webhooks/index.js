'use strict';

const Boom = require("boom");
const WebHooks = {};


//handles checkin requests
WebHooks.callBackEndpoint = (req, h) => {
    return h.response({
        success: true,
        message: 'Received data',
        data: req.payload
    })
}

module.exports = WebHooks