import React from "react";
import Alert from "../Alert/Alert";
import { useMovie } from "../../MovieContext";

const Search = () => {
  const { value: userInput, handleSubmit, showAlert, handleChange, userInput: value } = useMovie();
  return (
    <form className="form" onSubmit={handleSubmit}>
      <Alert showAlert={showAlert} />
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Movie Title"
          value={value}
          name="userInput"
          onChange={handleChange}
        />
        <button type="submit" className="btn-lg btn-primary">
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
