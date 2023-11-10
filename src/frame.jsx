import React from "react";
import { useState, useEffect } from "react";
import { UseParams } from "react-router-dom";
import moment from "moment";
import ClassNames from "classnames";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import propTypes from "prop-types";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  // Some_counter,
  composeEnhancers(applyMiddleware(Some_middleware))
);

// const store = createStore(
//   appReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const connector = connect(mapState, mapProps); //HOC High Order Copmonent

export default connector(Couneter);
