'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

$(() => {
  authEvents.addHandlers()
})
const message = $('.message')
let over
const runGame = function () {
  // const myBoard = []
  // const players = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x']
  // const item = ['0item', '1item', '2item', '3item', '4item', '5item', '6item', '7item', '8item']
  // const myboard = ['', '', '']

  // TODO add to sigin call back
  // function sig () {
  //   $('.sigfirst').hide();
  //   $('.sigsec').fadeIn(1000);
  let player = 1
  // const player2 = o
  $('.cell').on('click', function () {
    if (player === 1) {
      $(this).html('x').off()
    } else {
      $(this).html('o').off()
    }
    let turn = setPlayer(player)
    player = turn
    turn++
    if (turn >= 8) {
      return message.html('draw')
    }
    checkForWin()
  })
  // switchPlayer
  function setPlayer (player) {
    if (player === 1) {
      return 2
    } else {
      return 1
    }
  }
  const checkForWin = function () {
    if ($('#0item').html() === 'x' && $('#1item').html() === 'x' && $('#2item').html() === 'x') {
      console.log('x wins')
      message.html('The winner is ' + player)
      over = true
    } else if ($('#3item').html() === 'x' && $('#4item').html() === 'x' && $('#5item').html() === 'x') {
      console.log('x wins')
      message.html('The winner is ' + player)
      over = true
    } else if ($('#6item').html() === 'x' && $('#7item').html() === 'x' && $('#8item').html() === 'x') {
      console.log('x wins')
      message.html('The winner is ' + player)
      over = true
    } else if ($('#0item').html() === 'o' && $('#1item').html() === 'o' && $('#2item').html() === 'o') {
      console.log('o wins')
      message.html('The winner is ' + player)
      over = true
    } else if ($('#3item').html() === 'o' && $('#4item').html() === 'o' && $('#5item').html() === 'o') {
      console.log('o wins')
      message.html('The winner is ' + player)
      over = true
    } else if ($('#6item').html() === 'o' && $('#7item').html() === 'o' && $('#8item').html() === 'o') {
      console.log('o wins')
      message.html('The winner is ' + player)
      over = true
    } else if ($('#0item').html() === 'x' && $('#4item').html() === 'x' && $('#8item').html() === 'x') {
      console.log('x wins')
      message.html('The winner is ' + player)
      over = true
    } else if ($('#2item').html() === 'x' && $('#4item').html() === 'x' && $('#6item').html() === 'x') {
      console.log('x wins')
      message.html('The winner is ' + player)
      over = true
    } else if ($('#0item').html() === 'o' && $('#4item').html() === 'o' && $('#8item').html() === 'o') {
      console.log('o wins')
      message.html('The winner is ' + player)
      over = true
    } else if ($('#2item').html() === 'o' && $('#4item').html() === 'o' && $('#6item').html() === 'o') {
      console.log('o wins')
      message.html('The winner is ' + player)
      over = true
    } else if ($('#0item').html() === 'x' && $('#3item').html() === 'x' && $('#6item').html() === 'x') {
      console.log('x wins')
      message.html('The winner is ' + player)
      over = true
    } else if ($('#1item').html() === 'x' && $('#4item').html() === 'x' && $('#7item').html() === 'x') {
      console.log('x wins')
      message.html('The winner is ' + player)
      over = true
    } else if ($('#2item').html() === 'x' && $('#5item').html() === 'x' && $('#8item').html() === 'x') {
      console.log('x wins')
      message.html('The winner is ' + player)
      over = true
    } else if ($('#0item').html() === 'o' && $('#3item').html() === 'o' && $('#6item').html() === 'o') {
      console.log('o wins')
      message.html('The winner is ' + player)
      over = true
    } else if ($('#1item').html() === 'o' && $('#4item').html() === 'o' && $('#7item').html() === 'o') {
      console.log('o wins')
      message.html('The winner is ' + player)
      over = true
    } else if ($('#2item').html() === 'o' && $('#5item').html() === 'o' && $('#8item').html() === 'o') {
      console.log('o wins')
      message.html('The winner is ' + player)
      over = true
    }
  }
}

// every box has o or x game = draw

$(function restart () {
  $('#newgame').on('click', function (event) {
    runGame()
    $('.cell').html(' ')
  })
})

module.exports = {
  runGame
}
