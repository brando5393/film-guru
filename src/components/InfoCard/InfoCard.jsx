import React from "react";

const InfoCard = ({
  title,
  plot,
  website,
  rating,
  releaseDate,
  country,
  languages,
  production,
  awards,
  genre,
  dvd,
}) => (
  <div className="card info-card">
    <h5 className="card-header">General Information</h5>
    <div className="card-body">
      <h6>Title: {title}</h6>
      <h6>
        Plot:
        <br />
        {plot}
      </h6>
      <h6>
        Website:{" "}
        <a href={website} target="_blank" rel="noopener noreferrer">
          {website}
        </a>
      </h6>
      <h6>Rating: {rating}</h6>
      <h6>Release Date: {releaseDate}</h6>
      <h6>Country of Origin: {country}</h6>
      <h6>Languages: {languages}</h6>
      <h6>
        Production Company:
        <br /> {production}
      </h6>
      <h6>
        Awards:
        <br /> {awards}
      </h6>
      <h6>Genre: {genre}</h6>
      <h6>Home Media: {dvd}</h6>
    </div>
  </div>
);

export default InfoCard;
