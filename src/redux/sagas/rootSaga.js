import { takeLatest } from "redux-saga/effects";

import { getTasksSaga } from "./getTasksSaga";
import { addTaskSaga } from "./addTaskSaga";
import { deleteAllTasksSaga } from "./deleteAllTasksSaga";

export default function* rootSaga(){
    yield takeLatest('GET_REMOTE_TASKS_STARTED', getTasksSaga)
    yield takeLatest('ADD_TASK_STARTED', addTaskSaga)
    yield takeLatest('DELETE_ALL_TASKS_STARTED', deleteAllTasksSaga)
}