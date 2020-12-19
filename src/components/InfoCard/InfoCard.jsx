import React from "react";

const InfoCard = (props) => {
  return (
    <div className="card info-card">
      <h5 className="card-header">General Information</h5>
      <div className="card-body">
        <h6>Title: {props.title}</h6>
        <h6>
          Plot:
          <br />
          {props.plot}
        </h6>
        <h6>
          Website:{" "}
          <a href={props.website} target="_blank">
            {props.website}
          </a>
        </h6>
        <h6>Rating: {props.rating}</h6>
        <h6>Release Date: {props.releaseDate}</h6>
        <h6>Country of Origin: {props.country}</h6>
        <h6>Languages: {props.languages}</h6>
        <h6>
          Production Company:
          <br /> {props.production}
        </h6>
        <h6>
          Awards:
          <br /> {props.awards}
        </h6>
        <h6>Genre: {props.genre}</h6>
        <h6>Home Media: {props.dvd}</h6>
      </div>
    </div>
  );
};

export default InfoCard;
