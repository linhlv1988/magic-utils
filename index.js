// index.js
const moment = require('moment');

// Function to convert a string to a date
function convertToDate(inputString) {
    // Try parsing the string into a date
    const date = moment(inputString);

    // Check if parsing was successful
    if (date.isValid()) {
        // If successful, return the Date object
        return date.toDate();
    } else {
        // If not successful, return null
        return null;
    }
}

// Export the conversion function for external usage
module.exports = convertToDate;