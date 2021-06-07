const router= require("express").Router()
const { User } = require("../../models")
var LocalStrategy = require('passport-local').Strategy;
const passport= require("passport")


passport.use(new LocalStrategy(
  function(username, password, done) {

console.log('log in successful')

User.getUserByUsername(username, function(err, user){
        if(err) throw err;
        if(!user){
  return done(null, false, {message: 'Unknown User'});
}
User.comparePassword(password, user.password, function(err, isMatch){
  if(err) throw err;
  if(isMatch){

     	  return done(null, user);
     	} else {
        
     	  return done(null, false, {message: 'Invalid password'});
     	}
     });
   });
  }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.getUserById(id, function(err, user) {
      done(err, user);
    });
  });

// Register User
router.post('/register', function(req, res){
    var password = req.body.password;
    // var password2 = req.body.password2;
  
    // if (password == password2){
      var newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
      });
  
      User.createUser(newUser, function(err, user){
        if(err) throw err;
        console.log(user);
        res.send(user).end()
      });
    // } else{
    //   res.status(500).send("{errors: \"Passwords don't match\"}").end()
    // }
  });
  
  // Endpoint to login
router.post('/login',passport.authenticate('local'),function(req, res) {
  console.log('login successful');
  res.send(req.user);
}
);

// Endpoint to get current user
router.get('/user', function(req, res){
res.send(req.user);
})


// Endpoint to logout
router.get('/logout', function(req, res){
req.logout();
res.send(null)
});

module.exports = router
