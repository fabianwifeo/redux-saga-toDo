function Counter(){

    let uncompletedTasks = 0;

    return (
        <div>
            <p className="Counter">{`Uncompleted tasks : ${uncompletedTasks}`}</p>
        </div>
    )
}

export default Counter;