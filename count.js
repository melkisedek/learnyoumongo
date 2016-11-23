var url = "mongodb://localhost:27017/learnyoumongo";
var mongo = require('mongodb').MongoClient;

mongo.connect(url, function(err, db) {
  if(err) throw err;
  var collection = db.collection("parrots");
  collection.count(
    { age : 
      { $gt: parseInt(process.argv[2])}
    },
    function(err, count) {
      if(err) throw err;
      console.log(count);
      db.close();
    });
});
