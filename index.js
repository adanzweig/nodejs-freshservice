// Load environment variables from a .env file
require('dotenv').config();

// Import the axios library for making HTTP requests
const axios = require('axios');

// Define an asynchronous function to retrieve tickets
async function getTickets(){
    try {
        // Perform a GET request to the Freshservice API to fetch tickets
        const response = await axios.get(`https://marlonmd.freshservice.com/api/v2/tickets`, {
            headers: {
                // Set the Authorization header with a base64-encoded API key
                'Authorization': `Basic ${btoa(process.env.API_KEY + ':X')}`
            }
        });
        // Return the data from the response
        return response.data;
    } catch (error) {
        // Log any errors that occur during the request
        console.error('error', error);
    }
}

// Immediately-invoked function expression to run the script
(async () => {
    // Retrieve tickets using the getTickets function
    const tickets = await getTickets();
    // Log the tickets to the console
    console.log(tickets);
})();
