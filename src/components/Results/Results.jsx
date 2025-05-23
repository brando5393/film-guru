import React from "react";
import Poster from "../Poster/Poster";
import InfoCard from "../InfoCard/InfoCard";
import BoxOffice from "../BoxOffice/BoxOffice";
import CastCrew from "../CastCrew/CastCrew";
import { useMovie } from "../../MovieContext";

const Results = () => {
  const { movieData } = useMovie();
  return (
    <div>
      <div className="row result-title">
        <div className="col-lg-12">
          <h2>
            {movieData.Title}~{movieData.Year}
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <Poster posterImg={movieData.Poster} title={movieData.Title} />
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-6">
              <InfoCard
                awards={movieData.Awards}
                country={movieData.Country}
                dvd={movieData.DVD}
                genre={movieData.Genre}
                languages={movieData.Language}
                plot={movieData.Plot}
                production={movieData.Production}
                rating={movieData.Rated}
                releaseDate={movieData.Released}
                title={movieData.Title}
                website={movieData.Website}
              />
            </div>
            <div className="col-lg-6">
              <CastCrew
                cast={movieData.Actors}
                director={movieData.Director}
                writer={movieData.Writer}
              />
            </div>
          </div>
          <div className="row box-office">
            <div className="col-lg-12">
              <BoxOffice earnings={movieData.BoxOffice} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
