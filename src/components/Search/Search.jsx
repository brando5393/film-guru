import React from "react";
import Alert from "../Alert/Alert";

const Search = ({ value, handleSubmit, showAlert, onChange }) => (
  <form className="form" onSubmit={handleSubmit}>
    <Alert showAlert={showAlert} />
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Enter Movie Title"
        value={value}
        name="userInput"
        onChange={onChange}
      />
      <button type="submit" className="btn-lg btn-primary">
        Search
      </button>
    </div>
  </form>
);

export default Search;
