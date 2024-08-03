import { call, put, takeEvery } from "redux-saga/effects";
import { CatBreed } from "../../../types";

import { dataSuccess } from "./testStoreSlice";

function* getDataWorker(): Generator<unknown, void, any> {
  const response:Response = yield call(() => fetch("https://api.thecatapi.com/v1/breeds"));
  const formmatedData:CatBreed[] = yield response.json();
  const formmatedDataSliced = formmatedData.slice(0, 10);
  yield put(dataSuccess(formmatedDataSliced));
}

function* testingSagaHolder() {
  yield takeEvery("testStoreSlice/getData", getDataWorker);
}

export default testingSagaHolder;