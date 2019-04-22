const axios = require('axios');

const getWeather = async(location) => {
    const res = await axios.get(`https://api.apixu.com/v1/current.json?key=1b36ab30e35d49abbe8192045192204&q=${location}`);

    if (res.data.length === 0) {
        throw new Error(`no results were found for ${location}`);
    }
    const tempc = res.data.current.temp_c;
    const adress = res.data.location.name;
    const region = res.data.location.region;
    const country = res.data.location.country;
    const lat = res.data.location.lat;
    const lng = res.data.location.lon;
    const localTime = res.data.location.localtime;
    return {
        tempc,
        adress,
        region,
        country,
        lat,
        lng,
        localTime
    }
    //return res.data.current.temp_c, res.data.location.name, res.data.location.region, res.data.location.country, res.data.location.lat, res.data.location.lon, res.data.location.localtime


}

module.exports = {
    getWeather
}