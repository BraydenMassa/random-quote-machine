import QuoteBox from "./components/QuoteBox"
import { Provider } from "react-redux"
import Quote from "./quote-generation/Quote"
import QuoteGenerator from "./quote-generation/QuoteGenerator"

const App = () => {

  const GENERATE = 'GENERATE'

  const quoteGenerator = new QuoteGenerator()
  
  const generateQuote = (quote) => {
    return {
      quote: quote.quote,
      author: quote.author
    }
  }

  const quoteReducer = () => {

  }

  return (
    <Provider>
      <div className="app">
        <QuoteBox />
      </div>
    </Provider>
  )
}

export default App