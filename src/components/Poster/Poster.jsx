import React from "react";

const Poster = ({ posterImg, title }) => (
  <div className="card">
    <h5 className="card-header">Poster</h5>
    <div className="card-body text-center">
      <img
        className="poster-img"
        src={posterImg}
        alt={`Poster for the film ${title}`}
      />
    </div>
  </div>
);

export default Poster;
