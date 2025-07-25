import {
  ADD_TO_CART,
  REMOVE_TO_CART,
  SET_USER_DATA,
  CLEAR_STATE,
} from "../constants";

const initialState = [];
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_TO_CART:
      const result = state.filter((item) => item.id !== action.payload);
      return [...result];
    case SET_USER_DATA:
      return action.payload;
    case CLEAR_STATE:
      return [];
    default:
      return state;
  }
};
