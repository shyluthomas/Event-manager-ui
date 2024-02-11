import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/sagas";
// import mainSaga from './saga/mainSaga';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  userReducer: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
