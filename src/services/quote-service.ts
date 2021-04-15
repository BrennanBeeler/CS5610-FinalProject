const QUOTE_URL = "http://localhost:8080/api/quotes";

//TODO: set up on server side
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


//TODO: When would we delete quote?
const DeleteQuote = (quote) =>
    fetch(`${QUOTE_URL}/${quote.id}`, {
        method: "DELETE"
    })
        .then(response => response.json())


//TODO: not sure if we need this at all?
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