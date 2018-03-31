import initialState from "./initialState";

export default function activeDeckReducer(
  state = { deck: initialState.activeDeck },
  action
) {
  switch (action.type) {
    default:
      return state;
  }
}
