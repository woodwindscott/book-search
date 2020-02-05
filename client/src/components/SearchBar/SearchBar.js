import React from "react";
import './style.css'

function SearchBar(props) {
  return (
    <form>
        <div className="form-group">
            <label htmlFor="search"><h3>Search:</h3></label>
            <input
                onChange={props.handleInputChange}
                value={props.search}
                name="search"
                type="text"
                className="form-control"
                placeholder="Search For a Book"
                id="search"
            />
            <br />
            <button onClick={props.handleFormSubmit} className="btn btn-primary text-center">
                Search
            </button>
        </div>
    </form>
  );
}

export default SearchBar;