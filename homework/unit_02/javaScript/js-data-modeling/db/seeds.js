// var mongoose = require('mongoose');
// var Schema = require('./schema.js');

Team:
  -name
  -points
  -win
  -lose

Player:
  -name
  -id
  -team
  -points

var team = {
  name: String,
  points: Number,
  win: Number,
  lose: Number,
}

var player ={
  name: String;
  id: Number;
  team: String,
  points: Number,
}
var exampleTeam = {
  name: "Miami"
  points: 103.2,
  win: 45,
  lose: 6,
  player: [{
    name: "Dwyane Wade",
    id: 3,
    team: "Miami",
    points: 32.5,
  }]
}

var examplePlayer = {
  name: "Dwyane Wade",
  id: 3,
  team: "Miami",
  points: 32.5,
  team: [{
    name: "Miami",
    points: 103.2,
    win: 45,
    lose: 6,
  }]
}





