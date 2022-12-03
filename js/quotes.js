const quotes = [
    {quote: "Cool, cool, cool, cool, cool. No doubt, no doubt, no doubt.",
    author: "-Jake Peralta, 'Brooklyn Nine-Nine'",
},
{    quote: "Love, it sustains you. It's like oatmeal.",
    author:"-Raymond Holt, 'Brooklyn Nine-Nine'",
}, 
{    quote: "Every time someone steps up and says who they are,\nthe world becomes a better, more interesting place.",
    author: "-Raymond Holt, 'Brooklyn Nine-Nine'",
}, 
{    quote: "I wasn't hurt that badly. The doctor said all my bleeding was internal. \nThat's where the blood's supposed to be.",
    author: "-Jake Peralta, 'Brooklyn Nine-Nine'",
}, 
{    quote: "If I die, turn my tweets into a book.",
    author: "-Gina Linetti, 'Brooklyn Nine-Nine'.",
}, 
{    quote: "Two steps forward and one step back is still one step forward.",
    author:"-Rosa Diaz, 'Brooklyn Nine-Nine'"
},
{   quote: "In hindsight, we should probably stop making major decisions through bets and competitions.",
    author: "-Amy Santiago, 'Brooklyn Nine-Nine'"
},
{   quote: "I was born ready. And then I was not ready for a while. \nNow I'm back to being born ready.",
    author: "-Terry Jeffords, 'Brooklyn Nine-Nine'",
},
{   quote: "YOU TOOK THE WRONG FLUFFY BOY!",
    author: "-Raymond Holt, 'Brooklyn Nine-Nine'",
},
{   quote: "Point Is, Haters Gonna Hate. Shake It Off. Taylor Swift, Always Right.",
    author:"-Jake Peralta, 'Brooklyn Nine-Nine'"
}
]

const inspiringQuote = document.querySelector("#quotes span:first-child");
const quoteAuthor = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

inspiringQuote.innerText = `${todaysQuote.quote}\n`;
quoteAuthor.innerText = `${todaysQuote.author}\n`;