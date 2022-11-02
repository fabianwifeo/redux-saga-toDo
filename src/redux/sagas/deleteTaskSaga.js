import { call, put } from 'redux-saga/effects';

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