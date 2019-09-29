import { sortConstants } from "../_constants";
import { delay } from "../_helpers";

export const sortActions = {
  sortByPrice,
  sortBySpeed
};

function sortByPrice(sort) {
  return dispatch => {
    // delay(500).then(() =>
    dispatch({ type: sortConstants.PRICE, sort });
  };
}

function sortBySpeed(sort) {
  return dispatch => {
    // delay(500).then(() =>
    dispatch({ type: sortConstants.SPEED, sort });
  };
}
