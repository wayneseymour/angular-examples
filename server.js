// var connect = require('connect');
// connect.createServer(
//     connect.static(__dirname)
// ).listen(8080);

// set global variables


var express = require("express");
var app = module.exports = express();


// load static content before routing takes place
app.use(express["static"](__dirname));


// load liveReload script only in development mode
// load before app.router
app.configure('development', function() {
  // live reload script
  var liveReloadPort = 35729;
  var excludeList = ['.woff', '.flv'];
  
  app.use(require('connect-livereload')({
    port: liveReloadPort,
    excludeList: excludeList
  }));
});

// // load the routes
// app.use(app.router);
// app.get("*", require("/path/to/routes"));

// start the server
if (!module.parent) {
  var port = 3000;
  app.listen(port);
  console.log("Express app started on port " + port);
}