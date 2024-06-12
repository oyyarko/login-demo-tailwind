import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../modules/Signin/features/loginSlice";
import signUpSlice from "../modules/Signup/features/signUpSlice";

const store = configureStore({
  reducer: {
    login: loginSlice,
    signup: signUpSlice,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
