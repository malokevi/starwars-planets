import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {
  checkStorage,
  setStorage,
  deleteStorage,
} from "../../helpers/localstorage"

interface IntroState {
  showIntro: boolean
}

const initialState: IntroState = {
  showIntro: checkStorage("intro") ? true : false,
}

export const counterSlice = createSlice({
  name: "intro",
  initialState,
  reducers: {
    setShowIntro: (state, { payload }: PayloadAction<boolean>) => {
      payload ? deleteStorage("intro") : setStorage("intro", "1")
      state.showIntro = payload
    },
  },
})

export const { setShowIntro } = counterSlice.actions

export default counterSlice.reducer
