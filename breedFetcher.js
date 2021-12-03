const request = require('request');


const fetchBreedDescription = function(input, callback) {
    let addressBeginning = 'https://api.thecatapi.com/v1/breeds/search?q='
    request(addressBeginning + input, (error, response, body) => {
            const data = JSON.parse(body);
            //console.log(data[0].description)
            callback(error, data[0].description)
            // console.log(typeof data);
    });
};



module.exports = { fetchBreedDescription };