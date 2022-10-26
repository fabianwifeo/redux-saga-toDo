import { useSelector } from 'react-redux';

function Counter(){

    const uncompletedTasks = useSelector(state => state.tasks.length)

    return (
        <div>
            <p className="Counter">{`Uncompleted tasks : ${uncompletedTasks}`}</p>
        </div>
    )
}

export default Counter;