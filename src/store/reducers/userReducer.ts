import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: { isAuthenticated: false, user: null },
  authCheck: { username: null, password: null },
  newUser: {},
  userCreation: { status: "", user: {} },
  userLogin: { username: "", password: "" },
  dialog: { status: false, message: "" },
  eventData: {
    event: {
      event: [
        {
          id: "",
          createdAt: "",
          description: "",
          eventCardImage: "",
          eventCategoryId: "",
          eventItenary: [
            {
              schedule: "",
              description: "",
            },
          ],
          published: "",
          ticketTotalCount: "",
          title: "",
          updatedAt: "",
          status: "",
        },
      ],
      loading: false,
    },
  },
  eventFetch: true,
  createEvent: { loading: "", event: {} },
  getProfile: {
    profile: {
      data: {
        status: "",
        user: {
          address: "",
          avatar: "",
          dob: "",
          email: "",
          id: "",
          language: "",
          name: "",
          phone: "",
          roleId: "",
          sex: "",
        },
      },
    },
  },
  getPatchEvent: {
    id: "",
  },
  patchResponse: {
    updated: false,
    patchResponse: {},
  },
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
    setLogin: (state, action) => {
      state.userLogin = action.payload;
    },
    setDialog: (state, action) => {
      state.dialog = action.payload;
    },
    logOut: () => {},
    getEventFetch: (state, action) => {
      state.eventFetch = action.payload;
    },
    updateEventData: (state, action) => {
      state.eventData = action.payload;
    },
    createEvent: (state, action) => {
      state.createEvent = action.payload;
    },
    getProfile: () => {},
    getProfileData: (state, action) => {
      state.getProfile = action.payload;
    },
    getPatchData: (state, action) => {
      state.getPatchEvent = action.payload;
    },
    patchResponse: (state, action) => {
      console.log("PATCHstate", state);
      state.patchResponse = action.payload;
    },
  },
});
export const {
  setAuth,
  getAuthCheck,
  setNewUser,
  setUserCreation,
  setLogin,
  setDialog,
  logOut,
  getEventFetch,
  updateEventData,
  createEvent,
  getProfileData,
  getProfile,
  getPatchData,
  patchResponse,
} = UserSlice.actions;
export default UserSlice.reducer;
