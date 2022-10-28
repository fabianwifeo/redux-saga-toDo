import { takeEvery } from "redux-saga/effects";

import { getTasksSaga } from "./getTasksSaga";
// import { addTaskSaga } from "./addTaskSaga";

export default function* rootSaga(){
    yield takeEvery('GET_REMOTE_TASKS_STARTED', getTasksSaga)
}