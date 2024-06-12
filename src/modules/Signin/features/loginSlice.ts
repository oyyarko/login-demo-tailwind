import { createSlice } from "@reduxjs/toolkit";

interface LoginState {
  activeUser: any;
  isLoggedIn: boolean;
}

const initialState: LoginState = {
  activeUser: {
    username: "arko",
  },
  isLoggedIn: false
};

const loginSlice = createSlice({
  initialState: initialState,
  name: "login",
  reducers: {
    setActiveUser: (state, { payload }) => ({
      ...state,
      activeUser: payload,
    }),
    setLoggedIn: (state, { payload }) => ({
      ...state,
      isLoggedIn: payload,
    }),
  },
});

export const { setActiveUser, setLoggedIn } = loginSlice.actions;
export default loginSlice.reducer;
