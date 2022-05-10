import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {
  checkStorage,
  setStorage,
  deleteStorage,
} from "../../helpers/localstorage"

interface SettingsState {
  showIntro: boolean
  background: boolean
  planetPan: boolean
}

const initialState: SettingsState = {
  showIntro: !!checkStorage("intro"), // if no localstorage value, show intro
  background: !!checkStorage("intro"), // if no localstorage value, show stars
  planetPan: checkStorage("intro") ? true : false, // if localstorage value, show planet
}

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setShowIntro: (state, { payload }: PayloadAction<boolean>) => {
      payload ? deleteStorage("intro") : setStorage("intro", "1")
      state.showIntro = payload
    },
    setBackground: (state) => {
      state.background = true
    },
    setPlanetPan: (state) => {
      state.planetPan = true
    },
  },
})

export const { setShowIntro, setBackground, setPlanetPan } =
  settingsSlice.actions

export default settingsSlice.reducer
