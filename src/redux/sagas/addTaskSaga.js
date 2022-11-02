import { call, put } from 'redux-saga/effects';

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