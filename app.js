let updateStatus = require('./updateStatus.js');

updateTwitter = () => {
    updateStatus();
    setInterval(updateStatus, 1000 * 60 * 60 * 24);
};

updateTwitter();


