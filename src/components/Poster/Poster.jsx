import React from "react";

const Poster = (props) => {
  return (
    <div className="card">
      <h5 className="card-header">Poster</h5>
      <div className="card-body text-center">
        <img
          className="poster-img"
          src={props.posterImg}
          alt={`Poster for the film ${props.title}`}
        />
      </div>
    </div>
  );
};

export default Poster;
