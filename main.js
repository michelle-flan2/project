var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require("body-parser");


app.get('/', function(req, res) {
	console.log("file io");
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/AED', function (req, res) {
 res.send('this is AED');
 })

 app.get('/AEDhtml', function (req, res) {
	 console.log("Working");
 res.send('<h1>London is great<\h1>');
 })

 app.get('/AEDfile', function(req, res) {
	console.log("AED file");
    res.sendFile(path.join(__dirname + '/AED.html'));
});
 
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/AEDfile', function (req, res) {
	console.log("post method");
	console.log(req.body.firstname);
   res.send('Hello ' + req.body.firstname + " " + req.body.lastname);
})
app.delete('/AEDfile', function (req, res) {
  res.redirect('/');
})


app.listen(8080);

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})