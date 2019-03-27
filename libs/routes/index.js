'use strict';
const Hapi = require('hapi');
const Joi = require('joi');
const HealthCheck = require('../handlers/HealthCheck');

exports.plugin = {
    register: async function (server, options) {
        // Create a route for example
        server.route({
            method: 'GET',
            path: '/health_check',
            handler: HealthCheck.callBackEndpoint,
            options: {
                tags: ['api'],
                description: "This is used to test whether check-in-check-out service is running up or not."
            }

        });
    }
}

exports.plugin.pkg = require('./package.json')
