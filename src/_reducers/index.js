import { combineReducers } from "redux";
import { sorting } from "./sort.reducer";
import { tickets } from "./tickets.reducer";

const rootReducer = combineReducers({
  sorting,
  tickets
});

export default rootReducer;
