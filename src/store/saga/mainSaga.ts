import { userService } from "@/services";
import * as user from "../reducers/userReducer";

import {
  put,
  takeEvery,
} from "redux-saga/effects";

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

function* _setNewUser(action: any): any {
  try {
    const userData = action.payload;
    const newUser:any = yield userService.newUser(userData);
    //setting auth from the api response
    yield put(user.setUserCreation({status:'sucess', user: newUser}));
  } catch (e) {
    yield put(user.setUserCreation({status:'Failed', user: null}));
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
}

export default mainSaga;
