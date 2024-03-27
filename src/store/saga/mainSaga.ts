import * as user from "../reducers/userReducer";

import { EventCreation, Profile, UpdateEventData } from "@/types/event";
import { put, takeEvery } from "redux-saga/effects";

import { UserAction } from "@/types/user";
import helpers from "@/utils/helpers";
import { userService } from "@/services";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* _getAuthCheck(action: any) {
  try {
    // Write the service for auth check using axios
    // set token locally as well
    yield console.log("first", action);
    //setting auth from the api response
    yield put(user.setAuth({}));
  } catch (e) {
    console.log("first");
  }
}

function* _setNewUser(action: UserAction): any {
  try {
    const userData = action.payload;
    const newUser = yield userService.newUser(userData);
    //setting auth from the api response
    yield put(user.setUserCreation({ status: "success", user: newUser }));
    yield put(user.setDialog({ status: true, message: "User created" }));
  } catch (e) {
    yield put(user.setUserCreation({ status: "Failed", user: null }));
  }
}

function* _setLogin(action: UserAction): any {
  try {
    const userData = action.payload;
    const response = yield userService.loginUser(userData);
    //setting auth from the api response
    if (response.status === 200) {
      yield helpers.setAuthToken(response.data.token);
      const responseProfile = yield userService.getProfile();
      if (responseProfile.status === 200) {
        yield put(user.getProfileData({ loading: false, profile: response }));
      }
      yield put(user.setAuth({ isAuthenticated: true, user: response.data }));
    } else {
      yield put(user.setAuth({ isAuthenticated: false }));
    }
  } catch (e) {
    yield put(user.setAuth({ isAuthenticated: false }));
  }
}

function* _logOut() {
  yield helpers.removeAuthToken();
}

function* _getEventFetch(): any {
  const response = yield userService.eventDetails();

  if (response.status === 200) {
    yield put(user.updateEventData({ event: response.data, loading: false }));
  }
}

function* _createEvent(action: EventCreation): any {
  const eventData = action.payload;
  const response = yield userService.createEvent(eventData);
  if (response.status === 201) {
    yield put(
      user.setMessage({ status: true, body: "New Task has been created.." })
    );
    yield put(user.getEventFetch(true));
  }
}

function* _getProfile(): any {
  const response = yield userService.getProfile();
  if (response.status === 200) {
    yield put(user.getProfileData({ loading: false, profile: response }));
  }
}

function* _getPatchData(action: Profile): any {
  const id = action.payload;
  const getDatabyIdResponse = yield userService.singleEventDetails(id);
  // const response = yield userService.patchEvent(id);
  if (getDatabyIdResponse.status === 200) {
    yield put(
      user.patchResponse({ updated: true, patchResponse: getDatabyIdResponse })
    );
  }
}

function* _updateEventDate(action: UpdateEventData): any {
  const id = action.payload;
  const updated = yield userService.patchEvent(id);

  if (updated.status === 200) {
    yield put(user.patchResponse({ updated: true, patchResponse: updated }));
    yield put(user.getEventFetch(true));
  }
}

function* _deleteEvent(action: Profile): any {
  const id = action.payload;
  const updated = yield userService.deleteEvent(id);
  if (updated.status === 200) {
    yield put(user.getEventFetch(true));
    yield put(
      user.setMessage({ status: true, body: `Event ${id} has been deleted` })
    );
  }
}
/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mainSaga() {
  yield takeEvery(user.getAuthCheck, _getAuthCheck);
  yield takeEvery(user.setNewUser, _setNewUser);
  yield takeEvery(user.setLogin, _setLogin);
  yield takeEvery(user.logOut, _logOut);
  yield takeEvery(user.getEventFetch, _getEventFetch);
  yield takeEvery(user.createEvent, _createEvent);
  yield takeEvery(user.getProfile, _getProfile);
  yield takeEvery(user.getPatchData, _getPatchData);
  yield takeEvery(user.updateEvent, _updateEventDate);
  yield takeEvery(user.deleteEvent, _deleteEvent);
}

export default mainSaga;
