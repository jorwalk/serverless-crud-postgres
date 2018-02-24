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
  	const data = JSON.parse(event.body);
    
  	// ERROR HANDLING
  	// if (typeof data.text !== 'string') {
	  //   console.error('Validation Failed');
	  //   callback(null, {
	  //     statusCode: 400,
	  //     headers: { 'Content-Type': 'text/plain' },
	  //     body: 'Couldn\'t create the pin.',
	  //   });
	  //   return;
	  // }

    client.connect()
    
    const qry = "INSERT INTO pins(title, subtitle, type, lat, long, coord) VALUES($1, $2, $3, $4, $5, ST_GeomFromText($6, 4326));"
    const vals = [
    	data.title,
    	data.subtitle,
    	data.type,
    	data.lat,
    	data.long,
    	'POINT('+ data.lat +' '+ data.long +')'
    ]

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
            	"body": JSON.stringify({'success':true})
        	};
        }

        callback(null, response);
    })

};


