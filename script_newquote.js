const quotes = [

"The best way to predict the future is to invent it. - Alan Kay",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "If you really want to do something, you'll find a way. If you don't, you'll find an excuse. - Jim Rohn",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "If you can dream it, you can do it. - Walt Disney"
  ];
/*In this JavaScript, we have an array of quotes, which we will use to generate random quotes. We also have two variables called quoteElement and newQuoteButton that reference the div and button elements in the HTML.

We then have two functions: getRandomQuote, which generates a random quote from the quotes array, and displayQuote, which displays the random quote in the div element.

Finally, we add an event listener to the button element that calls the displayQuote function when the user clicks the button. We also call the displayQuote function once when the page loads to display an initial quote.*/
  
const quoteElement = document.getElementById("quote");
const newQuoteButton = document.getElementById("new-quote");

function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

function displayQuote() {
  const randomQuote = getRandomQuote();
  quoteElement.textContent = randomQuote;
}

newQuoteButton.addEventListener("click", displayQuote);

displayQuote();