import React, { Component } from "react";
import './style.css'

class NotFound extends Component {


    render() {
        return (

            <div>
                <div className="container">
                    <h1 className="text-center">Oops! Something went wrong!</h1>

                    <hr />

                    <h3 className="text-center">Use the navigation menu above to search for books or view your saved books</h3>
                    
                </div>
            </div>

        );
    }
}

export default NotFound;
