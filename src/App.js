// import dotenv from "dotenv";
import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Search from "./components/Search/Search";
import Results from "./components/Results/Results";
import CoffeeButton from "./components/CoffeeButton/CoffeeButton";

// dotenv.config();

function App() {
  const [state, setState] = useState({
    dataAvailable: false,
    showAlert: false,
    userInput: "",
    movieData: [],
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value.toLowerCase(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.userInput !== "") {
      axios
        .get(`https://www.omdbapi.com/?apikey=52214b18&t=${state.userInput}`)
        .then((res) => {
          setState({
            ...state,
            movieData: res.data,
            dataAvailable: true,
            showAlert: false,
          });
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      setState({
        ...state,
        dataAvailable: false,
        showAlert: true,
      });
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="Jumbotron text-center">
              <h1 className="display-4">Welcome to Film Guru</h1>
              <p className="lead">
                Answering all of your film related questions in a flash.
              </p>
              <hr className="my-4" />
              <Search
                value={state.userInput}
                onChange={handleChange}
                handleSubmit={handleSubmit}
                showAlert={state.showAlert}
              />
            </div>
          </div>
        </div>
        <div className="row results-area">
          <div className="col-lg-12">
            {state.dataAvailable ? (
              <Results
                awards={state.movieData.Awards}
                cast={state.movieData.Actors}
                director={state.movieData.Director}
                country={state.movieData.Country}
                dvd={state.movieData.DVD}
                earnings={state.movieData.BoxOffice}
                genre={state.movieData.Genre}
                languages={state.movieData.Language}
                plot={state.movieData.Plot}
                poster={state.movieData.Poster}
                production={state.movieData.Production}
                rating={state.movieData.Rated}
                releaseDate={state.movieData.Released}
                title={state.movieData.Title}
                website={state.movieData.Website}
                writer={state.movieData.Writer}
                year={state.movieData.Year}
              />
            ) : (
              <h3>No data to display... Try searching for something.</h3>
            )}
          </div>
        </div>
      </div>
      <div className="row footer">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <h6>Made for the ♡ of code by Brandon Williams</h6>
        </div>
        <div className="col-lg-4">
          <CoffeeButton />
        </div>
      </div>
    </div>
  );
}

export default App;
