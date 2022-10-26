const initialState = {
    tasks : []
}

function taskReducer(state = initialState, action){
    switch (action.type){
        case 'ADD_TASK' :
            return {...state, tasks : [...state.tasks, action.payload]}
        case 'DELETE_TASK':
            let firstPart = state.tasks.slice(0, action.index);
            let secondPart = state.tasks.slice(action.index + 1);
            return {...state, tasks : firstPart.concat(secondPart)}
        default : 
            return state
    }
}

export default taskReducer;