import { createSlice } from '@reduxjs/toolkit';

const initialState = {
isAuthenticated: false

};

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        auth: (state, action) => {
            state.isAuthenticated = action.payload;
          },

    }
});
export const { auth } = UserSlice.actions;
export default UserSlice.reducer;