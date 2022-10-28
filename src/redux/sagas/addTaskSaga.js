// import { call, put } from 'redux-saga/effects';

// const addTask = (task) => fetch('http://localhost:4000/api/tasks', {method: 'POST', headers: { 'Content-type': "application/json"}, body: JSON.stringify(task)});

// export function* addTaskSaga(action){
//     try {
//         const res = yield call(addTask(action.payload))
//         console.log(res)
//         yield put({type: 'ADD_TASK', payload: action.payload})
//     }
//     catch (error){
//         console.log(error)
//     }
// }