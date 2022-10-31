import { call, put } from 'redux-saga/effects';

const addTask = (task) => fetch('http://localhost:4000/api/tasks', {method: 'POST', headers: { 'Content-type': "application/json"}, body: JSON.stringify(task)})

export function* addTaskSaga(action){
    try {
        yield put({type: 'ADD_TASK_SUCCEEDED', payload: action.payload})
        yield call(addTask, action.payload)
        console.log('Add task succeeded')
    }
    catch (error){
        console.log('Add task failed:', error)
        yield put({type: 'ADD_TASK_FAILED'})
        console.log('Add task failed')
    }
}