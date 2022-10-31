import { call, put } from 'redux-saga/effects';

export function* deleteAllTasksSaga(){
    try {
        yield put({type: 'DELETE_ALL_TASKS_SUCCEEDED'})
        yield call(fetch('http://localhost:4000/api/tasks', {method: 'DELETE'}))
    }
    catch (error){
        console.log('Add task failed:', error)
        yield put({type: 'DELETE_ALL_TASKS_FAILED'})
    }
}