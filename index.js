const request = require('request');

const getWeather = (city) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=21206564e090c00974e7630f8708192f`
    request(url, { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        console.log(body);
    });
} 

module.exports = getWeather;
