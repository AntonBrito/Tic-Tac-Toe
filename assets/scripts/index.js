'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')


module.exports = {

}

$(function () {

  const myBoard = []
  const players = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X']
  const item = [ '0item', '1item', '2item', '3item', '4item', '5item', '6item', '7item', '8item' ]
  const myboard = ['', '', '']

  let player = 1
  // const player2 = o
  $('td').on('click', function () {
    if (player === 1) {
      $(this).html('x')
    } else {
      $(this).html('o')
    }
    let turn = setPlayer(player)
    player = turn
    checkHorizontal()
  })
  // switchPlayer
  function setPlayer(player) {
    if (player === 1) {
      return 2
    } else {
      return 1
    }
  }

  function checkforWin () {
    //  if check
  }
  // function checkDiagun()
  // function checkVertical()
  let over

  function checkHorizontal () {
    if ($('#0item').html() === 'x' && $('#1item').html() === 'x' && $('#2item').html() === 'x') {
      console.log('x wins')

    }

  }

})
