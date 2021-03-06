import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';

// Create the rootSaga generator function
function* rootSaga() {
    //intercept data then send to reducer
    yield takeEvery('GET_MOVIES', fetchMovies)
    yield takeEvery('EDIT_MOVIES', editMovies)
    yield takeEvery('GET_GENRES', getGenres)
}

//generators
function* fetchMovies(action){
    console.log('-----------> in fetchMovies');
    try {
        //retrieve data from /movies route
        const response = yield axios.get('/movies')
        console.log('in fetchMovies');
        //send data to our movies reducer
        yield put({
            type: 'SET_MOVIES',
            payload: response.data
        })
    } catch (err) {
        console.log(err);
    };//end try
};//end fetchMovies

function* editMovies(action){
    console.log('----------in editMovies', action.payload.id);
    try {
        //set variables to simplify
        let id = action.payload.id
        let title = action.payload.title;
        let description = action.payload.description;
        //PUT update to database
        //action.payload will be the new input typed into title or description
        const response = yield axios.put(`/movies/${id}`, { title: title, description: description} )
        console.log('EDIT MOVIES RESPONSE TO SEND', response.data);
    } catch (err) {
        console.log('Error editMovies generator', err);
    }
};//end editMovies

function* getGenres(action){
    console.log('-----------in getGenres');
    try {
        //get information from get server
        const response = yield axios.get('/genres');
        //response.data will have all of the table columns from postico
        console.log('IN GET GENRES ---:', response.data); 
        //send data to reducer
        yield put({
            type: 'SET_GENRES',
            payload: response.data
        })
    } catch (err) {
        console.log('Error getGenres generator', err);
    }
};//end getGenres

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
};//end movies

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
};//end genres

// Used to put selected movie in details
const selectMovie = (state = [], action) => {
    console.log('in currentMovie reducer');
    // if statement to select specific movies, return movie data
    if (action.type === 'current_movie'){
        return action.payload;
    }
    return state;
};//end currentMovie

//Used to put selected genres in details
const selectGenres = (state = [], action) => {
    console.log('in selectGenres reducer');
    if (action.type === 'current_genres'){
        return action.payload;
    }
    return state;
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        selectMovie,
        selectGenres
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
<Provider store={storeInstance}>
    <App />
</Provider>,
    document.getElementById('root'));
    
registerServiceWorker();
