import { combineReducers } from "redux";

import activeCardReducer from "./activeCardReducer";
import activeDeckReducer from "./activeDeckReducer";

const rootReducer = combineReducers({
  activeCarder: activeCardReducer,
  activeDeck: activeDeckReducer
});

export default rootReducer;
