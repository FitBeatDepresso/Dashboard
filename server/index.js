const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const http = require('http');
const https = require('https');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongo = require('mongoose');
const morgan = require('morgan');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;

mongo.connect('mongodb+srv://ip333:1234567890@hackmit2020.bfaa8.mongodb.net/FitBeatDepresso?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

module.exports = {
    mongoose: mongo,
};
//
const {User} = require('./models/Users.js');

const passport = require("passport");

const FitbitStrategy = require('passport-fitbit-oauth2').FitbitOAuth2Strategy

passport.serializeUser((user, cb) => {
    cb(null, user);
});

passport.deserializeUser((user, cb) => {
    cb(null, user);
});

passport.use(new FitbitStrategy({
        clientID: '22BRYF',
        clientSecret: '0142a3749cab072537bb965dcec6c174',
        callbackURL: "http://localhost:5000/auth/fitbit/callback"
    },
    async function(accessToken, refreshToken, profile, done) {
        console.log(profile)
        await User.create({fullName: profile.fullName, accessToken, refreshToken});
        done(null, profile)
    }
));

passport.use(
    new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
        },
        async (email, password, done) => {
            let user = null;
            user = await User.findOne({email});
            if(!user){
                done({type: 'email', message: 'No such user found'}, false);
                return;
            }
            console.log("LOGGING IN")
            if(bcrypt.compareSync(password, user.password)){
                console.log("LOGGED IN")
                done(null, {id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName})

            } else{
                done({type: 'password', message: 'Password or Email is incorrect'}, false)
            }
        }));

passport.use('local.signup',
    new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true,
        },
        async (req, email, password, done) => {

            let user = null;
            user = await User.findOne({email});
            if(user){
                done({type: 'email', message:'Email already exists'}, false);
                return;
            }
            const {firstName, lastName} = req.body;

            const salt = await bcrypt.genSalt(10);
            const encryptedPassword = await bcrypt.hash(password, salt);

            user = new User({
                email,
                password: encryptedPassword,
                firstName,
                lastName,
            })

            await user.save();

            done(null, {id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName});

        }));


const app = express();

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

// app.use(cors);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('combined'))
app.use(passport.initialize());

//routes go here with app.{method}

app.get('/testing', (req, res) => {
    res.send("HELLO");
})

app.get('/auth/fitbit', passport.authenticate('fitbit', {scope: ['activity', 'heartrate', 'sleep', 'profile', 'settings']}));

app.get('/auth/fitbit/callback', passport.authenticate('fitbit', {
    successRedirect: '/',
    failureRedirect: '/',
}))

app.post('/auth/local/login',
    passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('/');
});

app.post('/auth/local/signup',
    passport.authenticate('local.signup', { failureRedirect: '/signup' }),
    function(req, res) {
        res.redirect('/');
    });

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, '../client/build')));
//     app.get('/', function(req, res) {
//         res.sendFile(path.join(__dirname, 'build', 'index.html'));
//     });
// }
//
// if (process.env.NODE_ENV === "production") {
//     const privateKey = fs.readFileSync('/etc/letsencrypt/live/learnpassportjs.com/privkey.pem', 'utf8');
//     const certificate = fs.readFileSync('/etc/letsencrypt/live/learnpassportjs.com/cert.pem', 'utf8');
//     const ca = fs.readFileSync('/etc/letsencrypt/live/learnpassportjs.com/chain.pem', 'utf8');
//     const credentials = {
//         key: privateKey,
//         cert: certificate,
//         ca: ca
//     };
//
//     https.createServer(credentials, app).listen(443, () => {
//         console.log('HTTPS Server running on port 443');
//     });
//     http.createServer(function (req, res) {
//         res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
//         res.end();
//     }).listen(80);
// } else if (process.env.NODE_ENV === "development") {
//     console.log("PROCESSING...");
// }

app.listen(5000, () => {
    console.log("PORT 5000")
});


