var url = "mongodb://localhost:27017/learnyoumongo";

var mongo = require('mongodb').MongoClient;

mongo.connect(url, function(err, db) {
  if(err) { return console.dir(err); }
  // db gives access to the database
  db.collection('parrots').find({
      age: { $gt: parseInt(process.argv[2]) }
    }).toArray(function(err, documents) {
        if(err) { return console.dir(err); }
        console.log(documents);
  });
  db.close();
});
