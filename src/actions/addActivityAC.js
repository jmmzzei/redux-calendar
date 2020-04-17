import { ADD_ACTIVITY } from "../constants/action-types";

let index = 0;

export const addActivityAC = (month, day, payload) => {
    console.log('in')
    return {
        type: ADD_ACTIVITY,
        payload: payload,
        index: ++index,
        day: day,
        month: month,
    }
}
