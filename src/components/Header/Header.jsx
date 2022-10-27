import Counter from '../Counter/Counter';
import { useDispatch } from 'react-redux'

function Header(){

    const dispatch = useDispatch();

    const clearList = () => {
        dispatch({
           type: 'DELETE_ALL_TASKS' 
        })
    }

    return (
        <header>
            <h1>Redux/Saga ToDo</h1>
            <Counter/>
            <button className='clear-button' onClick={() => clearList()}>Clear</button>
        </header>
    )
}

export default Header;