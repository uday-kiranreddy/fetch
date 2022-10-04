import React from "react";
import { useState, useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();
const initialState = {
  loading: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const LoadingTrue = () => {
    dispatch({ type: "LOADING" });
  };
  return <AppContext.Provider value={{...state,LoadingTrue}}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
