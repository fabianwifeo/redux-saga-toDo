import { configureStore } from '@reduxjs/toolkit';

import toDoReducer from './reducers/tasksReducer';

const store = configureStore({reducer: toDoReducer});

export default store;