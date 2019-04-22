//const place = require('./place/place');
const weather = require('./weather/weather');
const colors = require('colors');
const argv = require('yargs').options({
    adress: {
        alias: 'd',
        description: 'adress of the city to get the weather',
        demand: true
    }
}).argv;

//place.getPlaceLtLg(argv.adress)
//    .then(console.log)

weather.getWeather(argv.adress)
    .then(console.log)
    .catch(console.log);