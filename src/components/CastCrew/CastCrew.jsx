import React from "react";

const CastCrew = (props) => {
  return (
    <div class="card">
      <h5 class="card-header">Cast and Crew</h5>
      <div class="card-body">
        <h6>Director: {props.director}</h6>
        <h6>Writer: {props.writer}</h6>
        <h6>Cast: {props.cast}</h6>
      </div>
    </div>
  );
};

export default CastCrew;
