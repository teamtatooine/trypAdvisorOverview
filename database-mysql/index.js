const mysql = require('mysql');
const mysqlConfig = require('./config.js');
//var Faker = require('faker');
const connection = mysql.createConnection(mysqlConfig);
connection.connect(function(err) {
  if(err) {
    console.log("Error in coonn with db", err);
  } else {
    console.log("Success in conn with db");

  }

})

////////////////////////
/*for(var i = 0; i < 100; i++) {
var userEmail = Faker.internet.email();
    console.log("userEmail", userEmail);

    var profilePicture = Faker.image.avatar();
    console.log("profilePicture", profilePicture);
    var userName = Faker.internet.userName();
    console.log("userName", userName);
    var memberSince = Faker.date.past();
    console.log("memberSince", memberSince);



    var sql = "INSERT INTO user (userName, profilePicture, memberSince) VALUES (?, ?, ?)";
    connection.query(sql, [userName, profilePicture, memberSince],
      function (err, result, fields) {
      if(err) {
        throw err;
      } else {
      console.log("Success user");
      }
    });
  }


for(var i = 0; i < 100; i++) {
    var attraction = Faker.lorem.word();
    console.log("attraction", attraction);

    var description = Faker.hacker.phrase();
    console.log("description", description);

    var phone = Faker.phone.phoneNumber();
    console.log("phone", phone);

    var attractionEmail = Faker.internet.exampleEmail();
    console.log("attractionEmail", attractionEmail);

    var domainName = "www." + Faker.internet.domainName();
    console.log("domainName", domainName);

    var suggestedDuration = "More than " + Math.floor((Math.random() * 12) + 1)   + " hours";
    console.log("suggestedDuration", suggestedDuration);

    var featuredIn = Faker.company.catchPhraseAdjective();
    console.log("featuredIn", featuredIn);

var address1 = Faker.address.streetAddress();
console.log("address1", address1);

var address2 = Faker.address.streetAddress();
console.log("address2", address2);

var city = Faker.address.city();
console.log("city", city);

var state = Faker.address.state();
console.log("state", state);

var latitude = Faker.address.latitude();
console.log("latitude", latitude);

var longitude = Faker.address.longitude();
console.log("longitude", longitude);

var zip = Faker.address.zipCode();
console.log("zip", zip);

var category = Faker.hacker.adjective();
console.log("category", category);


sql = "INSERT INTO attraction (name, description, phone, email, website, suggestedDuration, featuredIn, address1, address2, city, state, zip, latitude, longitude, category) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
connection.query(sql, [attraction, description, phone, attractionEmail, domainName,
  suggestedDuration, featuredIn,address1, address2, city, state, zip, latitude, longitude, category],
  function (err, result, fields) {
      if(err) {
        throw err;
      } else {
      console.log("Success attraction");
      }
    });
}*/

/*for(var i = 1; i < 101; i++) {
var photoDate = Faker.date.past();
console.log("photoDate", photoDate);

var caption = Faker.hacker.adjective();
console.log("caption", caption);

var imageUrl = Faker.image.nature();
console.log("imageUrl", imageUrl);

sql = "INSERT INTO attractionphotos (photoDate, caption, imageUrl, attractionId, userId) VALUES (?, ?, ?, ?, ?)";
connection.query(sql, [photoDate, caption, imageUrl, i, i],
  function (err, result, fields) {
      if(err) {
        throw err;
      } else {
      console.log("Success attractionPhotos");
      }
    });
}*/
///////////////////////////////////
/*(const insertEntry = function(callback) {
  console.log("inside insertEntry");
  callback(city);
}*/

const getAttractionById = function(id, callback) {
  console.log("inside db getattractionId");

  var sql = "select a.*, ap.*, u.userName from attraction a inner join attractionphotos ap on ap.attractionId = a.attractionId inner join user u on u.userId = ap.userId where a.attractionId = ?;"
  connection.query(sql, id, function(err, results, fields) {
    if(err) {
      throw(err);
    } else {
      callback(results);
    }
  });
}

const deleteAttractionById = function(id, callback) {
  console.log("inside db deleteAttractionById");
  console.log("req.body.id", id);
  var sql  = "DELETE FROM attractionphotos WHERE attractionId = ?";
  connection.query(sql, id, function (error, results, fields) {
    if (error) {
      throw error;
    }  else {
      console.log("success");
    }
    //res.end('Record has been deleted!');
  });

  sql = "DELETE from attraction where attractionId =?";
console.log("req.body.id second", id);
  connection.query(sql, id, function(error, results, fields) {
      if(error) {
        throw error;
      } else {
        console.log("Second Success");
        callback(results);
      }
  });
};

const improveListing = function(req, callback) {
  console.log("inside db improveListing");
  var id = parseInt(req.params.id, 10);
  console.log("id", id);
  //var id = req.body.id;
  var name = req.body.name;
  var phone = req.body.phone;
  var website = req.body.website;
  var address1 = req.body.address1;
  var city = req.body.city;
  var state = req.body.state;
  var zip = req.body.zip;
  console.log("req.body.id", id);
  console.log("req.body.name", req.body.name);
  console.log("req.body.phone", req.body.phone);
  console.log("req.body.website", req.body.website);
  console.log("req.body.address1", req.body.address1);
  console.log("req.body.city", req.body.city);
  console.log("req.body.state", req.body.state);
  console.log("req.body.zip", req.body.zip);


  //var params = req.params;

  var sql = "update attraction set name = ?, phone= ?, website = ?, address1 = ?, city = ?, state = ?, zip = ? where attractionId = ?";
  connection.query(sql, [name, phone, website, address1, city, state, zip, id], function(err, results, fields) {
    if(err) {
      throw(err);
    } else {
      callback(results);
    }
  });

};
const getPhotoByAttractionId = function(id, callback) {
  console.log("inside db getphotoByattracionId");
  var sql = "SELECT * FROM attractionphotos where attractionId = ?";
  connection.query(sql, id, function(err, results, fields) {
    if(err) {
      throw(err);
    } else {
      callback(results);
    }
  });
}

var selectAll = function(callback) {

};

const getAllLines = function(callback) {
  // TODO - your code here!
  console.log("inside getalllines");
  var sql = "SELECT name from service_lines";
  connection.query("SELECT id,name from service_lines", function(err, results, fields) {
    if(err) {
      callback(err);
    } else {
      //console.log("fields", fields);
      callback(results);
    }
  })
}

const getStopsForALine = function(callback) {
  // TODO - your code here!
  console.log("inside getStopsForALine");
  var sql = "select l.name from stops s inner join stations l on l.id = s.station_id where s.line_id = ?;";
  connection.query(sql, [1], function(err, results, fields) {
    if(err) {
      callback(err);
    } else {
      console.log("fields", fields);
      callback(results);
    }
  })
}


module.exports = {
  getAllLines,
  getStopsForALine,
  getAttractionById,
  getPhotoByAttractionId,
  deleteAttractionById,
  improveListing
};
