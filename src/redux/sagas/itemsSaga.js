import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* getItem() {
  console.log("in GET ITEM");
  try {
    const response = yield axios.get(`/api/item`);
    yield put({
      type: "SET_ITEMS_LIST",
      payload: response.data,
    });
    console.log(response);
  } catch (error) {
    console.log("axios GET err", error);
  }
}

function* itemsSaga() {
  yield takeLatest("GET_ITEMS_LIST", getItem);
  yield takeLatest("ADD_ITEMS", addItems);
}

function* addItems(action) {
  try {
    yield axios.post(`/api/item`, action.payload);
    yield put({ type: "GET_ITEMS_LIST" });
    console.log(action.payload);
  } catch (error) {
    console.log("Item POST err", error);
  }
}

export default itemsSaga;
