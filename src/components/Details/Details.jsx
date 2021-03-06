import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MovieGenres from '../MovieGenres/MovieGenres';
import { Button } from '@material-ui/core';
import './Details.css';


class Details extends Component {

    componentDidMount() {
        console.log('---------------Details mounted');
        //send data to our reducer that holds previous data
        this.props.dispatch({
            type: 'current_genres',
            payload: this.props.reduxState.genres
        })
    };//end componentDidMount

    render() {
        return (
            <div className="details">
                {/* <h1>Details</h1> */}
                {/* TEST WITH JSON */}
                {/* {JSON.stringify(this.props.reduxState.selectMovie)} */}
                {/* {JSON.stringify(this.props.reduxState.genres)} */}
                <div className="border">
                    <h1 className="detailsTitle">{this.props.reduxState.selectMovie.title}</h1>
                    <p>{this.props.reduxState.selectMovie.description}</p>
                    <Link to="/"><Button>Back to Movie List</Button></Link>
                    <Link to="/edit"><Button>Edit</Button></Link>
                    <div>
                        {/* Loop through genres to display specific genres per movie */}
                        <h3>GENRES:</h3> {this.props.reduxState.genres.map((genre, index) => {
                            return (
                                <ul key={index}>
                                    <MovieGenres movieGenre={genre} />
                                </ul>
                            )
                        })}
                    </div>
                </div>
            </div>
        );//end return
    };//end render
};//end class


//connect to reduxState and display on DOM
const putStateOnProps = reduxState => ({ reduxState });
//connect
export default connect(putStateOnProps)(Details);