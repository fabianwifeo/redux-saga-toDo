import { call, put } from 'redux-saga/effects';

const deleteAllTasks = () => fetch('http://localhost:4000/api/tasks', {method: 'DELETE'})

export function* deleteAllTasksSaga(){
    try {
        yield put({type: 'DELETE_ALL_TASKS_SUCCEEDED'})
        yield call(deleteAllTasks)
        console.log('Delete all tasks succeeded')
    }
    catch (error){
        console.log('Add task failed:', error)
        yield put({type: 'DELETE_ALL_TASKS_FAILED'})
        console.log('delete all tasks failed')
    }
}