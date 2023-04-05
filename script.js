const quotes = [

"The best way to predict the future is to invent it. - Alan Kay",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "If you really want to do something, you'll find a way. If you don't, you'll find an excuse. - Jim Rohn",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "If you can dream it, you can do it. - Walt Disney"
  ];

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