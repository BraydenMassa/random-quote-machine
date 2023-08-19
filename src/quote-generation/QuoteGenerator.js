import Quote from "./Quote"
import {quotes, authors} from './QuotesList.js'
class QuoteGenerator {
    
    constructor() {
        this.numQuotes = quotes.length
    }

    generateNumber() {
        return Math.floor(Math.random() * this.numQuotes + 1) - 1
    }

    generateQuote() {
        return new Quote()
    }
}

export default QuoteGenerator