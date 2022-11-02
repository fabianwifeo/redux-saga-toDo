// import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import tasksReducer from './reducers/tasksReducer';
import tasksSaga from './sagas/tasksSaga';
// import { getTasksSaga } from './sagas/getTasksSaga';

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: tasksReducer,
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(tasksSaga);

export default store;
