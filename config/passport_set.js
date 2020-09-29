var GoogleStrategy=require('passport-google-oauth20').Strategy;
var LocalStrategy=require('passport-local').Strategy;
const usr=require('../api/model/sch');
const passport=require('passport')
passport.use(new GoogleStrategy({
    clientID:"516463623458-hrbosjtratbv0q5d3ti71eq30nciqcce.apps.googleusercontent.com",
    clientSecret:"PBHUfMT_3SaTWGqwK2F80e8S",
    callbackURL:"http://localhost:3000/users/google/auth/callback"
},()=>{}
));
passport.use(new LocalStrategy({
    usernameField:'email',
    passwordField:'pwd'
},
function(username,password,done){
    usr.findOne({username:username},function(err,user){
        if (err){return done(err)}
    })
}))