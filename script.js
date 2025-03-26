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
  // если нет return то функция по умолчанию возвращает undefined
}

$("generate-btn").addEventListener('click', generateRandomQuote);

generateRandomQuote();

// параллелепипед - свойство 
// куб - метод