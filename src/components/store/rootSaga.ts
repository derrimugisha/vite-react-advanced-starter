import { all, fork } from "redux-saga/effects";
import testingSagaHolder from "./testStore/testingSaga";
export default function* rootSaga() {
    yield all([fork(testingSagaHolder),]);
  }