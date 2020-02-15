var canvas, backgroundImage;
var database;
var gameState = 0;
var playerCount;

var form, player, game;
function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  // put drawing code here
  
}