const needle = require('needle');

const fetchBreedDescription = (breedName, callback) => {
  
  needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      // Print the error if one occurred
      return callback(error, null);
    }
    if (response && response.statusCode !== 200) {
      console.log(response.statusCode);
    }
    if (!body || !Array.isArray(body) || body.length === 0) {
      return callback("Breed not found", null);
    } else {
      const catData = body[0];
      callback(null, catData.description);
    }
      
  });
};

module.exports = { fetchBreedDescription };

