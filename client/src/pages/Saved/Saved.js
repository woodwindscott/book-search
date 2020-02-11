import React, { Component } from "react";
import API from "../../utils/API";
import Card from "../../components/Card/Card";
import NavBar from "../../components/NavBar/NavBar"
import './style.css'

import SearchBar from "../../components/SearchBar/SearchBar";

class Home extends Component {
  state = {
    savedBooks: [],
    // saved: {},
    // search: ""
  };


  componentDidMount() {
    let that = this;
    API.getSavedBooks().then(function(response) {
        console.log("Inside Set State");
        // console.log(response)
        that.setState({
            savedBooks: response.data
        })
        console.log(that.state.savedBooks);

    })


    // this.setState({
    //     savedBooks: API.getSavedBooks()
    // })
    console.log(this.state.savedBooks);
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
        this.setState({ search: ""});
      }).catch(err => console.log(err));       
  };

//   handleInputChange = event => {
//     const value = event.target.value;
//     this.setState({
//       search: value
//     });
//   }; 

//   // When the form is submitted, search the Google Books API for the value of `this.state.search`
//   handleFormSubmit = event => {
//     event.preventDefault();
//     console.log(this.state.search);
//     this.searchBooks(this.state.search);
//   };

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

      <div>
        {/* <NavBar /> */}

          <div className="container">

          <h1 className="text-center">Saved Books</h1>
          <hr />
            
            {/* <SearchBar 
                search={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
            /> */}
            
            { (this.state.savedBooks[0])
                ? 
                this.state.savedBooks.map((item, i) => (
                    <Card
                        key={ i }
                        index={ i }
                        authors={ this.separateAuthors(item.authors) }
                        description={ item.description }
                        // image={ this.checkForThumbnail(item) }
                        image={ item.image }
                        link={ item.link }
                        title={ item.title }
                        // saveBook={ this.saveBook }
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

export default Home;
