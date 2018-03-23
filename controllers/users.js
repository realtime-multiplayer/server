// const firebase = require("firebase")
// const config = {
//   apiKey: "AIzaSyAhrVyRkLROA4DOT6oeZFtGwvzcdz8F7EM",
//   authDomain: "nth-cumulus-197904.firebaseapp.com",
//   databaseURL: "https://nth-cumulus-197904.firebaseio.com",
//   storageBucket: "nth-cumulus-197904.appspot.com",
// };
// firebase.initializeApp(config);
// const db = firebase.database()

module.exports ={
  addUser : (req,res)=>{
    db.ref('users/').push({
      name  : req.body.name,
      room : req.body.room
    })
    .then(data=>{
      res.status(201).json({
        message : 'add users success',
        data : data
      })
    })
  },
  getUser : (req,res)=>{
    var users = firebase.database().ref('users/');
    users.on('value', function(snapshot) {
      res.status(201).json({
        message : 'read data success',
        data : snapshot 
      })
    });
  }
}