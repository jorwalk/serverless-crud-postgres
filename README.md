# serverless-crud-postgres
API Gateway, Lambda, Postgres Crud

## Dependencies

 - [Serverless](https://github.com/serverless/serverless)
 - [node-postgres](https://github.com/brianc/node-postgres)
 - [dotenv](https://github.com/motdotla/dotenv)

Install via npm:
```
npm install -g serverless
```

### Deploy
```
serverless deploy -v
```
### Undeploy
```
serverless remove
```
### Sample Output
```
Service Information
service: pins
stage: dev
region: us-east-1
stack: pins-dev
api keys:
  None
endpoints:
  GET - https://0aaa0bbbbb.execute-api.us-east-1.amazonaws.com/dev/pins
  POST - https://0aaa0bbbbb.execute-api.us-east-1.amazonaws.com/dev/pins
  GET - https://0aaa0bbbbb.execute-api.us-east-1.amazonaws.com/dev/pins/{id}
  PUT - https://0aaa0bbbbb.execute-api.us-east-1.amazonaws.com/dev/pins/{id}
  DELETE - https://0aaa0bbbbb.execute-api.us-east-1.amazonaws.com/dev/pins/{id}
functions:
  list: pins-dev-list
  create: pins-dev-create
  get: pins-dev-get
  update: pins-dev-update
  delete: pins-dev-delete

Stack Outputs
DeleteLambdaFunctionQualifiedArn: 
CreateLambdaFunctionQualifiedArn: 
GetLambdaFunctionQualifiedArn: 
UpdateLambdaFunctionQualifiedArn: 
ListLambdaFunctionQualifiedArn: 
ServiceEndpoint: https://0aaa0bbbbb.execute-api.us-east-1.amazonaws.com/dev
ServerlessDeploymentBucketName: 
```
## CURL Endpoints
```
curl -X GET https://0aaa0bbbbb.execute-api.us-east-1.amazonaws.com/dev/pins
curl -X POST https://0aaa0bbbbb.execute-api.us-east-1.amazonaws.com/dev/pins --data '{ "text": "First Todo" }'
curl -X GET https://0aaa0bbbbb.execute-api.us-east-1.amazonaws.com/dev/pins/123
curl -X PUT https://0aaa0bbbbb.execute-api.us-east-1.amazonaws.com/dev/pins/123 --data '{ "text": "First Todo" }'
curl -X DELETE https://0aaa0bbbbb.execute-api.us-east-1.amazonaws.com/dev/pins/123

```

### AWS Lambda error response
```
const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);
  if (typeof data.text !== 'string') {
    console.error('Validation Failed');
    callback(null, {
      statusCode: 400,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Couldn\'t create the todo item.',
    });
    return;
  }

```

### AWS Lambda success response
```
var response = {
    "statusCode": 200,
    "headers": {
        "my_header": "my_value"
    },
    "body": JSON.stringify(res.rows[0]),
    "isBase64Encoded": false
};
callback(null, response);
```

## Useful Links
* [AWS Service Guide](https://serverless.com/framework/docs/providers/aws/guide/services/