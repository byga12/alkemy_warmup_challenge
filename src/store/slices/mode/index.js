import { createSlice } from "@reduxjs/toolkit";

export const modeTokenSlice = createSlice({
  name: "userToken",
  initialState: {
    mode: "",
  },
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload
    }
  }
})

export const { setMode } = modeTokenSlice.actions

export default modeTokenSlice.reducer;



export const toggleAddModes = () => (dispatch,getState) => {
  const mode = getState().mode.mode;
  if(!mode || mode !== 'ADD') {
    dispatch(setMode("ADD"))
  } else {
    dispatch(setMode(""))
  }
}

export const toggleEditModes = () => (dispatch, getState) => {
  const mode = getState().mode.mode;
  if(!mode || mode !== 'EDIT') {
    dispatch(setMode("EDIT"))
  } else {
    dispatch(setMode(""))
  }
}

