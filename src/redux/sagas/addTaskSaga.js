import { call, put } from 'redux-saga/effects';

export function* addTaskSaga(action){
    try {
        const task = action.payload
        yield put({type: 'ADD_TASK_SUCCEEDED', payload: action.payload})
        yield call(fetch('http://localhost:4000/api/tasks', {method: 'POST', headers: { 'Content-type': "application/json"}, body: JSON.stringify(task)}))
    }
    catch (error){
        console.log('Add task failed:', error)
        yield put({type: 'ADD_TASK_FAILED'})
    }
}