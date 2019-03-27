'use strict';
const Hapi = require('hapi');
const Joi = require('joi');
const HealthCheck = require('../handlers/HealthCheck');
const WebHooks = require('../handlers/WebHooks')

exports.plugin = {
    register: async function (server, options) {
        // Create a route for example
        server.route({
            method: 'GET',
            path: '/health_check',
            handler: HealthCheck.callBackEndpoint,
            options: {
                tags: ['api'],
                description: "This is used to test whether this server is running up or not."
            }

        });

        server.route({
            method: 'POST',
            path: '/web-hooks-lockers',
            handler: WebHooks.callBackEndpoint,
            options: {
                tags: ['api'],
                description: "Used to receive the order information from a specified locker.",
                validate: {
                    payload: {
                        lockerInformation: Joi.object()
                    },
                    headers: Joi.object({
                    }).options({
                        allowUnknown: true
                    })
                }
            }

        });
    }
}

exports.plugin.pkg = require('./package.json')
