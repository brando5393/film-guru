import React from "react";
import Poster from "../Poster/Poster";
import InfoCard from "../InfoCard/InfoCard";
import BoxOffice from "../BoxOffice/BoxOffice";
import CastCrew from "../CastCrew/CastCrew";

const Results = ({
  title,
  year,
  poster,
  awards,
  country,
  dvd,
  genre,
  languages,
  plot,
  production,
  rating,
  releaseDate,
  website,
  cast,
  director,
  writer,
  earnings,
}) => (
  <div>
    <div className="row result-title">
      <div className="col-lg-12">
        <h2>
          {title}~{year}
        </h2>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-6">
        <Poster posterImg={poster} title={title} />
      </div>
      <div className="col-lg-6">
        <div className="row">
          <div className="col-lg-6">
            <InfoCard
              awards={awards}
              country={country}
              dvd={dvd}
              genre={genre}
              languages={languages}
              plot={plot}
              production={production}
              rating={rating}
              releaseDate={releaseDate}
              title={title}
              website={website}
            />
          </div>
          <div className="col-lg-6">
            <CastCrew
              cast={cast}
              director={director}
              writer={writer}
            />
          </div>
        </div>
        <div className="row box-office">
          <div className="col-lg-12">
            <BoxOffice earnings={earnings} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Results;
