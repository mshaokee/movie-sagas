# Movie Sagas Project: Blockbuster 2.0 Editor!

## Description
Duration: ~15 hours

This project allows a user to select a movie from our database we have, clicking the poster will route the user to another details page, also displaying genres at the details page. The details page has the ability to go back to the previous movies list, or edit the current movie. The edit button routes the user to the Edit page and can then change the title or description by submitting and will submit the new information to the database. Otherwise you can cancel bringing you back to the Details page. 

During this project I had to correctly set up my GET routers and PUT router, set up and understand reducers and generators with Redux-Saga. Using BrowserRouter to route, using connect to access our reduxState and display information on each page. To display I had to dispatch and correctly map throughout our arrays of information to display the correct movie.

## Screen Shots
![](images/movieList.PNG)

![](images/details.PNG)

![](images/submit.PNG)

## Technologies Used
* Javascript
* Node.js
* React / Redux / Saga
* CSS
* Axios
* Material UI

## Installation
#### basics
[ ] npm install
[ ] npm install react-router-dom
[ ] npm install @material-ui/core
[ ] npm run server, npm run client to get browser running
#### database
[ ] transfer data from database.sql to your database, I used Postico.
[ ] create 3rd table that junctions movies and genres / add FOREIGN KEY
[ ] assign genres to movies as desired
#### routing
[ ] import BrowserRouter and Route to path through pages in App
[ ] import Link in components as needed
#### display movie list
[ ] import components into App
[ ] connect components as needed
[ ] set up movie router in server to GET id, title, poster, description from DB
[ ] dispatch for movies and genres to display on home page load
[ ] create rootSaga to yield takeEvery and send to generator
[ ] in get generator, axios call to get then yield put to send data to reducer
[ ] in Home component map through reduxState of movies into SpecificMovie component
[ ] display movie title, img with poster, and movie description through props
#### details
[ ] create back button that Links to home page
[ ] import Link and wrap the img with Link to details page
[ ] dispatch payload of data from movie list in SpecificMovie to new reducer selectMovie to take in current movie
[ ] return payload
[ ] load genres on page with a dispatch to genres through a get genres generator
[ ] set up genres server router with a JOIN sequel
[ ] yield put to send data to our genres reducer
[ ] display title and description with reduxState
[ ] map through genres into MovieGenres component
[ ] set empty variable and render it
[ ] create if statement if movieGenre title is the same as selectMovie title set the empty variable to display movieGenre name
[ ] if else movie id set to select movie id so that genre stays on page after going back to movie list

#### editing
[ ] create state that will hold id, title, and description
[ ] create change title and change description functions
[ ] these functions will be onChange and setState to their new values
[ ] create two inputs for title and description
[ ] input 1 will onChange to title, input 2 will onChange to description
[ ] set default values by defaultValues of the reduxState data we have from movie list
[ ] create cancel button that routes back to details
[ ] create submit button that onClick does submit function and routes back to details
[ ] submit function dispatches state to edit movies and current movies to redisplay on details
[ ] edit movie generator do put request with data sent through dispatch
[ ] set up put router in movies router, update sequel and cleanse 
[ ] database information should change and details page will update

## Acknowledgement
Thanks to Prime Digital Academy and my cohort Lamport for their support and guidance. 
