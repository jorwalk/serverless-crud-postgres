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

module.exports.pin = (event, context, callback) => {
	context.callbackWaitsForEmptyEventLoop = false; 

	client.connect()

    const qry = "SELECT * FROM pins WHERE id = $1"
    const vals = [ event.pathParameters.id ]

    client.query(qry, vals, (err, res) => {
        client.end()
        let response = {}
        
        if(err) {
        	response = {
            	"statusCode": 400,
            	"body": JSON.stringify({'success':false})
        	};
        } else {
        	response = {
            	"statusCode": 200,
            	"body": JSON.stringify({'success':true, 'data': res.rows})
        	};
        }

        callback(null, response);
    })

};

