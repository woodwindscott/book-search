import React, { Component } from "react";
import API from "../../utils/API";
import Card from "../Card/Card";

import SearchBar from "../SearchBar/SearchBar";

class Wrapper extends Component {
  state = {
    result: [],
    saved: {},
    search: ""
  };


  componentDidMount() {
    console.log(this.state);
  }
  saveBook = (index) => {

    console.log(`Index of saved result: ${index}`);
    this.setState({
      saved: this.state.result[index]
      }, function() {
        API.saveBook(this.state.saved)
    }
  )};

  // COMPLETE
  searchBooks = query => {
    API.search(query)
      .then(res => {
        this.setState({ result: res.data.items });
      }).catch(err => console.log(err));       
  };

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({
      search: value
    });
  }; 

//   // When the form is submitted, search the Google Books API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.search);
    this.searchBooks(this.state.search);
  };

  separateAuthors = (array) => {
      if (array.length > 1) {
          return array.join(", ");
      } else {
          return array;
      }
  }

  checkForThumbnail = (item) => {
    console.log(item)
    if (item.volumeInfo.imageLinks) {
      return item.volumeInfo.imageLinks.thumbnail
    } else {
      return "./images/image-not-available.png"
    }
  }

  render() {
    return (

        <div className="container">
        <SearchBar 
            search={this.state.search}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
        />
        
        { (this.state.result[0])
            ? 
            this.state.result.map((item, i) => (
                <Card
                    key={ i }
                    index={ i }
                    authors={ this.separateAuthors(item.volumeInfo.authors) }
                    description={ item.volumeInfo.description }
                    // image={ item.volumeInfo.imageLinks.thumbnail }
                    image={ this.checkForThumbnail(item) }
                    link={ item.volumeInfo.infoLink }
                    title={ item.volumeInfo.title }
                    saveBook={ this.saveBook }
                />
            ))
            :
            <h3>No Results to Display</h3>
        }

        {/* {this.state.result.Title ? (
            <MovieDetail
              title={this.state.result.Title}
              src={this.state.result.Poster}
              director={this.state.result.Director}
              genre={this.state.result.Genre}
              released={this.state.result.Released}
            />
          ) : (
            <h3>No Results to Display</h3>
          )} */}

    </div>
    );
  }
}

export default Wrapper;
