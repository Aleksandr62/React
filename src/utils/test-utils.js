import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { combinedReducer } from "../store";

export const renderWrapper = (component, { preloadedState } = {}) => {
  const store = configureStore({
    reducer: combinedReducer,
    preloadedState
  });

  const Wrapper = ({ children }) => {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  };

  return {
    store,
    ...render(component, { wrapper: Wrapper })
  };
};

export * from "@testing-library/react";
