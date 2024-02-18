import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: { isAuthenticated: false, user: null },
  authCheck: { username: null, password: null },
  newUser: {},
  userCreation: {status:'', user: {}}
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
    setNewUser: (state, action) => {
        state.newUser = action.payload;
    },
    setUserCreation: (state, action) => {
        state.userCreation = action.payload;
    },
  },
});
export const { setAuth, getAuthCheck ,setNewUser, setUserCreation} = UserSlice.actions;
export default UserSlice.reducer;
