import { takeEvery } from "redux-saga/effects";

function* fetchUser() {
  yield "success";
}

function* loginSaga() {
  yield takeEvery("fetchUser", fetchUser);
}

export default loginSaga;
