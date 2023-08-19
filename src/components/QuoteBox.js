import '../styles/main.scss'
import QuoteGenerator from '../quote-generation/QuoteGenerator'

const QuoteBox = () => {

    const quoteGenerator = new QuoteGenerator()

    return (
    <div id="quote-box">
      <div id="quote">
        <div id="text">An apple a day keeps the doctor away</div>
        <div id="author">Doctor Phil</div>
      </div>
      <div id="button-container">
        <a href="http://www.twitter.com/intent/tweet" id="tweet-quote">Tweet</a>
        <button id="new-quote" onClick={() => console.log('clicked')}>New Quote</button>
      </div>
      
    </div>
    )
}

export default QuoteBox