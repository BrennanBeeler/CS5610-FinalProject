const QUOTES_URL = 'http://quotes.rest/';
const API_KEY = "55F_r0Emfg9tbCTqWmzjCgeF";

const getQuoteOfDay = () =>
    fetch(`${QUOTES_URL}qod.json?api_key=${API_KEY}`)
        .then(response => response.json())

const searchByAuthor = (author) =>
    fetch(`${QUOTES_URL}quote/search.json?author=${author}&limit=3&api_key=${API_KEY}`)
        .then((response) => {
            if(!response.ok) {
                return [];
            }
            else {
                return response.json().then(results => results.contents.quotes)
            }
        })

//TODO: implement
const searchByQuoteId = (quoteId) =>
    fetch(`${QUOTES_URL}quote.json?id=${quoteId}&limit=1&api_key=${API_KEY}`)
        .then((response) => {
            if(!response.ok) {
                return {};
            }
            else {
                return response.json().then(results => results.contents)
            }
        })

const searchByCategory = (category) =>
    fetch(`${QUOTES_URL}quote/search.json?category=${category}&limit=3&api_key=${API_KEY}`)
        .then((response) => {
            if(!response.ok) {
                return [];
            }
            else {
                return response.json().then(results => results.contents.quotes)
            }
        })

const searchByKeyword = (keyword) =>
    fetch(`${QUOTES_URL}quote/search.json?query=${keyword}&limit=3&api_key=${API_KEY}`)
        .then((response) => {
            if(!response.ok) {
                return [];
            }
            else {
                return response.json().then(results => results.contents.quotes)
            }
        })

const api = {
    getQuoteOfDay : getQuoteOfDay,
    searchByAuthor : searchByAuthor,
    searchByQuoteId : searchByQuoteId,
    searchByCategory : searchByCategory,
    searchByKeyword : searchByKeyword
}

export default api;