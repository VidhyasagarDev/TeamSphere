import { all } from "redux-saga/effects";
import authSagas from "../features/auth/authSagas";

function* rootSaga() {
  yield all([authSagas()]);
}

export default rootSaga;
