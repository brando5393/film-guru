import React from "react";

const CastCrew = ({ director, writer, cast }) => (
  <div className="card">
    <h5 className="card-header">Cast and Crew</h5>
    <div className="card-body">
      <h6>Director: {director}</h6>
      <h6>Writer: {writer}</h6>
      <h6>Cast: {cast}</h6>
    </div>
  </div>
);

export default CastCrew;
