'use strict';
const AWS = require('aws-sdk');

// CONNECT TO POSTGRES
const { Client } = require('pg')

const client = new Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DB,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

module.exports.pins = (event, context, callback) => {
	context.callbackWaitsForEmptyEventLoop = false; 
    
	client.connect()
    
    const qry = "SELECT * FROM pins"
    
    client.query(qry, (err, res) => {
        client.end()
        // IF THERE IS AN ERROR
        // SUCCESS
        var response = {
            "statusCode": 200,
            "body": JSON.stringify(res.rows)
        };
        callback(null, response);
    })
};
