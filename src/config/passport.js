const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

//MODELS USER
const User = require('../models/User');

passport.use(new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password'
}, async (email , password , done) => {

    const user = await User.findOne( { email: email });
    if(!user){
        return done(null , false, { message : 'Usuario Incorrecto'});
    }else{
        const match = await user.matchPass(password);
        if(match){
            return done(null , user);
        }else{
            return done(null , false, { message : 'Contraseña incorrecta'});
        }
    }
}));

//VERIFICANDO LA SESSION DEL USER
passport.serializeUser((user , done) => {
     done(null , user.id);
});

passport.deserializeUser((id , done) => {
    User.findById(id , (err , user) => {
        done(err, user);
    });
});