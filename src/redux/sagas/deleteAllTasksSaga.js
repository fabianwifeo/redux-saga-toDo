import { call, put } from 'redux-saga/effects';

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