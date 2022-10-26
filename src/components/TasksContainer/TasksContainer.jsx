import Task from '../Task/Task';
import { useSelector } from 'react-redux';

function TaskContainer(){

    const tasks = useSelector(state => state.tasks)

    return (
        <div className="tasksContainer">
            {tasks.map((task, index) => {
                return (
                    <Task
                    task={task}
                    key={index}
                    index={index}
                    />
                )
            })}
        </div>
    )
}

export default TaskContainer;