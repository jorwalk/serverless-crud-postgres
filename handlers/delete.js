'use strict';
const AWS = require('aws-sdk');

module.exports.pin = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Pin deleted.'
        })
    };
    callback(null, response);
};