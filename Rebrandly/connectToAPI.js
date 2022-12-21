// Information to reach API

const url = 'https://api.rebrandly.com/v1/links';
const apiKey = 'de68924390e943d8849d2e2538de769e';

const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// Extract and add the response in HTML element with id='aresponseField'

const renderResponse = (res) => {
    // Displays either message depending on results
    if(res.errors){
      responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
    } else {  
      responseField.innerHTML = `<p>Your shortened url is: </p><p> ${res.shortUrl} </p>`;
    }
  }

/**
 * An asynchronous function that fetch the data from Rebrandly API
 */
const shortenUrl = async () => {

    const urlToShorten = inputField.value;  // take the user input

    // Send POST request to the API
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': apiKey
            },
            body:JSON.stringify({destination: urlToShorten})
        })

        // Verify the response
        if(response.ok) {
            const jsonResponse = await response.json();
            renderResponse(jsonResponse);
        }
    
    } catch (error) {
        console.log(error);
    }
};

// Clear page and call Asynchronous functions
const displayShortUrl = (event) => {
    event.preventDefault();
    while(responseField.firstChild){
      responseField.removeChild(responseField.firstChild);
    }
    shortenUrl();
}
  shortenButton.addEventListener('click', displayShortUrl);

    
