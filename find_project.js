var url = "mongodb://localhost:27017/learnyoumongo";
//only fetch the fields we need  known as `projection` in MongoDB
var mongo = require('mongodb').MongoClient;

mongo.connect(url, function(err, db) {
  if(err) throw err;
  // db gives access to the database
  db.collection('parrots').find(
    {age: { $gt: parseInt(process.argv[2]) }},
    {name: 1,
    age: 1,
    _id: 0
    }).toArray(function(err, documents) {
        if(err) throw err; 
        console.log(documents);
  });
  db.close();
});
