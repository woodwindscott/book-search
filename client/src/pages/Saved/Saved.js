import React, { Component } from "react";
import API from "../../utils/API";
import Card from "../../components/Card/Card";
import NavBar from "../../components/NavBar/NavBar"
import './style.css'

import SearchBar from "../../components/SearchBar/SearchBar";

class Saved extends Component {

    state = {
        savedBooks: [],
        currentPage: "Saved"
    };


    componentDidMount() {
        console.log(this.state.currentPage);
        let that = this;
        API.getSavedBooks().then(function(response) {
            console.log("Inside Set State");
            // console.log(response)
            that.setState({
                savedBooks: response.data
            })
        })
    }

    // COMPLETE
    searchBooks = query => {
        API.search(query)
        .then(res => {
            this.setState({ result: res.data.items });
            this.setState({ search: ""});
        }).catch(err => console.log(err));       
    };

    removeBook = (index) => {

        console.log(`Index of saved result to be removed: ${index}`);
        // this.setState({
        // saved: this.state.result[index]
        // }, function() {
        //     API.saveBook(this.state.saved)
        // }
        console.log("Trying to remove book");

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
            {/* <NavBar /> */}

            <div className="container">

            <h1 className="text-center">Saved Books</h1>
            <hr />
                
                { (this.state.savedBooks[0])
                    ? 
                    this.state.savedBooks.map((item, i) => (
                        <Card
                            key={ i }
                            index={ i }
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
