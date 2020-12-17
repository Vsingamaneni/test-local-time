const express = require('express');
var moment = require('moment');

const app = express();

//set view engine
app.set('view engine', 'ejs');

var shortDateFormat = "ddd @ h:mmA"; // this is just an example of storing a date format once so you can change it in one place and have it propagate
app.locals.moment = moment; // this makes moment available as a variable in every EJS page
app.locals.shortDateFormat = shortDateFormat;


app.get('/time',(req, res) => {
    var timeZone = "America/New_York";
    let date = new Date();
        console.log('Given IST datetime: ' + date);

    let usaTime =
        date.toLocaleString("en-US", {
            timeZone: "America/New_York"
        });
    console.log('USA datetime: ' + usaTime);

    res.render('time', {
            title : 'Local Time',
            timeZone: timeZone,
            usaTime: usaTime
        });
});


// Server Listening
app.listen(8081, () => {
    console.log('Server is running at port 8081');
});