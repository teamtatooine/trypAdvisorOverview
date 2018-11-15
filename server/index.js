const express = require('express');
const bodyParser = require('body-parser');
var Faker = require('faker');
//const getAllLines = require('../database-mysql');
const db = require('../database-mysql');
//const stopRouter = require('./routers/stopRouter.js')
const app = express();
const PORT = 3000;

//var userName = Faker.name.findName();
//console.log("userName", userName);





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  next();
});


// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));
//app.use(express.router);


//app.use('/api/lines', stopRouter);
//app.post('/', req, res)

/*db.insertEntry(function(city) {
  if(err) {
    console.log("err", err);
  }
  else {
    console.log("success");
    console.log("city",city);
  }
});*/

app.get('/api/:id/overview', (req, res) => {
  //console.log("Inside get/");
  ///console.log("req.body", req.params.id);
  //console.log("res", res);
  db.getAttractionById(req.params.id, function(attractionDetails) {
    //console.log("results", attractionDetails);
    res.json(attractionDetails);

  });
  //db.getPhotoByAttractionId(req.params.id, function(attractionPhotos) {
  //  console.log("attractionphotos", attractionPhotos);
  //  res.end(attractionPhotos);
  //});
});

app.post("/api/:id/overview", (req, res) => {
  //console.log("Inside post");
  res.end("post api");
})

app.delete('/api/:id/overview', (req, res) => {
  //console.log("Inside delete");
  //console.log("req params id in delete",req.params.id);
  db.deleteAttractionById(req.params.id, function(att) {
    //console.log("results", attractionDetails);
    res.end("record has been deleted");
  });
});


app.put('/api/:id/overview', (req, res) => {
  console.log("Inside put/");
  console.log("req params id in put", req.params.id);
  console.log("req.boddy", req.body);
  db.improveListing(req, function(att) {
    res.end(JSON.stringify(att));
  });
});
  // TODO - your code here!
  //
  //db.getAllLines(function(extractedLines) {
    /*(if(err) {
      console.log("err",err);
    } else {*/
      //console.log("results",extractedLines);
      //res.json(extractedLines);
    //}
  //});



app.get('/:linkId', (req, res) => {
  //console.log("reqlink",req);
});

// Write additional route handlers as needed below!

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
