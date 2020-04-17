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
                                    todo: action.payload
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
            console.log('days')
            return { ...action.newstore }
        default:
            return state
    }
};
