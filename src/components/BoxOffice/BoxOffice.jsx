import React from "react";

const BoxOffice = ({ earnings }) => (
  <div className="card">
    <h5 className="card-header">Total Box Office Earnings</h5>
    <div className="card-body">
      <h6>{earnings}</h6>
    </div>
  </div>
);

export default BoxOffice;
