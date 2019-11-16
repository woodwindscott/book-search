import React, { Component } from "react";
// import Container from "./Container";
// import Row from "./Row";
// import Col from "./Col";
// import Card from "./Card";
// import SearchForm from "./SearchForm";
// import MovieDetail from "./MovieDetail";
import API from "../../utils/API";
import SearchBar from "../SearchBar/SearchBar";

class Wrapper extends Component {
  state = {
    result: {},
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
//   componentDidMount() {
//     this.searchMovies("The Matrix");
//   }

//   searchMovies = query => {
//     API.search(query)
//       .then(res => this.setState({ result: res.data }))
//       .catch(err => console.log(err));
//   };

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({
      search: value
    });
    console.log(this.state.search);
  };

//   // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.search);
    // this.searchMovies(this.state.search);
  };

  render() {
    return (

        <SearchBar 
            search={this.state.search}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
        />

    //   <Container>
    //     <Row>
    //       <Col size="md-8">
    //         <Card
    //           heading={this.state.result.Title || "Search for a Movie to Begin"}
    //         >
    //           {this.state.result.Title ? (
    //             <MovieDetail
    //               title={this.state.result.Title}
    //               src={this.state.result.Poster}
    //               director={this.state.result.Director}
    //               genre={this.state.result.Genre}
    //               released={this.state.result.Released}
    //             />
    //           ) : (
    //             <h3>No Results to Display</h3>
    //           )}
    //         </Card>
    //       </Col>
    //       <Col size="md-4">
    //         <Card heading="Search">
    //           <SearchForm
    //             value={this.state.search}
    //             handleInputChange={this.handleInputChange}
    //             handleFormSubmit={this.handleFormSubmit}
    //           />
    //         </Card>
    //       </Col>
    //     </Row>
    //   </Container>
    );
  }
}

export default Wrapper;
