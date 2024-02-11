import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: { isAuthenticated: false, user: null },
  authCheck: { username: null, password: null },
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getAuthCheck: (state, action) => {
      state.authCheck = action.payload;
    },
    setAuth: (state, action) => {
      state.auth = action.payload;
    },
  },
});
export const { setAuth, getAuthCheck } = UserSlice.actions;
export default UserSlice.reducer;
