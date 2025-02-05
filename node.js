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
app.post('/player1', function(req, res) {
  var choice1 = req.body.character;
  console.log(choice1);
  res.render('player2', {player1: choice1});
});

app.post('/player2', function(req, res) {
  var choice2 = req.body.character;
  var choice1 = req.body.player1; 
  console.log(choice1);
  console.log(choice2);
  res.render('game', {player2: choice2, player1: choice1});
});

app.listen(port, function() {
  console.log("Server is running on port " + port);
});