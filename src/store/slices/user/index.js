import { createSlice } from "@reduxjs/toolkit";

export const userTokenSlice = createSlice({
  name: "userToken",
  initialState: {
    userToken: "",
  },
  reducers: {
    setUserToken: (state, action) => {
      state.userToken = action.payload
    }
  }
})

export const { setUserToken } = userTokenSlice.actions

export default userTokenSlice.reducer;


export const setToken = (token) => (dispatch) => {
  dispatch(setUserToken(token))
}
