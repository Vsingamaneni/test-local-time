const express = require('express');
var moment = require('moment');

const app = express();

//set view engine
app.set('view engine', 'ejs');

var shortDateFormat = "ddd @ h:mmA"; // this is just an example of storing a date format once so you can change it in one place and have it propagate
app.locals.moment = moment; // this makes moment available as a variable in every EJS page
app.locals.shortDateFormat = shortDateFormat;

// Path to Js File
var timeScript = require('./localTime.js');

app.get('/time',(req, res) => {
        res.render('time', {
            title : 'Local Time',
            utils: timeScript,
            moment: moment
        });
});


// Server Listening
app.listen(8081, () => {
    console.log('Server is running at port 8081');
});