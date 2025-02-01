import bodyParser from "body-parser";
import express from "express";

var port = 3000;
var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(port, function() {
  console.log("Server is running on port " + port);
});