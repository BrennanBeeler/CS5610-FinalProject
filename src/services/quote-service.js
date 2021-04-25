const QUOTE_URL = "http://cs5610-finalproj-server-java.herokuapp.com/api/quotes";

const GetQuoteByID = (apiId) =>
    fetch(`${QUOTE_URL}/${apiId}`)
        .then(response => response.json())


const CreateQuote = (quote) =>
    fetch(`${QUOTE_URL}`, {
        method: "POST",
        body: JSON.stringify(quote),
        headers : {
            "content-type" : "application/json"
        }
    })
        .then(response => response.json())


const DeleteQuote = (quote) =>
    fetch(`${QUOTE_URL}/${quote.id}`, {
        method: "DELETE"
    })
        .then(response => response.json())


const UpdateQuote = (quote) =>
    fetch(`${QUOTE_URL}/${quote.id}`, {
        method: "POST",
        body: JSON.stringify(quote),
        headers : {
            "content-type" : "application/json"
        }
    })
        .then(response => response.json())

const QuotesService = {
    GetQuoteByID,
    CreateQuote,
    DeleteQuote,
    UpdateQuote
}

export default QuotesService;