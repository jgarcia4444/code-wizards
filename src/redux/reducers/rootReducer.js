import { combineReducers } from "@reduxjs/toolkit";
import tabSelectionReducer from "./tabSelectionReducer";
import servicesCtaReducer from "./servicesCtaReducer";
import portfolioReducer from "./portfolioReducer";

const rootReducer = combineReducers({
    tabSelector: tabSelectionReducer,
    servicesCta: servicesCtaReducer,
    portfolio: portfolioReducer,
})

export default rootReducer;