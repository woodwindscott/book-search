import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {

  search: function(query) {
    return axios.get(BASEURL + query);
  },

  saveBook: function(object) {
    console.log("Inside API.js - saveBook function\n___________________");
    return axios.post('/api/books/save-book', object)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  },

  deleteBook: function(bookId) {
    console.log("Inside API.js - deleteBook function\n___________________");
    return axios.delete('api/books/delete-book/' + bookId)
    .then(function (response) {
      console.log(response)
    }).catch(function (error) {
      console.log(error)
    })
  },

  getSavedBooks: function() {
    console.log("Inside API.js - get saved Books");
    return axios.get('/api/books/get-saved-books');
  }
};
