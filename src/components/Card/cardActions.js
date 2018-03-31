import { SET_ACTIVE_CARD } from "../../actions/actionTypes";

export const setActiveCard = card => ({
  type: SET_ACTIVE_CARD,
  card
});
