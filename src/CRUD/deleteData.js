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
};

console.log("Attempting a conditional delete...");
docClient.delete(params, function (err, data) {
  if (err) {
    console.error(
      "Unable to delete item. Error JSON:",
      JSON.stringify(err, null, 2)
    );
  } else {
    console.log("DeleteItem succeeded:", JSON.stringify(data, null, 2));
  }
});
