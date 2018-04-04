/* @darthvid DNA (React) index.js */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//import registerServiceWorker from './registerServiceWorker';

import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

//import Header from "./components/Header/Header";
import ActiveDeckContainer from "./containers/ActiveDeckContainer";
import FullImg from "./components/FullImg/FullImg";

const store = configureStore();

/*
let scripts = document.getElementsByTagName("script");
let lastScript = scripts[scripts.length - 1];
let scriptName = lastScript.src;
console.log("loading: " + scriptName);
*/
let scripts = document.getElementsByTagName("script");
console.log(`loading: ${scripts[scripts.length - 1].src}`);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <FullImg />
      <ActiveDeckContainer />
    </div>
  </Provider>,
  document.getElementById("root")
);

//registerServiceWorker();
