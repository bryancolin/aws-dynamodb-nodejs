const AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-2",
  endpoint: "http://localhost:8000",
});

const docClient = new AWS.DynamoDB.DocumentClient();

let params = {
  TableName: "Movies",
  Key: {
    year: 2013,
    title: "Thor: The Dark World",
  },
  UpdateExpression: "set info.rating = :r",
  ExpressionAttributeValues: {
    ":r": 6.9,
  },
  ReturnValues: "UPDATED_NEW",
};

console.log("Updating the item...");
docClient.update(params, function (err, data) {
  if (err) {
    console.error(
      "Unable to update item. Error JSON:",
      JSON.stringify(err, null, 2)
    );
  } else {
    console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
  }
});
