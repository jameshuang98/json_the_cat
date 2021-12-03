const request = require('request');
const input = process.argv.slice(2)

request('https://api.thecatapi.com/v1/breeds/search?q=' + input[0], (error, response, body) => {
    if (error && error.code === 'ENOTFOUND') {
        console.log('URL not found');
        process.exit(0);
    };
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML  
    try {
        const data = JSON.parse(body);
        console.log(data[0].description);
    } catch(err) {
        console.log('Breed not found');
    };
    // console.log(typeof data);
});

