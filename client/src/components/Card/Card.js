import React from 'react';
import './style.css';

function Card(props) {

    return (
        <div>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body text-center">
                            <h5 className="card-title">{ props.title }</h5>
                            <h6 className="card-subttle">Author(s): { props.authors }</h6>
                            <img src = { props.image } alt = { props.title } width = "200px"></img>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body scroll-box">
                            <p>{ props.description }</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body text-center">
                            <a href={ props.link } target="_blank" rel="noopener noreferrer" className="btn btn-primary my-button">Learn More</a>

                            { (props.currentPage === "Home") 
                                ? 
                                    ( <button className="btn btn-warning my-button" onClick={ () => props.saveBook(props.index) }>Save</button> )
                                :
                                    ( <button className="btn btn-danger my-button" onClick={ () => props.removeBook(props.index) }>Remove</button> )

                            } 


                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default Card;