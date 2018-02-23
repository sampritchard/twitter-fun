let Twitter = require('twitter');
let config = require('./config/config.js');
let quotes = require('./quotes.js');

let T = new Twitter(config);

randomQuote = () => {
    let randomQuote = quotes[Math.floor(Math.random() * (quotes.length))];
    console.log(randomQuote);
    return randomQuote;
};

const updateStatus = () => {
    T.post('statuses/update', {status: randomQuote()}, function(err, tweet, response) {
    if(err) {
        console.log(err);
        // runs the function again if an error appears
        updateStatus();
        }
    else{
        console.log('Success! You tweeted: ', `${tweet}`)
        };
  },
)};

module.exports = updateStatus;