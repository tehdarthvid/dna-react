/* @darthvid DNA (React) index.js */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//import registerServiceWorker from './registerServiceWorker';

import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

//import Header from "./components/Header/Header";
import ActiveDeckContainer from "./containers/ActiveDeckContainer";

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <ActiveDeckContainer />
  </Provider>,
  document.getElementById("root")
);

//registerServiceWorker();
