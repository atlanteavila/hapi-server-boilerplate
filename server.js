'use strict';

const Hapi = require('hapi'),
      Glue = require('glue'),
      Inert = require('inert'),
      Vision = require('vision'),
      Swagger = require('hapi-swagger'),
      config = require("./config.json");

const manifest = config.glueManifest;

if (config.swagger) {
    manifest.register.plugins.push({plugin: Inert})
    manifest.register.plugins.push({plugin: Vision})
    manifest.register.plugins.push({plugin: Swagger, options: config.swagger})
}

var options = {
    relativeTo: __dirname + '/libs'
};

const startServer = async function () {
    try {
        const server = await Glue.compose(manifest, options);
        await server.start();
        console.log(`Server is up and running on http://localhost:${server.settings.port}`);
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
};

startServer();