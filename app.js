const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

module.exports = app;

//set views file
app.set('views',path.join(__dirname,'views'));
			
//set view engine
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));
app.use('/public', express.static('public'));

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