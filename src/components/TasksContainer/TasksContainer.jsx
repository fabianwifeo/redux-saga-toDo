import Task from '../Task/Task';
import { useSelector } from 'react-redux';

function TaskContainer(){

    const tasks = useSelector(state => state.tasks);
    const apiErrorMessage = useSelector(state => state.getTasksErrorMessage);

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
                        key={task._id}
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