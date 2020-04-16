import {ADD_ACTIVITY, REMOVE_ACTIVITY} from "../constants/action-types";
import {initialState} from "../state/initialState";

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ACTIVITY:
      let newstate = {}

      for (let e in state) {
        if (state.hasOwnProperty(e)) {
          if (e === action.month) {
            newstate += {
              e:
              {
                day: e.day,
                activities: [
                  ...e.activities,
                  {
                    day: action.day,
                    todo: action.payload
                  }
                ]
              }
            }
          } else {
            newstate += e
          }
        }
      }
      return newstate

    default:
      return state
  }
};
