import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Form(){

    return (
        <div>
            <form>
                <input type="text" className="addTask-input" required/>
                <button className="addTask-button"><FontAwesomeIcon icon={faPlus}/></button>
            </form>
            <p className="error-message"></p>
        </div>
    )
}

export default Form;