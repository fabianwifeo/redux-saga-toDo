import { call, put } from 'redux-saga/effects';

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