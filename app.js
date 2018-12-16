const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
var session =require('express-session');
var itemRoute = require('./routes/items.route');
var userRoute = require('./routes/user.route');
var register  = require('./routes/register.route');
var login = require('./routes/login.route')
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse the raw data
app.use(bodyParser.raw());
// parse text
app.use(bodyParser.text());
app.use(session({secret: 'ssshhhhh'}))

login.route(app);
// app.get('/',function (req,res) {
//     if(req.session.email){
//         res.redirect('/login');
//     }
//     else {
//         res.redirect('/register');
//     }
// })

register.route(app);

itemRoute.route(app);
userRoute.route(app);
//Set Port
app.listen(3000);