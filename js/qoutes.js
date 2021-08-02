const quotes = [
    {quote: "Every moment is a fresh beginning",
    author: "T.S Eliot",},
    {quote: "EveryThing you can imagine is real",
    author: "Pablo Piccaso",},
    {quote: "What we think, we become",
    author: "Buddha",},
    {quote: "Yesterday you said tomorrow. Just do it",
    author: "Nike",},
    {quote: "If you would be loved, love, and be loveable",
    author: "Benjamin Franklin",},
    {quote: "And still, I rise",
    author: "Maya Angelou",},
    {quote: "Luck is a matter of preparation meeting opportunity",
    author: "Jim Rohn",}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.textContent = `"${todaysQuote.quote}"`;
author.textContent = todaysQuote.author;



