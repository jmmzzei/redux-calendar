import React from "react";
import { REMOVE_ACTIVITY } from "../constants/action-types";

export const removeActivityAC = (action) => ({
  type: REMOVE_ACTIVITY,
  index: action.index,
});
