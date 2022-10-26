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