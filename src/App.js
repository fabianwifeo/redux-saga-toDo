import './App.css';

import Header from './components/Header/Header';
import Form from './components/Form/Form';
import TasksContainer from './components/TasksContainer/TasksContainer';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux'

function App() {

const dispatch = useDispatch()
const getRemoteTasks = () => {
  dispatch({
    type: 'GET_REMOTE_TASKS_STARTED'
  })
}
  
  useEffect(() => {
    getRemoteTasks()
  })

  return (
    <div className="App">
      <Header/>
      <Form/>
      <TasksContainer/>
    </div>
  );
}

export default App;
