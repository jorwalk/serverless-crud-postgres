'use strict';
const AWS = require('aws-sdk');

module.exports.pins = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Pins listed.'
        })
    };
    callback(null, response);
};