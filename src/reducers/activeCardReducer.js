import initialState from "./initialState";
import { SET_ACTIVE_CARD } from "../actions/actionTypes";

export default function activeCardReducer(
  state = { activeCard: initialState.activeCard },
  action
) {
  //const activeCard = state.activeCard;
  switch (action.type) {
    case SET_ACTIVE_CARD:
      console.log(`SET_ACTIVE_CARD: ${action.card}`);
      /*
      Object.assign({}, state, {
        activeCard: action.card
      });*/
      return { activeCard: action.card };
    default:
      return state;
  }
}
