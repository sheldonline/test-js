 const quotes = [{
      "quote": "This is just a Quote1"
    },
    {
      "quote": "This is just a Quote2"
    },
    {
      "quote": "This is just a Quote3"
    },
  ]

  function randomQuote() {
    let random = quotes[Math.floor(Math.random() * quotes.length)];
    quotation.innerText = `"${random.quote}"`;
  }

  window.onload = function() {
    randomQuote()
  };
