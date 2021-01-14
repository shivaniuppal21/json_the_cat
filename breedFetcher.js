const request = require('request');
var myArgs = process.argv.slice(2);

let path = myArgs[1]


const fetchBreedDescription = function(breedName, callback) {
    let url = "https://api.thecatapi.com/v1/breeds/search?q=" +breedName
    request(url, (error, response, body) => {
        //console.log('error:', error); // Print the error if one occurred
        if (!error){
            console.log(typeof body)
            const data = JSON.parse(body);
            if (data.length === 0){
                console.log("breed not found")
                const msg = `Status Code ${response.statusCode} . Response: ${body}`;
                return callback(Error(msg),null)
            }
            else{
                return callback(null,data[0].description)
            }
     
        }
       else{
           console.log("request failed "+ error)
           return callback(error,null)
       }
        
    })
};
module.exports = { fetchBreedDescription };



