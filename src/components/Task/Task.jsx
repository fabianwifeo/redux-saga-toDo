import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Task(props){
    return (
        <div className="task">
            <FontAwesomeIcon 
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