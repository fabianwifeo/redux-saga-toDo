const initialState = {
    tasks : [],
    errorMessage : '',
}

function taskReducer(state = initialState, action){
    switch (action.type){

        case 'GET_REMOTE_TASKS_SUCCEEDED' :
            return {...state, tasks: action.payload}

        case 'GET_REMOTE_TASKS_FAILED' :
            return {...state, errorMessage: 'An error occured - failed to get tasks'}

        case 'ADD_TASK_SUCCEEDED' :
            return {...state, tasks : [...state.tasks, action.payload]}

        case 'ADD_TASK_FAILED' : 
            return {...state, errorMessage: 'An error occured - failed to add task'}

        case 'DELETE_ALL_TASKS_SUCCEEDED' :
            return {...state, tasks : []}

        case 'DELETE_ALL_TASKS_FAILED' :
            return {...state, errorMessage: 'An error occured - failed to delete all tasks'}

        case 'DELETE_TASK_SUCCEEDED':
            let filteredTasks = state.tasks.filter((task) => task._id !== action.id);
            return {...state, tasks: [...filteredTasks]}

        case 'DELETE_TASK_FAILED' :
            return {...state, errorMessage: 'An error occured - failed to delete the task'}
            
        case 'MOVE_TASK' :
            let newArray = [...state.tasks]
            newArray.splice(action.index, 1);
            newArray.splice(action.newIndex, 0, action.payload)
            return {...state, tasks : newArray};
        
        default : 
            return state
    }
}

export default taskReducer;