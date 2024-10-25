// console.log('This is a popup!')

// ? API FOR MOTIVATIONAL QUOTE 
//https://zenquotes.io/api/random

document.addEventListener('DOMContentLoaded', () => {
    //> Load messages at initial contentload
    loadQuote();
  });
  
  // ? LOAD MESSAGE FUNCTION
  async function loadQuote() {
    try {
      // initial data fetch from provided server:
      const response = await fetch('https://zenquotes.io/api/random');
  
      // convert response into a JS-usable data form:
      const quote = await response.json();
      displayQuote(quote);
    }
    catch (error) {
      console.error('Error retrieving data:', error)
    }
  }


  // > Display quote function
  function displayQuote (quote) {
    const quoteEl = document.getElementById('quote');
    quoteEl.textContent = quote[0].q;
    console.log(quote[0].q)
  }