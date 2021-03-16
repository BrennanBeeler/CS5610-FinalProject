const QUOTES_URL = 'http://quotes.rest';
const API_KEY = "55F_r0Emfg9tbCTqWmzjCgeF";

const getQuoteOfDay = () =>
    fetch(`${QUOTES_URL}/qod.json?api_key=${API_KEY}`)
        .then(response => response.json())

// const createCourse = (course) =>
//     fetch(COURSES_URL, {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(course)
//     })
//         .then(response => response.json())
//
// // NOT NEEDED FOR MY IMPLEMENTATION
// const findCourseById = (courseId) =>
//     fetch(`${COURSES_URL}/${courseId}`)
//         .then(response => response.json())
//
// const updateCourse = (courseID, course) =>
//     fetch(`${COURSES_URL}/${courseID}`, {
//         method: 'PUT',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(course)
//     })
//         .then(response => response.json())
//
// const deleteCourse = (courseId) =>
//     fetch(`${COURSES_URL}/${courseId}`,
//         {method: 'DELETE'})

const api = {
    getQuoteOfDay : getQuoteOfDay
}

export default api;