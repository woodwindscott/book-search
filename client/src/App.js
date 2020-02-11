import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './pages/Home/Home';
import Saved from './pages/Saved/Saved';
// import Book from './pages/Book';
import NavBar from './components/NavBar/NavBar';
// import NoMatch from './pages/NoMatch/NoMatch';

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          {/* <Route exact path="/books/:id" component={Book} /> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>

      </Router>
    );
  }
}

export default App;
