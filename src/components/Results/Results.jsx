import React from "react";
import Poster from "../Poster/Poster";
import InfoCard from "../InfoCard/InfoCard";
import BoxOffice from "../BoxOffice/BoxOffice";
import CastCrew from "../CastCrew/CastCrew";

const Results = (props) => {
  return (
    <div>
      <div className="row result-title">
        <div className="col-lg-12">
          <h2>
            {props.title}~{props.year}
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <Poster posterImg={props.poster} title={props.title} />
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-6">
              <InfoCard
                awards={props.awards}
                country={props.country}
                dvd={props.dvd}
                genre={props.genre}
                languages={props.languages}
                plot={props.plot}
                production={props.production}
                rating={props.rating}
                releaseDate={props.releaseDate}
                title={props.title}
                website={props.website}
              />
            </div>
            <div className="col-lg-6">
              <CastCrew
                cast={props.cast}
                director={props.director}
                writer={props.writer}
              />
            </div>
          </div>
          <div className="row box-office">
            <div className="col-lg-12">
              <BoxOffice earnings={props.earnings} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
