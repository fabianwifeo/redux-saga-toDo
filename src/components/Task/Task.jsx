import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Task(){
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
            <p className='task-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
    )
}

export default Task;