import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';

function Task(props){

    const tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch()

    function deleteTask(){
        const index = props.index;
        dispatch({
            type: 'DELETE_TASK',
            index: index
        })
    }

    function moveTask(direction){
        let index = props.index;
        let newIndex = direction === 'left' ? index - 1 : index + 1;
        dispatch({
            type: 'MOVE_TASK',
            payload: props.task,
            index,
            newIndex
        })
    }

    return (
        <div className="task">
            <FontAwesomeIcon
            onClick={() => deleteTask()} 
            className='task-icon delete-icon'
            icon={faXmark} />
            
            {props.index !== 0 &&
                <FontAwesomeIcon
                onClick={() => moveTask('left')} 
                className='task-icon left-icon'
                icon={faArrowLeft} />
            }
            {props.index < tasks.length -1 &&
                <FontAwesomeIcon
                onClick={() => moveTask('right')}  
                className='task-icon right-icon'
                icon={faArrowRight} />
            }
            <p className='task-content'>{props.task}</p>
        </div>
    )
}

export default Task;