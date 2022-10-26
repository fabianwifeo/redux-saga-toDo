import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';

function Task(props){

    const dispatch = useDispatch()

    function deleteTask(){
        const index = props.index;
        dispatch({
            type: 'DELETE_TASK',
            index: index
        })
    }

    return (
        <div className="task">
            <FontAwesomeIcon
            onClick={() => deleteTask()} 
            className='task-icon delete-icon'
            icon={faXmark} />
            <FontAwesomeIcon 
            className='task-icon left-icon'
            icon={faArrowLeft} />
            <FontAwesomeIcon 
            className='task-icon right-icon'
            icon={faArrowRight} />
            <p className='task-content'>{props.task}</p>
        </div>
    )
}

export default Task;