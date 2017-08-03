'use strict'

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// load manifests
// scripts
require('./assets/scripts/index.js')

// styles
require('./assets/styles/index.scss')

//const setAPIOrigin = require('../..lib/set-api-origin')
//const config = require()

let moves = []

const player1 = function() {
  $(this).text('X')
}
$('.item').click(player1)

function itemClick(X) {
  if (0 === "X") {

  }
}
//getResetClick: function(event) {
    //GameModel.init();
    //View.redraw();
  //},
//let debug = function(theText) {
  //$("#debug").text($("#debug").text() + " / " + theText);
//};
//check whos turn
//check for winners
//check horrizontal
//check vertical
//checkcheck obliqua
//restart the game botton
