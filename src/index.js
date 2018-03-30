/* @darthvid DNA (React) index.js */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Deck from "./components/Deck/Deck";

//import registerServiceWorker from './registerServiceWorker';

import cardList from "./input.js";

ReactDOM.render(<Deck cardList={cardList} />, document.getElementById("root"));

//registerServiceWorker();
