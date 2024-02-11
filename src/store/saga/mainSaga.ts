import { 
    // call, put, 
    takeEvery } from 'redux-saga/effects'
import * as user  from '../reducers/userReducer';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action: any) {
  try {
     yield console.log('first', action)
  } catch (e) {
    console.log('first')
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mainSaga() {
  yield takeEvery(user.auth, fetchUser)
}



export default mainSaga