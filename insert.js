var url = "mongodb://localhost:27017/learnyoumongo";
var mongo = require('mongodb').MongoClient;
mongo.connect(url, function(err, db) {
  if(err) throw err;
  // db gives access to the database
  db.collection('docs').insert({firstName: process.argv[2], lastName: process.argv[3]}
    , {w:1}, function(err, data) {
        // handle error
        if(err) throw err;
        // other operations
        console.log(JSON.stringify({firstName: process.argv[2], lastName: process.argv[3]}));
      }
    );
  db.close();
});
