import { call, put, takeEvery } from "redux-saga/effects";
import { GET_ART_START, GET_ART_SUCCESS, GET_ART_ERROR } from "./types";
import { getArtItems } from "../../api";

function* fetchData(action) {
  try {
    yield put({ type: GET_ART_START });
    const { data } = yield call(getArtItems, action.payload);
    yield put({ type: GET_ART_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: GET_ART_ERROR, payload: err });
  }
}

export function* getArtSaga(url, page = 1) {
  yield takeEvery("ART_FETCH_REQUESTED", fetchData);
}
