import Task from '../Task/Task';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from "uuid";

function TaskContainer(){

    const tasks = useSelector(state => state.tasks);
    const apiErrorMessage = useSelector(state => state.errorMessage);

    return (
        <div>
            {apiErrorMessage !== '' &&
                <h2 className='apiError-message'>{apiErrorMessage}</h2>
            }
            <div className="tasksContainer">
                {tasks.map((task, index) => {
                    return (
                        <Task
                        task={task.task}
                        key={uuidv4()}
                        index={index}
                        id={task._id}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default TaskContainer;