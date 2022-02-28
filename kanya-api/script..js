const loadQuote = () => {
    fetch('https://api.kanye.rest')
        .then(response => response.json())
        .then(data => displayQuote(data))
};

const displayQuote = (data) => {
    const quoteElement = document.getElementById('quote')
    quoteElement.innerText = data.quote;
}