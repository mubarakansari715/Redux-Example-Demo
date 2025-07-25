import { ADD_TO_CART, REMOVE_TO_CART, USER_LIST } from "../constants";

export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
}

export function removeToCart(item) {
  return {
    type: REMOVE_TO_CART,
    payload: item,
  };
}

export function getUserList() {
  return {
    type: USER_LIST,
  };
}
