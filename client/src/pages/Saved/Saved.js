import React, { Component } from "react";
import API from "../../utils/API";
import Card from "../../components/Card/Card";
import './style.css'

class Saved extends Component {

    state = {
        savedBooks: [],
        currentPage: "Saved"
    };


    componentDidMount() {
        let that = this;
        API.getSavedBooks().then(function(response) {
            that.setState({
                savedBooks: response.data
            })
        })
    }

    removeBook = (bookId) => {
        let that = this;
        console.log(`result to be removed (Book ID): ${bookId}`);
        API.deleteBook(bookId)
        .then(function() {
            API.getSavedBooks().then(function(response) {
                that.setState({
                    savedBooks: response.data
                })
            })
        })
    };
  
    separateAuthors = (array) => {
        if (array.length > 1) {
            return array.join(", ");
        } else {
            return array;
        }
    }

    render() {
        return (

        <div>
            <div className="container">
            <h1 className="text-center">Saved Books</h1>
            <hr />
                
                { (this.state.savedBooks[0])
                    ? 
                    this.state.savedBooks.map((item, i) => (
                        <Card
                            key={ i }
                            index={ i }
                            id={ item._id }
                            authors={ this.separateAuthors(item.authors) }
                            description={ item.description }
                            image={ item.image }
                            link={ item.link }
                            title={ item.title }
                            currentPage = {this.state.currentPage}
                            removeBook={ this.removeBook }
                        />
                    ))
                    :
                    <h3 className="text-center">No Results to Display</h3>
                }

            </div>
            </div>
        );
    }
}

export default Saved;
