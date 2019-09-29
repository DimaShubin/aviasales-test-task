import { sortConstants } from "../_constants";

export function sorting(state = { sort: "price" }, action) {
  switch (action.type) {
    case sortConstants.PRICE:
      return {
        sort: action.sort
      };
    case sortConstants.SPEED:
      return {
        sort: action.sort
      };
    default:
      return state;
  }
}
