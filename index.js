'use strict'

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// load manifests
// scripts
require('./assets/scripts/index.js')

// styles
require('./assets/styles/index.scss')

const setAPIOrigin = require('../..lib/set-api-origin')
const config = require()
  let counter = 0
  let move = []
//
//
// const item = document.getElementsByClassName("item");
// const buttons = document.getElementsByClassName("button");
//
 const state = [0,0,0,0,0,0,0,0,0]
 const game = true
//
// const HUMAN = false
// const COMPUTER = true
//
// const HUMVAL = -1
// const COMVAL = 1
//
// const winMatrix = [
//                   [0, 1, 2],
//                   [3, 4, 5],
//                   [6, 7, 8],
//                   [1, 4, 7],
//                   [2, 5, 8],
//                   [0, 4, 8],
//                   [2, 4, 6]
//                 ];
//
// function reset()
// {
//   for (let x = 0;x < 9;x++)
//   {
//     item[x].style.background = "#fff";
//     state[x] = 0;
//   }
//
//   for (let x = 0;x < 2;x++)
//   {
//     buttons[x].style.width = "15.5vh";
//
//     buttons[x].style.margin = "0.5vh";
//     buttons[x].style.opacity = "1";
//   }
//
//   game = true;
// }
// function claim(clicked)
// {
//     if(!game)
//         return;
//
//     for(var x = 0;x < 9;x++)
//     {
//       if(item[x] == clicked && state[x] == 0)
//       {
//         set(x, HUMAN);
//         callAI();
//       }
//     }
// }
//
//   function set(index, player)
//   {
//     if(!game)
//       return;
//
//     if(state[index] == 0)
//     {
//       buttons[0].style.width = "0";
//       buttons[0].style.margin = "0";
//       buttons[0].style.opacity = "0";
//
//       buttons[1].style.width = "32vh";
//
//       if(player == HUMAN)
//       {
//         item[index].style.background = "#22f";
//         state[index] = HUMVAL;
//       }
//       else
//       {
//         item[index].style.background = "#f22";
//         state[index] = COMPUTER;
//       }
//       if(checkWin(state. player))
//           game = false;
//     }
// }
// function checkWin(board, player)
// {
//     let value = player == HUMAN ? HUMVAL : COMVAL;
//
//     for(let x = 0;x < 8;x++)
//     {
//       let win = true;
//
//       for(let y = 0;y < 3;y++)
//       {
//         if(board[winMatrix[x][y]] != value)
//         {
//             win = false
//             break
//         }
//       }
//       if(win)
//           return true;
//     }
//     return false;
// }
//
// function checkFull(board)
// {
//     for(let x = 0;x < 9;x++)
//     {
//         if(board[x] == 0)
//             return false;
//     }
//
//     return true;
// }
//
// function callAI()
// {
//
//   aiturn(state, 0, COMPUTER);
//
//
//
//   function aiturn(player)
//   {
//     if(checkWin(board, !player))
//         return 10 - depth;
//
//     if(cheFull(board))
//         return 0;
//
//     let value = player == HUMAN ? HUMVAL : COMVAL;
//
//     let max = -Infinity
//     let index = 0;
//
//     for(let x = 0;x < 9;x++)
//     {
//       if(board[x] == 0)
//       {
//           let newboard = board.slick();
//           newboard[x] = value;
//
//           let moveval = aiturn(newboard, depth + 1 ,!player);
//
//             if(moveval > max)
//             {
//               max = moveval;
//               index = x;
//             }
//         }
//     }
  // }
  //   if(depth == 0){
  //   set(index, COMPUTER)
  //
  //   return max;
  //   }
  // }






//
// const players = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X']
// const item = ['0item', '1item', '2item', '3item', '4item', '5item', '6item', '7item', '8item',]
// const player1 = function()
// // const turn = 'x'
//
//  const container = [
//    {index:0, value: 0},
//    {index:1, value: 0},
//    {index:2, value: 0},
//    {index:3, value: 0},
//    {index:4, value: 0},
//    {index:5, value: 0},
//    {index:6, value: 0},
//    {index:7, value: 0},
//    {index:8, value: 0}
// ]
// // function draw () {
// //   function drawBoard () {}
// // }
//
//
//for(let i = 0;i<8;i++){
 //let players[i]
//let index = players[i]
//let text = item[i]
     $(this).text(index)
    $('.item').on('click', function () {
      console.log('x')
       $(".item" ).html();
    })

        // $(item).cl(index)




//check whos turn
//its x turn
// turn x







//
//function itemClick(X) {
   //if (0 === "X") {
//
//   }
//}



//getResetClick: function(event) {
//GameModel.init();
//View.redraw();
//},
//let debug = function(theText) {
//$("#debug").text($("#debug").text() + " / " + theText);
//};

//check for winners
//check horrizontal
//check vertical
//checkcheck obliqua
//restart the game botton

module.exports = {

}
