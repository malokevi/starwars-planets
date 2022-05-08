import { combineReducers } from "@reduxjs/toolkit"
import introReducer from "./introReducer"

const rootReducer = combineReducers({
  intro: introReducer,
})

export default rootReducer
