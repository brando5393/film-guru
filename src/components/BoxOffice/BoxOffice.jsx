import React from "react";

const BoxOffice = (props) => {
  return (
    <div class="card">
      <h5 class="card-header">Total Box Office Earnings</h5>
      <div class="card-body">
        <h6>{props.earnings}</h6>
      </div>
    </div>
  );
};

export default BoxOffice;
