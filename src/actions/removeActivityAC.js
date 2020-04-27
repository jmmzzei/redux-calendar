import { REMOVE_ACTIVITY } from "../constants/action-types";

export const removeActivityAC = (index, month) => ({
    type: REMOVE_ACTIVITY,
    index: index,
    month: month
});
