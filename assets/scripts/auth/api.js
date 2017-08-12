const app = require('..app.js')

//api call for registration

const addUser = function (data) {
  // console.log(data)
  return $.ajax({
    url: app.host + '/sign-up/'
    // headers: { 'header': 'Content-Type: application/json' },
    method: 'Post',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password,
        'password_confirmation': data.credentials.password
      }
    }
    //crossDomain: true
  })
}

//api call for logging in suser
const userLogin = function (data) {
  /* let userInfo = {
  hello : "Hello World"
} */
// console.log(userInfo)
// console.log(data)
return $.ajax({
  url: app.host + '/sign-in/',
  method: 'Post',
  data: {
    'credentials': {
      'email': data.credentials.email,
      'password': data.credentials.password
    }
  }

}
})
}

//api call for resetting password

const passwordReset = function (data) {
  console.log(app.user.token)
  //console.log(data)
  return $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'PATCH',
    data /* : {
      "passwords": {
      "old": data.passwords.old,
      "new": data.passwords.new
    }
  } */
  })
}

// api calls for logging in

const userLogout = function () {
  // console.log('something')
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'Delete'
  })
}

// api call for starting a new gametable
const getGame = function () {
  // console.log ("Hello")
  console.log(app.user.token)
  return $.ajax({
    url: app.host + '/games',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'POST',
    success: function (response) {
      console.log(response)
    }


  })
}

//event handler for adding moves to game object

const updateMoves = function (index, value, over) {
  console.log(app.user.token)
  return $.ajax({
    url: app.host + '/game/' + app.game.id,
    method: 'PATCH',
    // dataType
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': value
        },
        'over':over
      }
    }
  })
}
// event handler-view game by user

const gameView = function () {
  console.log(app.user.token)
  return $.ajax({
    url: app.host + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}




module.exports = {
  addUser,
  userLogin,
  passwordReset,
  userLogout,
  getGame,
  updateMoves,
  gameView
}
