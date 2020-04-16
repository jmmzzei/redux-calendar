import { createStore } from "redux";
import { mainReducer } from "../reducers/mainReducer";

export default function store(initialState = {}) {
  return createStore(mainReducer, initialState);
}
