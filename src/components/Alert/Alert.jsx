import React from "react";

const Alert = (props) => {
  let styles = {
    display: "none",
  };
  {
    props.showAlert
      ? (styles = { display: "block" })
      : (styles = { display: "none" });
  }
  return (
    <div className="alert alert-danger" role="alert" style={styles}>
      Can't submit empty search, please try again.
    </div>
  );
};

export default Alert;
