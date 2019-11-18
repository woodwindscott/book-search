import React, { Component } from "react";
import API from "../../utils/API";
import Card from "../Card/Card";

import SearchBar from "../SearchBar/SearchBar";

class Wrapper extends Component {
  state = {
    result: {},
    search: ""
  };

  searchBooks = query => {
    API.search(query)
      .then(res => {
        // console.log(res.data.items[0]);
        this.setState({ result: res.data.items });
        console.log(this.state.result[0]);
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
                    image={ item.volumeInfo.imageLinks.thumbnail }
                    link={ item.volumeInfo.infoLink }
                    title={ item.volumeInfo.title }
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
