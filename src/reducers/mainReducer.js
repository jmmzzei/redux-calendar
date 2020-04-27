import { ADD_ACTIVITY, REMOVE_ACTIVITY, SYNC_STORE } from "../constants/action-types";
import { initialState } from "../state/initialState";

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ACTIVITY:
            let newstate = {}

            for (let e in state) {
                if (state.hasOwnProperty(e)) {
                    if (e === action.month) {
                        newstate[e] =
                        {
                            days: state[e].days,
                            activities: [
                                ...state[e].activities,
                                {
                                    day: action.day,
                                    todo: action.payload,
                                    index: action.index
                                }
                            ]
                        }
                    } else {
                        newstate[e] = { days: state[e].days, activities: state[e].activities }
                    }
                }
            }
            return newstate
        case SYNC_STORE:
            return { ...action.newstore }
        case REMOVE_ACTIVITY:
            let ns = {}

            for (let e in state) {
                if (state.hasOwnProperty(e)) {
                    if (e === action.month) {
                        ns[e] =
                        {
                            days: state[e].days,
                            activities: state[e].activities.filter(el => el.index !== action.index)
                        }
                    } else {
                        ns[e] = { days: state[e].days, activities: state[e].activities }
                    }
                }
            }
            return ns
        default:
            return state
    }
};
