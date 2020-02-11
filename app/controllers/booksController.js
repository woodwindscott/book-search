const db = require("../models");

// Defining methods for the booksController
module.exports = {

    // findAll: function(req, res) {
    //     db.Book
    //     .find(req.query)
    //     .sort({ date: -1 })
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // },

    findAll: function (req, res) {
        db.Book.find()
        .then(dbSavedBooks => {
            console.log(dbSavedBooks);
            res.json(dbSavedBooks)  
        })
        .catch(err => res.status(422).json(err));
    },

    findById: function(req, res) {
        db.Book
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    create: function(req, res) {
        db.Book
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    update: function(req, res) {
        db.Book
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    remove: function(req, res) {
        db.Book
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    saveBook: function(req, res) {
        console.log("Top of saveBook - controller");
        console.log(req.body.volumeInfo.title);
        console.log(req.body.volumeInfo.authors);
        console.log(req.body.volumeInfo.description);
        console.log(req.body.volumeInfo.imageLinks.thumbnail);
        console.log(req.body.volumeInfo.infoLink);
        console.log("Inside saveBook - controller!!!!");
        // console.log(req.body);
        db.Book.create({
            title: req.body.volumeInfo.title,
            authors: req.body.volumeInfo.authors,
            description: req.body.volumeInfo.description,
            image: req.body.volumeInfo.imageLinks.thumbnail,
            link: req.body.volumeInfo.infoLink
        })
        .then(function(dbBook) {
            console.log("Book should have been added by now!!!");
            console.log(dbBook);
            res.json(dbBook);
        }).catch(function(err) {
            res.json(err);
        })
    }

};
