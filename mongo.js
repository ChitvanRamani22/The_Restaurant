/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mysecdb");
  dbo.createCollection("cust", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
})
//=========================================create collection and db===============================
var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });

//=========================================insertone===============================
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    //u can give id by yourself if u dont want mongo to give but it should be unique
    var myobj = [
      { _id: 154, name: 'Chocolate Heaven'},
      { _id: 155, name: 'Tasty Lemon'},
      { _id: 156, name: 'Vanilla Dream'}
    ];
    dbo.collection("products").insertMany(myobj, function(err, res) {
      if (err) throw err;
      console.log(res);
      db.close();
    });
  });
  
//=========================================insert many===============================
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/";
  
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("products").find({}, { projection: { name: 1 } }).toArray(function(err, result) {
        if (err) throw err;
        console.log(result[2].name);
        db.close();
      });
    });

//=========================================find===============================    
    var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var query = {name:  /^C/};
  dbo.collection("products").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

//=========================================find all the names beginning with letter C===============================
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var mysort = { name: -1 };
  dbo.collection("products").find({}, { projection: { _id: 1, name: 0} }).limit(1).sort(mysort).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
})

//=========================================find all the colun which u want to see give
//its projection 1 else 0 limit is used to limit the number of enteries u want to see
//and sort here is sorting entries in descending alphabetic order===============================
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: 'Highway 37'};
  var newvalues = {$set: {name: "Minni"} };
  dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log(res.result.nModified + " document(s) updated");
    db.close();
  });
});
//=========================================upsate my query with new values===============================
//this updateone will update frst entry with add highway 37
//if u want to update all enteries with this add use updatemany
//and also we can give mutiple values in my query and newvalues*/     