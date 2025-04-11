const needle = require('needle');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter breed name: ', (breedName) => {

  needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      console.log('error:', error); // Print the error if one occurred
      return;
    }
    if (response && response.statusCode !== 200) {
      console.log(response.statusCode);
    }
    if (!body || !Array.isArray(body) || body.length === 0) {
      console.log("Breed not found");
    } else {
      const catData = body[0];
      console.log("Description: ", catData.description);
    }
    rl.close();
      
  });
});
