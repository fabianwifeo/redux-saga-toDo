import { takeLatest, call, put } from "redux-saga/effects";

const getTasks = () => fetch('http://localhost:4000/api/tasks');

export function* getTasksSaga(){
    try {
        const res = yield call(getTasks);
        const datas = yield res.json()
        console.log('Get remote tasks action succeeded')
        yield put({type: 'GET_REMOTE_TASKS_SUCCEEDED', payload: datas})
    }
    catch(error) {
        console.log('Get remote tasks action failed', error)
        yield put({type: 'GET_REMOTE_TASKS_FAILED'})
    }
}

const addTask = (task) => fetch('http://localhost:4000/api/tasks', {method: 'POST', headers: { 'Content-type': "application/json"}, body: JSON.stringify(task)})

export function* addTaskSaga(action){
    try {
        yield call(addTask, action.payload)
        yield put({type: 'ADD_TASK_SUCCEEDED', payload: action.payload})
        console.log('Add task action succeeded', action.payload)
    }
    catch (error){
        console.log('Add task action failed:', error)
        yield put({type: 'ADD_TASK_FAILED'})
    }
}

const deleteTask = (id) => fetch(`http://localhost:4000/api/tasks/${id}`, {method: 'DELETE'})

export function* deleteTaskSaga(action){
    try {
        yield call(deleteTask, action.id)
        yield put({type: 'DELETE_TASK_SUCCEEDED', id: action.id})
        console.log('Delete task action succeeded :', action.id)
    }
    catch (error){
        console.log('Delete task action failed:', error)
        yield put({type: 'DELETE_TASK_FAILED'})
    }
}

const deleteAllTasks = () => fetch('http://localhost:4000/api/tasks', {method: 'DELETE'})

export function* deleteAllTasksSaga(){
    try {
        yield call(deleteAllTasks)
        yield put({type: 'DELETE_ALL_TASKS_SUCCEEDED'})
        console.log('Delete all tasks action succeeded')
    }
    catch (error){
        console.log('Delete all tasks action failed:', error)
        yield put({type: 'DELETE_ALL_TASKS_FAILED'})
    }
}


export default function* tasksSaga(){
    yield takeLatest('GET_REMOTE_TASKS_STARTED', getTasksSaga)
    yield takeLatest('ADD_TASK_STARTED', addTaskSaga)
    yield takeLatest('DELETE_ALL_TASKS_STARTED', deleteAllTasksSaga)
    yield takeLatest('DELETE_TASK_STARTED', deleteTaskSaga)
}