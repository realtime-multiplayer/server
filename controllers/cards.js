const firebase = require("firebase")
const config = {
  apiKey: "AIzaSyAhrVyRkLROA4DOT6oeZFtGwvzcdz8F7EM",
  authDomain: "nth-cumulus-197904.firebaseapp.com",
  databaseURL: "https://nth-cumulus-197904.firebaseio.com",
  storageBucket: "nth-cumulus-197904.appspot.com",
};
firebase.initializeApp(config);
const db = firebase.database()


module.exports = {
  addCard: (req, res) => {
    db.ref('cards/').push({
      name: req.body.name,
      value: req.body.value
      // image: req.file.cloudStoragePublicUrl
    })
      .then(data => {
        res.status(201).json({
          message: 'add card success',
          data: data
        })
      })
      .catch(err=>{
        res.status(400).json({
          message : 'error add card',
          data : {}
        })
      })

  },
  readCards: (req, res) => {
    var starCountRef = firebase.database().ref('cards/');
    starCountRef.on('value', function (snapshot) {
      let data = snapshot.val()
      return res.status(201).json({
        message: 'read data success',
        data: data
      })
    });
  },
  addPlayer: (req, res) => {
     db.ref('users/').push({
      name: req.body.name,
      room: req.body.room,
      userid: req.body.userid,
      cards: []
    })
    .then(() => {
      return res.status(201).json({
        message: 'add users success',
      })
    })
  },
  getPlayer: (req, res) => {
    var users = firebase.database().ref('users/');
    users.on('value', function (snapshot) {    
      let data = snapshot.val()
      return res.status(201).json({
        message: 'read data success',
        data: data
      })
    });
  }
}