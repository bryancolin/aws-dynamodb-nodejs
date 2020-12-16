const AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-2",
  endpoint: "http://localhost:8000",
});

const docClient = new AWS.DynamoDB.DocumentClient();

let params = {
  TableName: "Movies",
  Item: {
    year: 2013,
    title: "Thor: The Dark World",
    info: {
      directors: ["Alan Taylor"],
      release_date: "2013-10-30T00:00:00Z",
      genres: ["Action", "Adventure", "Fantasy"],
      image_url:
        "http://ia.media-imdb.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_SX400_.jpg",
      plot:
        "Faced with an enemy that even Odin and Asgard cannot withstand, Thor must embark on his most perilous and personal journey yet, one that will reunite him with Jane Foster and force him to sacrifice everything to save us all.",
      rank: 5,
      actors: ["Chris Hemsworth", "Natalie Portman", "Tom Hiddleston"],
    },
  },
};

console.log("Adding a new item...");

docClient.put(params, function (err, data) {
  if (err) {
    console.error(
      "Unable to add item. Error JSON:",
      JSON.stringify(err, null, 2)
    );
  } else {
    console.log("Added item:", JSON.stringify(data, null, 2));
  }
});
