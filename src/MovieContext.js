import React, { createContext, useContext } from "react";

const MovieContext = createContext();

export const useMovie = () => useContext(MovieContext);

export default MovieContext;
