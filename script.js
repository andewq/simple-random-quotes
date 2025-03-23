const quotes = [
  "first",
  "second",
  "third",
]

const $ = (id) => {
  return document.getElementById(id);
}

const generateRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  $("quote").textContent = randomQuote;
}

$("generate-btn").addEventListener('click', generateRandomQuote);

generateRandomQuote();