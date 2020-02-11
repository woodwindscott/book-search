const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  // .get(booksController.findAll)
  // .post(booksController.create)
  .post(booksController.saveBook);

router.route("/save-book")
  .post(booksController.saveBook);

// Matches with "/api/books/get-saved-books"
router.route("/get-saved-books")
  .get(booksController.findAll);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;







// // Dependencies
// const mongoose = require('mongoose');

// // Connect to the Mongo DB
// mongoose.connect("mongodb://localhost/googlebooks", { useNewUrlParser: true });

// var db = require("../../models");

// // Routes
// module.exports = function(app) {

//     app.get("/api/saved", function(req, res) {
//         // Grab every saved document in the Articles collection
//         db.Book.find({ })
//         .then(function(dbBook) {
//             console.log(dbBook);
//             res.json(dbBook);
//         })
//         .catch(function(err) {
//             // If an error occurred, send it to the client
//             res.json(err);
//         });
//     });

//     app.post("/api/saveBook", function(req, res) {
//         db.Book.create({
//             authors: req.body.volumeInfo.authors,
//             description: req.body.description,
//             image: req.body.volumeInfo.imageLinks.thumbnail,
//             link: req.body.volumeInfo.infoLink,
//             title: req.body.volumeInfo.title
//             })
//             .then(function(dbBook) {
//                 console.log(dbBook);
//                 res.json(dbBook);
//             }).catch(function(err) {
//                 res.json(err);
//             })
//     });
        
//     // TODO: Incomplete
//     // When "Clear Articles" button is selected, it will delete the entire Articles and Notes collections
//     app.delete("/api/delete", function(req, res) {
//         // Delete the entire Articles collection
//         db.Book.remove({}, function (err, result) {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log("Book Collection deleted");
//                 // Delete the entire Notes collection
//                 return db.Note.remove({}, function (err, result) {
//                     if (err) {
//                         console.log(err);
//                     } else {
//                         console.log("Notes Collection deleted");
//                     }
//                 });
//             }
//         });
//         res.end();
//     });

// };