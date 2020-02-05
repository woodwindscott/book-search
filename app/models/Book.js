var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new BookSchema object
var BookSchema = new Schema({
  // Title of the book from the Google Books API
  title: {
    type: String,
    required: true
  },
  // The books's author(s) as returned from the Google Books API
  authors: {
    type: Array,
    required: true
  },
  //The book's description as returned from the Google Books API
  description: {
    type: String,
    required: true
  },
  // The Book's thumbnail image as returned from the Google Books API
  image: {
    type: String,
    required: true
  },
  // The Book's information link as returned from the Google Books API
  link: {
    type: String,
    required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
var Book = mongoose.model("Book", BookSchema);

// Export the Book model
module.exports = Book;
