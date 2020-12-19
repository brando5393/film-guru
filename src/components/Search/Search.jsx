import React from "react";
import Alert from "../Alert/Alert";

const Search = (props) => {
  return (
    <form className="form" onSubmit={props.handleSubmit}>
      <Alert showAlert={props.showAlert} />
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Movie Title"
          value={props.value}
          name="userInput"
          onChange={props.onChange}
        />
        <button type="submit" className="btn-lg btn-primary">
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
