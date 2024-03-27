// //Q1. Iterating with Async/Await

async function iterateWithAsyncAwait(array) {
    for (const value of array) {
        // Log the value after a delay of 1 second
        await delay(1000);
        console.log(value);
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Example usage
const values = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(values);


// Q2. Awaiting a Call:

async function awaitCall() {
    try {
        // Simulate fetching data from an API (Replace this with your actual API call)
        const responseData = await fetchDataFromAPI();
        
        // Log the data
        console.log(responseData);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Simulated function to fetch data from an API (Replace this with your actual API call)
function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
        // Simulate API response delay (Replace setTimeout with actual API call)
        setTimeout(() => {
            // Simulated response data
            const data = { message: "Simulated API response data" };
            resolve(data);
        }, 2000); // Simulated delay of 2 seconds
    });
}

// Example usage
awaitCall();

//Q3. Awaiting Concurrent Requests

async function concurrentRequests() {
    try {
        // Make two API calls concurrently
        const [response1, response2] = await Promise.all([
            fetchDataFromAPI('endpoint1'),
            fetchDataFromAPI('endpoint2')
        ]);

        // Log the combined results
        console.log("Combined Results:");
        console.log("Response from endpoint 1:", response1);
        console.log("Response from endpoint 2:", response2);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Simulated function to fetch data from an API (Replace this with your actual API call)
function fetchDataFromAPI(endpoint) {
    return new Promise((resolve, reject) => {
        // Simulate API response delay (Replace setTimeout with actual API call)
        setTimeout(() => {
            // Simulated response data
            const data = { message: `Simulated API response from ${endpoint}` };
            resolve(data);
        }, 2000); // Simulated delay of 2 seconds
    });
}

// Example usage
concurrentRequests();