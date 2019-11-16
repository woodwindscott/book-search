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


// Creating documents in your books collection similar to the following:

// {
//   authors: ["Suzanne Collins"]
//   description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature."
//   image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
//   link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api"
//   title: "The Hunger Games"
// }