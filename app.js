const express = require('express');
var moment = require('moment');
var mom = require('moment-timezone');

const app = express();

//set view engine
app.set('view engine', 'ejs');

var shortDateFormat = "ddd @ h:mmA"; // this is just an example of storing a date format once so you can change it in one place and have it propagate
app.locals.moment = moment; // this makes moment available as a variable in every EJS page
app.locals.shortDateFormat = shortDateFormat;


app.get('/time',(req, res) => {
    let timeDate = 'Dec 17, 2020 18:00:00 Z';
    let date = new Date(timeDate);
    console.log('Given IST datetime: ' + date);

    let usaTime =
        date.toLocaleString("en-US", {
            timeZone: "America/Chicago"
        });
    console.log('USA Chicago datetime: ' + usaTime);

    let usaNewyorkTime =
        date.toLocaleString("en-US", {
            timeZone: "America/New_York"
        });
    console.log('USA New York dateTime: ' + usaNewyorkTime);

    let indiaKolkataTime =
        date.toLocaleString("en-US", {
            timeZone: "Asia/Kolkata"
        });
    console.log('USA New York dateTime: ' + indiaKolkataTime);


    var timeValue = toTimeZone(timeDate, "America/Chicago");


    res.render('time', {
            title : 'Local Time',
            usaTime: usaTime,
            timeValue:timeValue,
            usaNewyorkTime:usaNewyorkTime,
            timeDate:timeDate,
            indiaKolkataTime:indiaKolkataTime
        });
});

function toTimeZone(timeDate, zone) {
    var format = 'YYYY/MM/DD HH:mm:ss ZZ';
    return mom(timeDate).tz(zone).format(format);
}

// Server Listening
app.listen(8081, () => {
    console.log('Server is running at port 8081');
});