// import dotenv from "dotenv";
import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Search from "./components/Search/Search";
import Results from "./components/Results/Results";
import CoffeeButton from "./components/CoffeeButton/CoffeeButton";

// dotenv.config();

const App = () => {
  const [dataAvailable, setDataAvailable] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [movieData, setMovieData] = useState({});

  const handleChange = (e) => {
    setUserInput(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput !== "") {
      axios
        .get(`https://www.omdbapi.com/?apikey=52214b18&t=${userInput}`)
        .then((res) => {
          setMovieData(res.data);
          setDataAvailable(true);
          setShowAlert(false);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      setDataAvailable(false);
      setShowAlert(true);
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
                value={userInput}
                onChange={handleChange}
                handleSubmit={handleSubmit}
                showAlert={showAlert}
              />
            </div>
          </div>
        </div>
        <div className="row results-area">
          <div className="col-lg-12">
            {dataAvailable ? (
              <Results
                awards={movieData.Awards}
                cast={movieData.Actors}
                director={movieData.Director}
                country={movieData.Country}
                dvd={movieData.DVD}
                earnings={movieData.BoxOffice}
                genre={movieData.Genre}
                languages={movieData.Language}
                plot={movieData.Plot}
                poster={movieData.Poster}
                production={movieData.Production}
                rating={movieData.Rated}
                releaseDate={movieData.Released}
                title={movieData.Title}
                website={movieData.Website}
                writer={movieData.Writer}
                year={movieData.Year}
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
};

export default App;
