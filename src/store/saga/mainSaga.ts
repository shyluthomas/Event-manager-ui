import * as user from "../reducers/userReducer";

import { put, takeEvery } from "redux-saga/effects";

import { UserAction } from "@/types/user";
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
    yield put(user.setUserCreation({ status: "sucess", user: newUser }));
  } catch (e) {
    yield put(user.setUserCreation({ status: "Failed", user: null }));
    console.log("first");
  }
}

function* _setLogin(action: UserAction): any {
  try {
    const userData = action.payload;
    const response = yield userService.loginUser(userData);
    //setting auth from the api response
    if (response.status === 200) {
      yield put(user.setAuth({ isAuthenticated: true, user: response.data }));
    }
    else{
      yield put(user.setAuth({ isAuthenticated: false}))
    }
  } catch (e) {
    yield put(user.setAuth({ isAuthenticated: false }));
    console.log("first");
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
}

export default mainSaga;
