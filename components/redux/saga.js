import { put, takeEvery } from "redux-saga/effects";
import { SET_USER_DATA, USER_LIST, CLEAR_STATE } from "../constants";

function* userList() {
  const url = "https://dummyjson.com/users";
  let data = yield fetch(url);
  data = yield data.json();
  // console.log("Saga fetched data:", JSON.stringify(data, null, 2));
  yield put({ type: CLEAR_STATE });
  yield put({ type: SET_USER_DATA, payload: data.users });
}

function* SagaData() {
  yield takeEvery(USER_LIST, userList);
}

export default SagaData;
