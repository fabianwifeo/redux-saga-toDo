// import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import tasksReducer from './reducers/tasksReducer';
import rootSaga from './sagas/rootSaga';
// import { getTasksSaga } from './sagas/getTasksSaga';

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: tasksReducer,
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;
