import { configureStore } from "@reduxjs/toolkit";

//reducers
import user from "./slices/user";
import mode from "./slices/mode";

export default configureStore({
  reducer: {
    user,
    mode,
  }
});

