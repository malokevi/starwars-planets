import { combineReducers } from "@reduxjs/toolkit"
import settingsReducer from "./settingsReducer"

const rootReducer = combineReducers({
  settings: settingsReducer,
})

export default rootReducer
