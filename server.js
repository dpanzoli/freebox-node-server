const assert = require('assert');
const express = require('express');
const app = express();

//const Datastore = require('nedb');

//var db = new Datastore({filename:'/home/pi/traces.db', autoload:true});

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

app.get('/', function(req, res) {

	res.send("hello world");

});


app.listen(8080, function() {

	console.log('app started')

})