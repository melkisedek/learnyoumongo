var url = "mongodb://localhost:27017/"+process.argv[2];
var mongo = require('mongodb').MongoClient;

mongo.connect(url, function(err, db) {
  if(err) throw err;
  var collection = db.collection('users');
  collection.update(
    {'username': 'tinatime'},
    { 
      $set: 
      {
        'age': 40
      }
    },
    function(err, data) {
        // handle error
        if(err) throw err;
        // other operations
        console.log("Done");
      });
  db.close();
});
