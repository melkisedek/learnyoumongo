var url = "mongodb://localhost:27017/learnyoumongo";
var mongo = require('mongodb').MongoClient;

mongo.connect(url, function(err, db) {
  if(err) throw err;
  var collection = db.collection("prices");
  
  collection.aggregate([
    { $match: { size: process.argv[2] }},
    { $group: {
        _id: 'avg', // This can be an arbitrary string
        // calculate average
        average: { $avg: '$price' }
      }
    }],
    function(err, result) {
      if(err) throw err;
      console.log(Number(result[0].average).toFixed(2));
      db.close();
    });
});
