import { createSlice } from "@reduxjs/toolkit";

interface SingupState {
  users: any;
}

const initialState: SingupState = {
  users: [],
};

const signUpSlice = createSlice({
  initialState: initialState,
  name: "signup",
  reducers: {
    setUsers: (state, { payload }) => ({
      ...state,
      users: [...state.users, payload],
    }),
  },
});

export const { setUsers } = signUpSlice.actions;
export default signUpSlice.reducer;
