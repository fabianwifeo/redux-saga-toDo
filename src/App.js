import './App.css';

import Header from './components/Header/Header';
import Form from './components/Form/Form';
import TaskContainer from './components/TasksContainer/TasksContainer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Form/>
      <TaskContainer/>
    </div>
  );
}

export default App;
