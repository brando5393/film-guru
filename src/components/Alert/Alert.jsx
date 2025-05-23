import React from "react";

const Alert = ({ showAlert }) => (
  <div
    className="alert alert-danger"
    role="alert"
    style={{ display: showAlert ? "block" : "none" }}
  >
    Can't submit empty search, please try again.
  </div>
);

export default Alert;
