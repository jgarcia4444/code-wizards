import { combineReducers } from "@reduxjs/toolkit";
import tabSelectionReducer from "./tabSelectionReducer";

const rootReducer = combineReducers({
    tabSelector: tabSelectionReducer,
})

export default rootReducer;