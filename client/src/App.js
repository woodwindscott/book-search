import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './pages/Home/Home';
import Saved from './pages/Saved/Saved';
import NavBar from './components/NavBar/NavBar';
import NotFound from './pages/NotFound/NotFound';

// Future Development - page display for single book
// import Book from './pages/Book';


class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
            {/* Potential future update to show single book on its own page */}
            {/* <Route exact path="/books/:id" component={Book} /> */}
          <Route component={NotFound} />
        </Switch>

      </Router>
    );
  }
}

export default App;
