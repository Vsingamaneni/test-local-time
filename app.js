const express = require('express');

const app = express();

//set view engine
app.set('view engine', 'ejs');

// Path to Js File
var timeScript = require('./localTime.js');

app.get('/time',(req, res) => {
        res.render('time', {
            title : 'Local Time',
            utils: timeScript
        });
});


// Server Listening
app.listen(8081, () => {
    console.log('Server is running at port 8081');
});