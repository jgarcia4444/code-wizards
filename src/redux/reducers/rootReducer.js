import { combineReducers } from "@reduxjs/toolkit";
import tabSelectionReducer from "./tabSelectionReducer";
import servicesCtaReducer from "./servicesCtaReducer";

const rootReducer = combineReducers({
    tabSelector: tabSelectionReducer,
    servicesCta: servicesCtaReducer
})

export default rootReducer;