# Google Books Search
<hr>

With this full stack MERN application, search the Google Books API, save and remove books from your reading list and click to find more information on any book that interests you.

To begin, simply enter your search terms and click "Search".

<img src="assets/google-books-1.png" alt="Google Books Search Home Page">

You will be provided with the ten closest matches to your search terms.  Simply click "Learn More" to be redirected to the Google Books page for the book, or click "Save" to save this book in your reading list.

<img src="assets/google-books-2.png" alt="Google Books Search Results">

Click on "Saved Books" in the navigation bar to access your reading list.  From here, you can click "Learn More" to be redirected to the Google Books page for the book, or click "Remove" to remove it from your reading list.

<img src="assets/google-books-3.png" alt="Google Books Search Saved Books">

# GitHub Repo:
https://github.com/woodwindscott/book-search/

# Deployed Site:
http://google-books-search-2020.herokuapp.com/

# Technologies used
This project was created with:
* MongoDB
* Express
* NodeJS
* React
* HTML
* CSS
* JavaScript
* Bootstrap

# Future Development Considerations:
1. It would be a nice feature to allow users to "order" their saved books in whichever way they like (newest additions to oldest, by priority, etc.)

2. Similarly, to group books by category would be nice.  Either with the data provided by the Google Books API or custom categories designed by the user.

3. Additionally, I think there is some room to be able to clean up the routing file structure.  Currently, it goes through too many levels and the same result could be achieved with less code and fewer files.
