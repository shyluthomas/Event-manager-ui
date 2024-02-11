import {
  // call,
  put,
  takeEvery,
} from "redux-saga/effects";
import * as user from "../reducers/userReducer";

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

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mainSaga() {
  yield takeEvery(user.getAuthCheck, _getAuthCheck);
}

export default mainSaga;
