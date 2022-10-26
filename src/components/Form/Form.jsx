import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Form(){

    const [newTask, setNewTask] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const clearInput = () => {
        setNewTask('');
    }

    const addNewTask = () => {

        if(newTask === '' || newTask.length > 30){
            setErrorMessage('Please add a valid task (maximum 30 characters)');
            return;
        }
        setErrorMessage('');
        console.log(newTask);
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
                    console.log(newTask);
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