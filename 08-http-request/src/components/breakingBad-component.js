// BRING DATA

const fetchQuote = async () => {
  const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
  const data = await res.json();
  return data[0]
}

/**
 *
 * @param {HTMLDivElemet} element - The `element` parameter in the `breakingBadComponent` function is typically a
 * reference to an HTML element where the Breaking Bad component will be rendered or attached to.
 */
export const breakingBadComponent = async(element) => {

  document.querySelector('.app-title').innerHTML = 'Breakingbad api';

  element.innerHTML = 'Loading...';

  const quoteLabel = document.createElement('blockquote');
  const authorLabel = document.createElement('h3');
  const nextQuoteButton = document.createElement('button');
  nextQuoteButton.innerText = 'Next quote =>'
  
  // RENDER DATA

  const renderQuote = (data) => {
    quoteLabel.innerHTML = data.quote;
    authorLabel.innerHTML = data.author;
    element.replaceChildren(quoteLabel, authorLabel,nextQuoteButton);
  }

  // ADD LISTENER

  /* Here We're adding a listener event to generate a new quote when the button is clicked.*/

  nextQuoteButton.addEventListener('click', async() => {
    
    element.innerHTML = 'Loading...'; // This line is replacing all elements that were created before.

    const quote = await fetchQuote(); // Then we're generating a new quote to render the quote.

    renderQuote (quote); // Finally, we're render the new quote each time that the button is pressed.
  })

  // fetchQuote()
  //       .then( data => renderQuote (data)); // Here we're using the fetchQuote() function which bring the data, but it's a promise we're using the method then() to pass the data.

  fetchQuote ()
        .then(renderQuote); // This is the short way to make it, remember when we have an argument or a series of arguments with the only objective to pass to another internal function as an arguments, only is necessary to call the function as a reference in this case renderQuote(function). 
        
  

  

}