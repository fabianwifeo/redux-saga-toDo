import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { v4 as uuidv4 } from "uuid";

function Form(){

    const [newTask, setNewTask] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();

    const clearInput = () => {
        setNewTask('');
    }

    const addNewTask = () => {

        if(newTask === '' || newTask.length > 30){
            setErrorMessage('Please add a valid task (maximum 30 characters)');
            return;
        }
        setErrorMessage('');
        dispatch({
            type: 'ADD_TASK',
            payload: {task: newTask}
        })
        clearInput();
    }

    return (
        <div>
            <form>
                <input 
                type="text" 
                className="addTask-input" 
                required
                value={newTask}
                onInput={(e) => {
                    setNewTask(e.target.value);
                }}
                />
                <button 
                className="addTask-button"
                onClick={(e) => {
                    e.preventDefault();
                    addNewTask()
                }}
                >
                    <FontAwesomeIcon icon={faPlus}/>
                </button>
            <p className="error-message">{errorMessage}</p>
            </form>
        </div>
    )
}

export default Form;