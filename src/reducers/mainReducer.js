import { ADD_ACTIVITY, REMOVE_ACTIVITY } from "../constants/action-types";
import { initialState } from "../state/initialState";

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ACTIVITY:
      return Object.assign({}, state, {
        data: state.data.map((e) =>
          e.month === action.month
            ? e
            : //{
              //...e,
              //{
              //e.activities = [
              //{...e.activities},
              //{
              //day: action.day,
              //todo: action.todo,
              //completed: false
              //}
              //]
              //}
              //}
              e
        ),
      });
    default:
      return state;
  }
};
