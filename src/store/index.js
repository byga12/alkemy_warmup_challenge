import { configureStore } from "@reduxjs/toolkit";

//reducers
import user from "./slices/user";


export default configureStore({
  reducer: {
    user
  }
});

